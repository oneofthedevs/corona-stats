import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AppComponent } from "../app.component";
import { CoronaDataService } from "../corona-data.service";
@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  constructor(
    private dataService: CoronaDataService,
    public app: AppComponent,
    private router: Router
  ) {
    this.app.showSpinner = true;
  }

  allCountries: any[];
  filteredCountries: any[];
  searchText: string = "";

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.dataService.getCountryDetail().subscribe(
      (data: any[]) => {
        this.allCountries = data;
        this.filteredCountries = this.allCountries;
        this.app.showSpinner = false;
      },
      (error) => {
        console.log(error);
        this.router.navigate(["/"]);
      }
    );
  }

  filterCountry() {
    console.log(this.searchText);
    this.filteredCountries = this.allCountries.filter((ele) =>
      ele.country.toLowerCase().includes(this.searchText)
    );
    console.log(this.filteredCountries);
  }
}
