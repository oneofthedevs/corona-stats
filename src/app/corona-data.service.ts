import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CoronaDataService {
  constructor(private http: HttpClient) {}

  private BASE_URL: string = "https://corona.lmao.ninja/v2";

  getCountryDetail(country: string = "") {
    return this.http.get(`${this.BASE_URL}/countries/${country}`);
  }

  getAll() {
    return this.http.get(`${this.BASE_URL}/all`);
  }
}
