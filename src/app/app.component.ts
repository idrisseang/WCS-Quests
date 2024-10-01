import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article-component.component";
import { Article } from '../models/Article';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Idrisse !';
  articles: Article[] = [
    new Article(
        "Introduction to TypeScript",
        "John Doe",
        `TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. 
        It was developed by Microsoft and aims to make large-scale JavaScript development easier. 
        By introducing types, developers can catch potential errors during development, rather than runtime. 
        TypeScript's popularity is growing rapidly due to its powerful tooling and integration with modern frameworks like Angular.`,
        "https://download.logo.wine/logo/TypeScript/TypeScript-Logo.wine.png"
    ),
    new Article(
        "Mastering Angular",
        "Jane Smith",
        `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
        It implements core and optional functionality as a set of TypeScript libraries that you import into your applications. 
        It was originally developed by Google to simplify web development and has become one of the leading frameworks for building modern web apps.`,
        "https://angular.io/assets/images/logos/angular/angular.svg"
    ),
    new Article(
        "Understanding React Hooks",
        "Emily Johnson",
        `React Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
        They allow you to use state and other React features without writing a class. 
        With hooks like useState, useEffect, and useContext, developers can write cleaner and more maintainable React code while avoiding issues related to classes and complex component lifecycles.`,
        "https://reactjs.org/logo-og.png"
    ),
    new Article(
        "Building REST APIs with Node.js",
        "Michael Brown",
        `Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. 
        It's often used to build scalable network applications, especially for creating RESTful APIs. 
        With a wide range of packages available through npm, and its asynchronous, event-driven architecture, Node.js is ideal for building fast and efficient web backends.`,
        "https://nodejs.org/static/images/logo.svg"
    )
];
}
