import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { User } from '../users';
import { Pet } from '../pets';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  loginError: String;
  regError: String;
  sample: Pet = new Pet();

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  	this._dataService.userData.subscribe((dataFromService)=>{
  		console.log(dataFromService);
  		if(dataFromService != null){
  			this._router.navigate(['/dashboard']);
  		}else{
  			console.log('idk what went wrong');
  			console.log(dataFromService);
  		}
  	})
  }
  login(){
  	this._dataService.loginUser(this.user);
  }
}
