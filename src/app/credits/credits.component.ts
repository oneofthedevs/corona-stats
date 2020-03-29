import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-credits",
  templateUrl: "./credits.component.html",
  styleUrls: ["./credits.component.scss"]
})
export class CreditsComponent implements OnInit {
  constructor(private app: AppComponent) {
    this.app.showSpinner = false;
  }

  ngOnInit() {}
}
