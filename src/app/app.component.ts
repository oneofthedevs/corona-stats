import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  country_codes: any = null;
  coronaData: any = null;
  public showSpinner: boolean = true;

  public date: number = 0;
  public all_data: any = null;
  public totalRecovered: number = 0;
  public totalDeaths: number = 0;
  public totalCases: number = 0;
  public chartData: any = null;
}
