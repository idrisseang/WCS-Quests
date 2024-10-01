import { Injectable } from '@angular/core';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
    articles: Article[] = [
        new Article(
            1,
            "Introduction to TypeScript",
            "John Doe",
            `TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. 
            It was developed by Microsoft and aims to make large-scale JavaScript development easier. 
            By introducing types, developers can catch potential errors during development, rather than runtime. 
            TypeScript's popularity is growing rapidly due to its powerful tooling and integration with modern frameworks like Angular.`,
            "https://download.logo.wine/logo/TypeScript/TypeScript-Logo.wine.png"
        ),
        new Article(
            2,
            "Mastering Angular",
            "Jane Smith",
            `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. 
            It implements core and optional functionality as a set of TypeScript libraries that you import into your applications. 
            It was originally developed by Google to simplify web development and has become one of the leading frameworks for building modern web apps.`,
            "https://angular.io/assets/images/logos/angular/angular.svg"
        ),
        new Article(
            3,
            "Understanding React Hooks",
            "Emily Johnson",
            `React Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
            They allow you to use state and other React features without writing a class. 
            With hooks like useState, useEffect, and useContext, developers can write cleaner and more maintainable React code while avoiding issues related to classes and complex component lifecycles.`,
            "https://reactjs.org/logo-og.png"
        )
    ];
}
