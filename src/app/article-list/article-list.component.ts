import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[];
  constructor() { }

  ngOnInit() {
  }
  
  removeSelected(article) {
    console.log("remove:" + article);
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
  }
}
