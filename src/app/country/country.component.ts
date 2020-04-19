import { Component, OnInit, OnChanges } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnChanges {
  name;
  data;
  notFound = false;
  chartData: any[];
  constructor(private app: AppComponent, private r: ActivatedRoute, private http: HttpClient) {
    this.app.showSpinner = true;
    this.name = this.r.snapshot.paramMap.get('name');
  }
  ngOnInit() {
    this.getDetails();
  }
  ngOnChanges() {

  }
  getDetails() {
    this.http
      .get('https://corona.lmao.ninja/v2/countries/' + this.name)
      // tslint:disable-next-line: deprecation
      .subscribe((data: any[]) => {
        if (data['message']) {
          this.notFound = true;
        } else {
          this.data = data;
          this.chartData = [this.data['active'], this.data['recovered'], this.data['deaths']];
        }
        // this.chnage =
        //   (data["todayCases"] / (data["cases"] - data["todayCases"])) * 100;
        this.app.showSpinner = false;
      });
  }


}
