import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = "/api/";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * saveSubmission
   */
  public saveSubmission() {
    // this.http.post(`${BASE_URL}pastes`)
  }
}
