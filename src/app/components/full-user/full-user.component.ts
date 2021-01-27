import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  fullUser: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
    this.activatedRoute.params.subscribe(value => {
      this.fullUser = this.router.getCurrentNavigation().extras.state as User;
    })

  }

  ngOnInit(): void {
  //    this.activatedRoute.params.subscribe(value => {
  //      this.userService.getUserById(value.id).subscribe(result => this.fullUser = result);
  //    }) ;
  }

}

