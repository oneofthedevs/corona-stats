import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  constructor(public http: HttpClient, public app: AppComponent) {
    this.app.showSpinner = true;
  }

  Alldata;
  chnage;
  ngOnInit() {
    this.http
      .get("https://corona.lmao.ninja/countries")
      .subscribe((data: any[]) => {
        this.Alldata = data;
        // this.chnage =
        //   (data["todayCases"] / (data["cases"] - data["todayCases"])) * 100;
        this.app.showSpinner = false;
      });
  }
}
