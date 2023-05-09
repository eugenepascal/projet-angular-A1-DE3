import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'members', component: MembersListComponent },
  { path: 'members/:id', component: MemberDetailsComponent },
  { path: 'loans', component: LoansListComponent },
  { path: 'loans/:id', component: LoanDetailsComponent },
  { path: 'contact', component: ContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
