import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from './../environments/environment';

const endpoint = environment.APIEndpoint + '/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  findAll(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  get(id): Observable<any> {
    return this.http.get(endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  add(customer): Observable<any> {    
    return this.http.post<any>(endpoint, JSON.stringify(customer), httpOptions).pipe(
      tap((product) => console.log(`added customer w/ id=${customer.id}`)),
      catchError(this.handleError<any>('addCustomer'))
    );
  }

  update(id, customer): Observable<any> {
    return this.http.put(endpoint + '/' + id, JSON.stringify(customer), httpOptions).pipe(
      tap(_ => console.log(`updated customer id=${id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  delete(id): Observable<any> {    
    return this.http.delete<any>(endpoint + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<any>('deleteCustomer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
