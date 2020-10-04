import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { AppComponent } from "../app.component";
import { CoronaDataService } from "../corona-data.service";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: CoronaDataService,
    public app: AppComponent,
    private router: Router
  ) {
    this.app.showSpinner = true;
  }

  Alldata;
  chnage;
  countryName = "";
  ngOnInit() {
    this.dataService
      .getCountryDetail(this.countryName)
      .subscribe((data: any[]) => {
        this.Alldata = data;
        // this.chnage =
        //   (data["todayCases"] / (data["cases"] - data["todayCases"])) * 100;
        this.app.showSpinner = false;
      },
      (error) => {
        this.router.navigate(['/']);
      }
      );
  }

  ngOnDestroy() {
    this.Alldata = "";
  }
}
