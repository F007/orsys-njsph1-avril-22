import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  submit() {
    console.log('submit');
  }

  constructor() {}

  ngOnInit(): void {}
}
