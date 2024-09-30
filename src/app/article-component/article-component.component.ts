import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


type Article = {
  title: string,
  author: string,
  content: string,
  image: string,
  isPublished: boolean,
  comment: string
}

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.scss'
})
export class ArticleComponentComponent {

    article : Article = {
      title: 'Yoga, IdeaPad : Lenovo fait le plein de nouveaux PC',
      author: 'Thomas Estimbre',
      content: 'L’un des grands artisans de cette édition 2024 de l’IFA s’appelle Lenovo. Le géant chinois étoffe grandement sa gamme de PC portables, à commencer par ses machines grand public. L’intelligence artificielle est évidemment l’un des arguments des nouveaux ordinateurs portables, plusieurs étant d’ailleurs des PC Copilot+. ',
      image: 'https://www.journaldugeek.com/app/uploads/2024/09/lenovo-pc-ifa-2024-6.jpg',
      isPublished: true,
      comment: ''
    };
}
