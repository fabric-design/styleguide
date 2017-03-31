import environment from './environment';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .globalResources([
            'app/view/iterable-converter'
        ]);

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot('app/view/app', document.body));
}
