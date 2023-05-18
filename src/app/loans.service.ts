import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Loan {
  id: number;
  bookId: number;
  memberId: number;
  startDate: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  private readonly loansUrl = 'assets/loans.json';

  constructor(private http: HttpClient) {}

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.loansUrl);
  }

  getLoan(id: number): Observable<Loan> {
    return this.http.get<Loan[]>(this.loansUrl).pipe(
      map(loans => {
        const loan = loans.find(loan => loan.id === id);
        if (!loan) {
          throw new Error(`Loan with ID ${id} not found`);
        }
        return loan;
      })
    );
  }
}
