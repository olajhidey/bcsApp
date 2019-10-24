import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = "bar";

  banks: any;
  bank: any[] = [];
  barChartLabels2: string[];
  colors: string[];
  barChartData2: { data: number[]; label: string }[];
  pieChartLabels: string[];
  pieChartData: number[];
  pieChartType: string;
  barChartLegend: boolean;
  barChartData: { data: number[]; label: string }[];
  barChartLabels: string[];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadBanks();
    this.loadChart1();
    this.loadChart2();
    this.loadChart3();
    console.log(this.bank);
  }

  loadChart1() {
    this.barChartLegend = true;
    this.barChartData = [
      { data: [65, 59, 80, 81, 56, 55, 40, 30], label: "Withholding Tax" }
      // { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
    ];

    this.barChartLabels = [
      "Zenith",
      "GTB",
      "First Bank",
      "Wema",
      "Keystone",
      "Access",
      "FCMB"
    ];
  }

  loadChart2() {
    this.barChartLabels2 = [
      "Osun",
      "Lagos",
      "Oyo",
      "Kwara",
      "Kano",
      "Kaduna",
      "Abuja"
    ];

    this.colors = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)"
    ];

    this.barChartData2 = [
      { data: [65, 59, 80, 81, 56, 55, 40, 30], label: "Withholding Tax" }
    ];
  }

  loadChart3() {
    this.pieChartLabels = ["Sales Q1", "Sales Q2", "Sales Q3", "Sales Q4"];
    this.pieChartData = [120, 150, 180, 90];
    this.pieChartType = "pie";
  }

  loadBanks() {
    this.data.getData().subscribe(res => {
      this.banks = res;

      this.bank = this.loadData(res);
    });
  }
  loadData(res: any[]): any {
    var banks = {};

    var result = res.reduce(function(r, o) {
      var key = o.bank;

      console.log("=======key===== " + key);

      if (!banks[key]) {
        banks[key] = { Bank: key, wht: 0 };

        r.push(banks[key]);
      } else {
        banks[key].wht += parseFloat(o.wht);
      }

      return r;
    }, []);
  }
}
