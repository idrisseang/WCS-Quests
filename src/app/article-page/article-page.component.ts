import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Article } from '../../models/Article';
import { HomePageComponent } from "../home-page/home-page.component";
import { ArticleDataService } from '../../shared/article-data.service';
import { ArticleComponent } from "../article/article-component.component";


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [HomePageComponent, RouterLink, ArticleComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  selectedArticle!: Article | undefined;
  articleData: ArticleDataService = new ArticleDataService();

  ngOnInit(){
    this.route.paramMap.subscribe((params) => {
      this.articleId = Number(params.get('id'));
    })
    this.selectedArticle = this.getSelectedArticle();
  }

  getSelectedArticle(): Article | undefined {
    const selectedArticle: Article | undefined = this.articleData.articles.find(article => article.id === this.articleId);
    if(this.articleId && selectedArticle){
      return selectedArticle;
    } else {
      this.router.navigate(['**']);
      return undefined;
    }
  }
}
