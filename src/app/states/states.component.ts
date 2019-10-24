import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-states",
  templateUrl: "./states.component.html",
  styleUrls: ["./states.component.css"]
})
export class StatesComponent implements OnInit {
  banks: any[];
  constructor(private _data: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._data.getData().subscribe(res => {
      this.banks = res;
      console.log(res);
    });
  }
}
