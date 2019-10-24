import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-banks",
  templateUrl: "./banks.component.html",
  styleUrls: ["./banks.component.css"]
})
export class BanksComponent implements OnInit {
  selected: any[] = [];
  banks: any = [
    { id: 1, name: "UBA", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    { id: 1, name: "FCMB", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    { id: 1, name: "FIRST", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    { id: 1, name: "Zenith", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    {
      id: 1,
      name: "Keystone",
      actual_wth: 1000,
      exp_wth: 2000,
      customer: 10000
    },
    { id: 1, name: "Access", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    { id: 1, name: "Union", actual_wth: 1000, exp_wth: 2000, customer: 10000 },

    {
      id: 1,
      name: "Fidelity",
      actual_wth: 1000,
      exp_wth: 2000,
      customer: 10000
    },
    { id: 1, name: "Wema", actual_wth: 1000, exp_wth: 2000, customer: 10000 },
    {
      id: 1,
      name: "Ecobank",
      actual_wth: 1000,
      exp_wth: 2000,
      customer: 10000
    },

    {
      id: 1,
      name: "Stanbic",
      actual_wth: 1000,
      exp_wth: 2000,
      customer: 10000
    },
    { id: 1, name: "Diamond", actual_wth: 1000, exp_wth: 2000, customer: 10000 }
  ];
  constructor(private _data: DataService) {}

  ngOnInit() {
    // this.loadData();
  }

  loadData() {
    this._data.getData().subscribe(res => {
      this.banks = res;
      console.log(res);
    });
  }
}
