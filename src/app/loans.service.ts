import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private readonly loansUrl = 'assets/loans.json';

  constructor(private http: HttpClient) {}

  getLoans(): Observable<any[]> {
    return this.http.get<any[]>(this.loansUrl);
  }

  getLoan(id: number): Observable<any> {
    return this.http.get<any>(${this.loansUrl}/${id});
  }
}