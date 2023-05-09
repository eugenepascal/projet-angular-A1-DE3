import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksListComponent,
    MembersListComponent,
    LoansListComponent,
    ContactFormComponent,
    BookDetailsComponent,
    MemberDetailsComponent,
    LoanDetailsComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
