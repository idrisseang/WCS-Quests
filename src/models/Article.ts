export class Article {
    title: string;
    author: string;
    content: string;
    image: URL | string;

    constructor(title: string, author: string, content: string, image: URL | string) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.image = image
    }
}