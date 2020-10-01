import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Example 1",
      'description': 'description 1'
    },
    {
      'id': "2",
      'title': "Example 2",
      'description': 'description 2'
    },
    {
      'id': "3",
      'title': "Example 3",
      'description': 'description 3'
    },
    {
      'id': "4",
      'title': "Example 4",
      'description': 'description 4'
    },
    {
      'id': "6",
      'title': "Example 5",
      'description': 'This is example 5'
    },
    {
      'id': "5",
      'title': "Need a more complex app?",
      'description': 'Check the Ionic 4 Full Starter App.'
    }
  ]

  constructor() { }

  createItem(title, description){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }

  deleteItem(value){
    this.removeItemFromArr(this.items,value)
  }

  removeItemFromArr(arr,item){
    var i = arr.indexOf(item);
    arr.splice(i,1);
}
}
