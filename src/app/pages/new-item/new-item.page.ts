import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  back(){
    this.router.navigate(['/home'])
  }

}
