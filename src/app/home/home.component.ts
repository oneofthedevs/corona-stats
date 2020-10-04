import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CoronaDataService } from '../corona-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allGood = false;

  constructor(public app: AppComponent, private dataService: CoronaDataService) {
    this.app.showSpinner = true;
  }

  ngOnInit() {
    if (this.app.all_data == null) {
      this.dataService.getAll().subscribe(
        (data: any[]) => {
          // this.app.all_data = data;
          this.app.totalRecovered = data['recovered'];
          this.app.totalDeaths = data['deaths'];
          this.app.totalCases = data['cases'];
          this.app.date = data['updated'];
          this.allGood = true;
          this.app.showSpinner = false;
        },
        (error) => {
          this.allGood = false;
          this.app.showSpinner = false;
        }
      );
    }
  }
}
