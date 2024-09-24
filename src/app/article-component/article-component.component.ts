import { Component } from '@angular/core';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponentComponent {
    article = {
      title: 'Titre de l\'article',
      author: 'John Doe',
      content: 'Voici le contenu de l\'article.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: ''
    };

    togglePublication(): void {
      this.article.isPublished = !this.article.isPublished;
    }
}
