import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, public app: AppComponent) {
    this.app.showSpinner = true;
  }

  ngOnInit() {
    if (this.app.all_data == null) {
      this.http
        .get('https://corona.lmao.ninja/v2/all')
        .subscribe((data: any[]) => {
          // this.app.all_data = data;
          this.app.totalRecovered = data['recovered'];
          this.app.totalDeaths = data['deaths'];
          this.app.totalCases = data['cases'];
          this.app.date = data['updated'];
          this.app.showSpinner = false;
        });
    }
  }
}
