import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'title': "Example 1",
      'description': 'description 1'
    },
    {
      'title': "Example 2",
      'description': 'description 2'
    },
    {
      'title': "Example 3",
      'description': 'description 3'
    },
    {
      'title': "Example 4",
      'description': 'description 4'
    }
  ]

  constructor() { }

  createItem(title, description){
    this.items.push({
      'title': title,
      'description': description
    })
  }

  getItems(){
    return this.items;
  }


}
