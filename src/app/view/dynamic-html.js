import {noView, ViewCompiler, ViewSlot, Container, ViewResources, bindable} from 'aurelia-framework';

@noView()
export class DynamicHtmlCustomElement {

    static inject = [ViewCompiler, ViewSlot, Container, ViewResources];

    @bindable()
    value = '';

    constructor(viewCompiler, viewSlot, container, viewResources){
        this.viewCompiler = viewCompiler;
        this.viewSlot = viewSlot;
        this.container = container;
        this.viewResources = viewResources;
    }

    bind(bindingContext) {
        this.bindingContext = bindingContext;
    }

    attached() {
        this.render();
    }

    valueChanged() {
        this.render();
    }

    render() {
        // Remove old view if available
        if (this.view) {
            this.viewSlot.remove(this.view);
            this.view = null;
        }
        // Create a new view from current value
        const viewFactory = this.viewCompiler.compile(`<template>${this.value}</template>`, this.viewResources);
        this.view = viewFactory.create(this.container);
        this.view.bind(this.bindingContext);
        // Add the new view to the current view slot
        this.viewSlot.add(this.view);
        this.viewSlot.attached();
    }
}
