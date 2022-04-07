import { Injectable } from '@angular/core';
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

  constructor() {
    this.retrieveAll();
  }
  retrieveAll() {
    throw new Error('Method not implemented.');
  }
}
