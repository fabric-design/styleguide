/* */ 
(function(Buffer, process) {
  var BlockStream = require('../block-stream');
  var blockSizes = [16],
      writeSizes = [15, 16, 17],
      writeCounts = [1, 10],
      tap = require('tap');
  writeCounts.forEach(function(writeCount) {
    blockSizes.forEach(function(blockSize) {
      writeSizes.forEach(function(writeSize) {
        tap.test("writeSize=" + writeSize + " blockSize=" + blockSize + " writeCount=" + writeCount, function(t) {
          var f = new BlockStream(blockSize);
          var actualChunks = 0;
          var actualBytes = 0;
          var timeouts = 0;
          var paused = false;
          f.on("data", function(c) {
            timeouts++;
            t.notOk(paused, "should not be paused when emitting data");
            actualChunks++;
            actualBytes += c.length;
            var before = c.toString();
            paused = true;
            f.pause();
            process.nextTick(function() {
              var after = c.toString();
              t.equal(after, before, "should not change data");
              for (var i = 0; i < c.length; i++) {
                c[i] = "x".charCodeAt(0);
              }
              paused = false;
              f.resume();
              timeouts--;
            });
          });
          f.on("end", function() {
            var expectChunks = Math.ceil(writeSize * writeCount * 2 / blockSize);
            var expectBytes = expectChunks * blockSize;
            t.equal(actualBytes, expectBytes, "bytes=" + expectBytes + " writeSize=" + writeSize);
            t.equal(actualChunks, expectChunks, "chunks=" + expectChunks + " writeSize=" + writeSize);
            setTimeout(function WAIT() {
              if (timeouts > 0)
                return setTimeout(WAIT);
              t.end();
            }, 200);
          });
          for (var i = 0; i < writeCount; i++) {
            var a = new Buffer(writeSize);
            for (var j = 0; j < writeSize; j++)
              a[j] = "a".charCodeAt(0);
            var b = new Buffer(writeSize);
            for (var j = 0; j < writeSize; j++)
              b[j] = "b".charCodeAt(0);
            f.write(a);
            f.write(b);
          }
          f.end();
        });
      });
    });
  });
})(require('buffer').Buffer, require('process'));
