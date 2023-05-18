import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  members: any[] = [];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    });
  }
}
