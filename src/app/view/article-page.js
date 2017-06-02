import articles from 'app/articles';

export class ArticlePage {

    static inject = [Element];

    constructor(element) {
        this.element = element;
    }

    activate({category, page}) {
        const article = articles.find(article => article.category === category && article.name === page);

        if (article) {
            this.name = article.name;
            this.category = article.category;
            this.title = article.title;
            this.articleHtml = article.html;
            this.headings = article.headings;
        }
    }

    log(...args) {
        console.log(...args);
    }

    scrollToPart(index) {
        const headElements = this.element.querySelectorAll('h2');
        if (headElements[index]) {
            headElements[index].scrollIntoView();
        }
    }
}
