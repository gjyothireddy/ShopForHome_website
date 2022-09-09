import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Array<Admin> = [];
  storeMsg: string = ""
  loginMsg: string = ""
  logoutMsg: string = ""
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();

  constructor(public pser: AdminService) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time

  ngOnInit(): void {
    this.loadAdmin();
  }

  loadAdmin(): void {
    this.pser.loadAdminDetails().subscribe(res => this.admins = res);
  }

  // Storing Admin Details
  storeAdmin(adminRef: NgForm) {
    this.pser.storeAdminDetails(adminRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadAdmin());
  }


}

