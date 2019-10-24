import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  links: any[] = [
    { id: 1, name: "States", path: "/dashboard/states" },
    { id: 2, name: "Banks", path: "/dashboard/banks" },
    { id: 3, name: "Customers", path: "/dashboard/customers" },
    { id: 4, name: "Transactions", path: "/dashboard/transactions" },
    { id: 5, name: "Interactions", path: "/dashboard/interactions" },
    { id: 6, name: "Messages", path: "/dashboard/messages" }
  ];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getData().subscribe(res => {
      console.log(res);
    });
  }
}
