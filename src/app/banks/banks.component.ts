import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-banks",
  templateUrl: "./banks.component.html",
  styleUrls: ["./banks.component.css"]
})
export class BanksComponent implements OnInit {
  selected: any[] = [];
  banks: any[] = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._data.getData().subscribe(res => {
      // this.banks = this.loadDat(res);

      this.loadDat(res);
      console.log(this.banks);
    });
  }

  loadDat(res: any[]): any {
    var banks = {};

    var result = res.reduce(function(r, o) {
      var key = o.bank;
      var i = 0;

      console.log("=======key===== " + key);

      if (!banks[key]) {
        banks[key] = {
          Bank: key,
          code: 112,
          wht: 0,
          num: i + 1,
          interestAmount: 0,
          balance: 0
        };

        r.push(banks[key]);
      } else {
        banks[key].num += i;
        banks[key].wht += parseFloat(o.wht);
        banks[key].interestAmount += parseFloat(o.interestAmount);
        banks[key].balance += parseFloat(o.balance);
      }

      return r;
    }, []);

    this.banks = result;
  }
}
