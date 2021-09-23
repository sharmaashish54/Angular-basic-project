import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users:User[] = [];

  @Input()
  title = '';

  @Output()
  onSelect: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  onBtnClick(user:User){
    this.onSelect.emit(user);
  }

  ngOnInit(): void {
    
  }

}
