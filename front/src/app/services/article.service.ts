import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'pince', price: 3.44, qty: 234 },
    { name: 'pince', price: 3.44, qty: 234 },
    { name: 'pince', price: 3.44, qty: 234 },
  ];

  constructor(private http: HttpClient) {
    this.retrieveAll();
  }
  retrieveAll() {
    const articles = this.http.get(
      'http://localhost:3000/api/articles'
    ).subscribe;
  }
}
