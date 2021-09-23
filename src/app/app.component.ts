import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputVal = '';
  selectedUser?:User;

  constructor(){
    console.log('within constructor');
  }

  ngOnInit(){
    console.log('within ngOnInit');
  }

  users: User[] = [
    { name: 'Arjun', age: 10},
    { name: 'Jeffrey', age: 20},
    { name: 'Lakshmi', age: 30}
  ]

  dummyUsers: User[] = [
    { name: 'Dummy1', age: 10},
    { name: 'Dummy2', age: 20},
    { name: 'Dummy3', age: 30}
  ]

  onUserSelect(user:User){
    this.selectedUser = user;
  }

  onDummySelect(evntValue:User){
    console.warn('dummy select called', evntValue);
  }

  filteredUsers = [...this.users]

  searchTxt = '';

  search(){
    this.filteredUsers = this.users.filter(u => {
      return u.name.includes(this.inputVal);
    });
  }

  
}
