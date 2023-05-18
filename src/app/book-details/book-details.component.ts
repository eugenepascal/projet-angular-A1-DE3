import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr !== null) {
      const id = +idStr;
      this.bookService.getBook(id).subscribe(book => {
        this.book = book;
      });
    }
  }
}

