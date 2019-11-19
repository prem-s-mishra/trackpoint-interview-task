import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  protected getApiUrl() {
    return 'https://reqres.in/api/';
  }

  private extractJsonData(response: Response) {
    return response;
  }
  
  private handleJsonError(error: any) {
    console.log(error);
    if(error){
      const errMsg = (error.error) ? error.error :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      try {
        JSON.parse(errMsg);
      } catch (e) {
        return throwError(errMsg);
      }
      return throwError(JSON.parse(errMsg));
    }
  }

  public getOperation(API_URL: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });

    return this.http.get(this.getApiUrl() + API_URL, { headers: headers })
    .pipe(
      map(this.extractJsonData)
    )
    .pipe(
      catchError(this.handleJsonError)
    );
  }
  
}
