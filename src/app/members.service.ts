import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private readonly membersUrl = 'assets/members.json';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.membersUrl);
  }

  getMember(id: number): Observable<any> {
    return this.http.get<any[]>(this.membersUrl).pipe(
        map((members: any[]) => members.find(member => member.id === id))
    );
  }
}
