import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { LoansListComponent } from './loans-list/loans-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

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
    ContactFormComponent,
    LoanDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
