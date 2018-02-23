import { Component, OnInit } from '@angular/core';
import { User } from '../../users';
import { Pet } from '../../pets';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-pets',
  templateUrl: './user-pets.component.html',
  styleUrls: ['./user-pets.component.css']
})
export class UserPetsComponent implements OnInit {
  newPet: Pet = new Pet();
  hasImage: boolean = false;
  myPet: Array<Pet>;
  user: any= {id:'req.params._id'};

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this._dataService.getAllUsersPets()
  }

  linkPhoto() {
    this.newPet.image = prompt("Please enter the url for your photo:");
    if (this.newPet.image != "") {
      this.hasImage = true;
    }
  }

  addPet() {
    this._dataService.postPet(this.user._id, this.newPet, ()=>{
      console.log(this);
      this._router.navigate(['/']);
    })
    this.newPet = new Pet();
    console.log('pet added')
  }

  updatePet(pet) {
    this._dataService.update(pet)
  }

  deletePet(pet){
    this._dataService.deletePet(pet)
    this._dataService.getAllPets();
	}
}