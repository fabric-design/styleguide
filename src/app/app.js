// @flow

import articles from './articles';

export class App {

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            {route: '/:category/:page', name: 'page', navigationStrategy: this.pageStrategy.bind(this)}
        ]);
        // Get active page parameters
        if (router.currentInstruction && router.currentInstruction.params) {
            this.currentCategory = router.currentInstruction.params.category;
            this.currentPage = router.currentInstruction.params.page;
        }
    }

    pageStrategy(instruction: NavigationInstruction) {
        const categoryName = instruction.params && instruction.params.category;
        const pageName = instruction.params && instruction.params.page;
        const page = articles.find(article => article.category === categoryName && article.name === pageName);

        if (page) {
            // Either a moduleId is defined or we use the default layout which renders the parts of the page
            Object.assign(instruction.config, {moduleId: 'app/page'}, page);
        }
        else {
            instruction.config.title = 'Not found';
            instruction.config.moduleId = 'app/404.html';
        }
        // After the second routing it's necessary to update the viewport as well
        if (instruction.config.viewPorts) {
            instruction.config.viewPorts.default = instruction.config;
        }
    }
}
