import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article-component.component";
import { ArticleDataService } from '../../shared/article-data.service';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  articleData: ArticleDataService = new ArticleDataService();
  articles: Article[] = this.articleData.articles;
    
}
