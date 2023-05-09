import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private readonly membersUrl = 'assets/members.json';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.membersUrl);
  }

  getMember(id: number): Observable<any> {
    return this.http.get<any>(${this.membersUrl}/${id});
  }
}