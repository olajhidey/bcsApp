import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
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
