import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../article';
import { lastValueFrom } from 'rxjs';

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
    //this.retrieveAll();
  }

  async add(a: Article) {
    await lastValueFrom(
      this.http.post<void>('http://localhost:3000/api/articles', a)
    );
  }

  async remove(selectedItems: Set<Article>) {
    const ids = [...selectedItems].map((a) => a.id);
    await lastValueFrom(
      this.http.delete<void>('http://localhost:3000/api/articles', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: ids,
      })
    );
  }

  retrieveAll() {
    const articles = this.http
      .get<Article[]>('http://localhost:3000/api/articles')
      .subscribe({
        next: (articles) => {
          this.articles = articles;
        },
        error: (err) => {
          console.log('err:', err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }
}
