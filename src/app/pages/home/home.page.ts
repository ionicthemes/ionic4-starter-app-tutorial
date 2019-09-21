import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;
  rooms: any = [];
  isBooked: boolean;

  constructor(
    private router: Router,
    public itemService: ItemService
  ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.itemService.getRooms().subscribe(
      (data) => {
        this.rooms = data.map(room => {
          room.booking !== null ? room.booking.is_reservation == 1 ?
            room.booking.is_reservation = true : room.booking.is_reservation = false : null;
          return room;
        });
      },
      (error) => {
        console.log('error fetching data' + error);
      },
      () => {
        this.isBooked = this.rooms.some(function (room) {
          return room.booking.is_reservation;
        });
      });
  }

}
