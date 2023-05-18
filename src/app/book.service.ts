import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly booksUrl = 'assets/books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.booksUrl);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<any[]>(this.booksUrl).pipe(
        map((books: any[]) => books.find(book => book.id === id))
    );
  }
}
