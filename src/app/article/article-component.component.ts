import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/Article';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.html',
  styleUrl: './article-component.scss'
})
export class ArticleComponent {
  @Input() article: Article | null = null;
}
