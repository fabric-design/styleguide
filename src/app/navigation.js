// @flow
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import articles from 'app/articles';

export class NavigationCustomElement {

    static inject = [Router, EventAggregator];

    categories = {};

    currentCategory = null;

    currentPage = null;

    constructor(router: Router, events: EventAggregator) {
        this.router = router;
        events.subscribe('router:navigation:success', this.pageChanged.bind(this));
        // Group articles by there category
        articles.forEach(article => {
            this.categories[article.category] = this.categories[article.category] || [];
            this.categories[article.category].push(article);
        });
    }

    pageChanged({instruction}) {
        if (instruction.params) {
            this.currentCategory = instruction.params.category;
            this.currentPage = instruction.params.page;
        }
    }
}
