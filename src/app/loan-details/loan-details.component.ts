import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoansService, Loan } from '../loans.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  loan!: Loan;

  constructor(
    private route: ActivatedRoute,
    private loansService: LoansService
  ) { }

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr !== null) {
      const id = +idStr;
      this.loansService.getLoan(id).subscribe(loan => {
        this.loan = loan;
      });
    }
  }
}
