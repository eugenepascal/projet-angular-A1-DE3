import { Component, OnInit } from '@angular/core';
import { LoansService, Loan } from '../loans.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {
  loans: Loan[] = []; // Use the Loan type here

  constructor(private loanService: LoansService) { }

  ngOnInit(): void {
    this.loanService.getLoans().subscribe(loans => {
      this.loans = loans;
    });
  }
}
