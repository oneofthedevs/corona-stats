import { Component, OnInit, OnChanges } from "@angular/core";
import { AppComponent } from "../app.component";
import { ActivatedRoute } from "@angular/router";
import { CoronaDataService } from "../corona-data.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit, OnChanges {
  name;
  data;
  notFound = false;
  chartData: any[];
  constructor(
    private app: AppComponent,
    private r: ActivatedRoute,
    private dataService: CoronaDataService,
    private router: Router
  ) {
    this.app.showSpinner = true;
    this.name = this.r.snapshot.paramMap.get("name");
  }
  ngOnInit() {
    this.getDetails();
  }
  ngOnChanges() {}
  getDetails() {
    this.dataService.getCountryDetail(this.name).subscribe(
      (data: any[]) => {
        if (data["message"]) {
          this.notFound = true;
        } else {
          this.data = data;
          this.chartData = [
            this.data["active"],
            this.data["recovered"],
            this.data["deaths"],
          ];
        }
        this.app.showSpinner = false;
      },
      (error) => {
        this.router.navigate(['/']);
      }
    );
  }
}
