import environment from './environment';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .globalResources([
            'app/shared/iterable-converter'
        ]);

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
}
