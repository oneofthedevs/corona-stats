import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  constructor(public http: HttpClient, public app: AppComponent) {
    this.app.showSpinner = true;
  }

  Alldata;
  chnage;
  countryName = '';
  ngOnInit() {
    this.getCountries();
  }

  ngOnDestroy() {
    this.Alldata = '';
  }

  private getCountries() {
    this.http
      .get('https://corona.lmao.ninja/v2/countries/' + this.countryName)
      .subscribe((data: any[]) => {
        this.Alldata = data;
        // this.chnage =
        //   (data["todayCases"] / (data["cases"] - data["todayCases"])) * 100;
        this.app.showSpinner = false;
      });
  }
}
