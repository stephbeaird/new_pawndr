import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.getCurrentUser() 
  }
	logout(){
		this._dataService.logout();
		this._router.navigate(['/login']);
	}
}
