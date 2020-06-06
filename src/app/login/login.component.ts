import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { email: 'sss', password: '' };

  constructor(public dataService: DataService, public httpService: HttpService) { }

  ngOnInit() {
    // const a = await this.httpService.getHero();
    // console.log(a);
  }

  async login() {
    console.log(this.credentials);

    const a = await this.httpService.getHero(this.credentials);
    console.log(a);
    // this.dataService.createContact(this.credentials);
    // this.credentials = {id: null, name: '', description: '', email: ''};

  }

}
