import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: String = "";
  password: String = "";

  constructor(private _toast: ToastrService, private _router: Router) {}

  ngOnInit() {}

  loginIntoAccount() {
    // console.log("Logged!!");
    if (
      this.username == null ||
      (this.username == "" && this.password == null) ||
      this.password == ""
    ) {
      console.log("Cant loog");

      this._toast.warning(
        "Please provide neccessary credentials and try again"
      );
    } else {
      console.log(this.username);
      this._router.navigate(["/dashboard"]);
    }
  }
}
