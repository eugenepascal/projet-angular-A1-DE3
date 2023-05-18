import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService, Member } from '../members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member!: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MembersService
  ) { }

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr !== null) {
      const id = +idStr;
      this.memberService.getMember(id).subscribe(member => {
        this.member = member;
      });
    }
  }
}
