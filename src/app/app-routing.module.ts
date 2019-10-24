import { NgModule } from "@angular/core";
import { RouterModule, Routes, ExtraOptions } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { StatesComponent } from "./states/states.component";
import { BanksComponent } from "./banks/banks.component";
import { CustomersComponent } from "./customers/customers.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { InteractionsComponent } from "./interactions/interactions.component";
import { MessagesComponent } from "./messages/messages.component";

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "states",
        component: StatesComponent,
        pathMatch: "full"
      },
      {
        path: "banks",
        component: BanksComponent
      },
      {
        path: "customers",
        component: CustomersComponent
      },
      {
        path: "transactions",
        component: TransactionsComponent
      },
      {
        path: "interactions",
        component: InteractionsComponent
      },
      {
        path: "messages",
        component: MessagesComponent
      }
    ]
  }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
