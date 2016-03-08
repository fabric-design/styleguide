/* */ 
(function(Buffer) {
  module.exports = collect;
  function collect(stream) {
    if (stream._collected)
      return;
    stream._collected = true;
    stream.pause();
    stream.on('data', save);
    stream.on('end', save);
    var buf = [];
    function save(b) {
      if (typeof b === 'string')
        b = new Buffer(b);
      if (Buffer.isBuffer(b) && !b.length)
        return;
      buf.push(b);
    }
    stream.on('entry', saveEntry);
    var entryBuffer = [];
    function saveEntry(e) {
      collect(e);
      entryBuffer.push(e);
    }
    stream.on('proxy', proxyPause);
    function proxyPause(p) {
      p.pause();
    }
    stream.pipe = (function(orig) {
      return function(dest) {
        var e = 0;
        ;
        (function unblockEntry() {
          var entry = entryBuffer[e++];
          if (!entry)
            return resume();
          entry.on('end', unblockEntry);
          if (dest)
            dest.add(entry);
          else
            stream.emit('entry', entry);
        })();
        function resume() {
          stream.removeListener('entry', saveEntry);
          stream.removeListener('data', save);
          stream.removeListener('end', save);
          stream.pipe = orig;
          if (dest)
            stream.pipe(dest);
          buf.forEach(function(b) {
            if (b)
              stream.emit('data', b);
            else
              stream.emit('end');
          });
          stream.resume();
        }
        return dest;
      };
    })(stream.pipe);
  }
})(require('buffer').Buffer);
