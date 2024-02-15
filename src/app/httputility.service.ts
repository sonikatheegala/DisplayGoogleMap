import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class HttputilityService {
  Path:string = "https://mobile.homeguard.com/scheduledev/api/HGOrder/"; // Suresh added dev api basic url

  constructor(private http: HttpClient) {}
  public httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  Get(routeUrl:string): Observable<any> {
    return this.http
      .get<any>(this.Path + routeUrl)
      .pipe(catchError(this.handleError));
  }
  Add(routeUrl:string, data:any) {
    return this.http.post<any>(this.Path + routeUrl,
      data,
      this.httpOptions
    );
  }
  handleError(error:any) {
    return throwError(error.message);
  }
}
