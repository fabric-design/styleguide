// @flow
import {activationStrategy} from 'aurelia-router';

export class DefaultPageLayout {

    static inject = [Element];

    constructor(element:Element) {
        this.element = element;
    }

    activate(params:Object, instruction:NavigationInstruction) {
        this.page = instruction;
    }

    scrollToPart(index) {
        let part = this.element.querySelectorAll('h2')[index];
        part.scrollIntoView();
    }
}
