import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  back(){
    this.router.navigate(['/home'])
  }

}
