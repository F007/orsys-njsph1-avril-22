import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedItems = new Set<Article>();

  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.retrieveAll(); //raffraichissement
  }

  toggle(a: Article) {
    if (this.selectedItems.has(a)) {
      //je regarde si c'est dedans
      this.selectedItems.delete(a);
      return;
    }
    this.selectedItems.add(a);
  }

  remove() {
    (async () => {
      try {
        console.log('remove');

        await this.articleService.remove(this.selectedItems);
        this.selectedItems.clear();
        this.articleService.retrieveAll();
      } catch (err) {
        console.log('err: ', err);
      }
    })();
  }
}
