import articles from '../articles';

export class App {

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            {route: '', name: 'default', redirect: `/${articles[0].category}/${articles[0].name}`},
            {route: '/:category/:page', name: 'article-page', moduleId: 'app/view/article-page'}
        ]);
    }
}
