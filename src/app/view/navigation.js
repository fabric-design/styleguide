// @flow
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import articles from '../articles';

export class NavigationCustomElement {

    static inject = [Router, EventAggregator];

    categories = {};

    currentCategory = null;

    currentPage = null;

    constructor(router: Router, events: EventAggregator) {
        events.subscribe('router:navigation:success', this.pageChanged.bind(this));
        // Group articles by there category
        articles.forEach(article => {
            this.categories[article.category] = this.categories[article.category] || [];
            this.categories[article.category].push(article);
        });
    }

    showSubMenu(item: HTMLElement) {
        const menu = item.querySelector('.sub-nav');
        const items = item.querySelectorAll('.subnav-item');
        // Don't handle active items
        if (item.classList.contains('is-active')) {
            return;
        }
        // Don't do anything if there is no sub menu
        if (!menu || !items.length) {
            return;
        }

        menu.style.height = '0';
        menu.style.transition = `height ${.03 * items.length}s linear`;
        menu.style.height = `${items[0].offsetHeight * items.length}px`;
    }

    hideSubMenu(item: HTMLElement) {
        const menu = item.querySelector('.sub-nav');
        // Don't handle active items
        if (item.classList.contains('is-active')) {
            return;
        }
        // Don't do anything if there is no sub menu
        if (!menu) {
            return;
        }

        menu.style.transition = `height .2s linear`;
        menu.style.height = '0';
    }

    pageChanged({instruction}: Object) {
        let params = instruction.params;
        // Fix when initial instruction / was redirected to any page
        // So the initial instruction has no params but the final (currentInstruction) has
        if (!params || !params.category) {
            params = instruction.router.currentInstruction.params || {};
        }
        this.currentCategory = params.category;
        this.currentPage = params.page;
    }
}
