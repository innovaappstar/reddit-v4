import { Article } from './article/article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listArticles: Article[]; // <-- component property

  constructor() {
    this.listArticles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
  sortedArticles(): Article[] {
    return this.listArticles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  /**
   * Nota : Uso de 'template variable' en el html..
   *
   * método para agregar interacción entre vista y controlador..
   * @param title input text
   * @param link input text
   */
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.listArticles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    this.listArticles.sort((a : Article, b : Article)=>a.votes - b.votes)
    return false;
  }

}
