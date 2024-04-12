import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      description: "Home Work",
      status: "Done",
      isEdit: false
    }
  ];
  filter: "All" | "Done" | "Pending" = "All";
  item = "";

  getAllItems() {
    if (this.filter === "All") {
      return this.items;
    }
  
    return this.items.filter(item => item.status === this.filter);
  }
  

  addItem() {
    const newItem : Item = {
      description: this.item,
      status: "Pending",
      isEdit: false
    }
    this.items.unshift(newItem);
    console.log(this.items);
    this.item = "";
  }

  onEditClick (index : number) {
    this.items[index].isEdit = true;
  }

  deleteItem(index : number) {
    this.items.splice(index, 1);
  }

  updateItem(index : number) {
    this.items[index].isEdit = false;
  }

  cancel(index : number) {
    this.items[index].isEdit = false;
  }
}
