import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('default', [Validators.required]),
    price: new FormControl('default', [Validators.required]),
    qty: new FormControl('default', [Validators.required]),
  });

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articleService.retrieveAll(); //raffraichissement
  }

  async submit() {
    try {
      console.log('submit');
      await this.articleService.add(this.f.value as Article);
      await this.router.navigate(['..'], { relativeTo: this.route });
    } catch (err) {
      console.log();
    }
  }
}
