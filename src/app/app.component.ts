import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article';

let $ = require('../../node_modules/jquery/dist/jquery.min.js');


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Sam\'s special title',
        'what an interesting description',10
      ),
      new Article('wicked new ideas',
        'description of wicked ideas')
    ]
  }
  addArticle(): void {
    this.articles.push(new Article('newly added article', 'hey look at this new article'));
  }
  addArticle2(title: string, description: string): void {
    this.articles.push(new Article(title, description));
  }
  removeLastArticle(): void {
    this.articles.pop();
  }
  removeArticle(): void {
    console.log("item:");
    //this.articles.splice(item);
  }
  toggleSidebar(): void {
    $('.ui.sidebar').sidebar('toggle');
  }
  /**
   * name
   */
  removeSelected(article) {
    console.log("remove:" + article);
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
  }
}
