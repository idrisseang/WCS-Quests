import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/Article';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-component.html',
  styleUrl: './article-component.scss'
})
export class ArticleComponent {
  @Input() article: Article | null = null;
  @Output() onTouchLike: EventEmitter<string> = new EventEmitter();

  constructor(){}

  sendArticleTitle(title: string): void {
    this.onTouchLike.emit(title);
  }

}

