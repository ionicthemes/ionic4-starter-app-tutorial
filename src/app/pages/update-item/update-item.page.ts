import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
  edit_item_form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(data.id)[0];
        //if item is undefined, go back to home
        if(!this.item){
          this.goBack();
        } else{
          this.edit_item_form = this.formBuilder.group({
            title: new FormControl(this.item.title, Validators.required),
            description: new FormControl(this.item.description, Validators.required)
          });
        }
      }
    )
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  updateItem(value){
    let newValues = {
      id: this.item.id,
      title: value.title,
      description: value.description
    }
    this.itemService.updateItem(newValues);
    this.goBack();
  }

}
