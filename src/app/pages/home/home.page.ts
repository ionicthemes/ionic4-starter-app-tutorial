import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService
  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

  openNewItemPage(){
    this.router.navigate(["/new-item"]);
  }

  goToItem(item){
    this.router.navigate(["/update-item", item]);
  }

}
