import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent{

  @Input() article: Article;
  @Output() removeArticle = new EventEmitter();

  removeSelectedArticle(): void {
    console.log("inside ArticleComponent class");
    this.removeArticle.next(this.article);
  }
  upvote() {
    console.log("upvote");
    this.article.voteUp();
  }
  downvote(){
    console.log("downvote");
    this.article.voteDown();
  }

}
