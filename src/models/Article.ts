export class Article {
    id: number
    title: string;
    author: string;
    content: string;
    image: URL | string;

    constructor(id: number, title: string, author: string, content: string, image: URL | string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.image = image
    }
}