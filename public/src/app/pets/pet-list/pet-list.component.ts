import { Component, OnInit } from '@angular/core';
import { Pet } from '../../pets';
import { User } from '../../users';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})

export class PetListComponent implements OnInit {
  newPet: Pet = new Pet();
  allPets: Array<Pet>;
  currentUser:any = {firstName:'req.params.firstName', lastName:'req.params.lastName', id:'req.params._id'}
  myPet: Array<Pet>;  
  searchStr: string = '';

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.getAllPets();
    this._dataService.getCurrentUser()
  }

  getAllPets() {
    this._dataService.petsData.subscribe((dataFromService: any)=>{
      this.allPets= dataFromService;
      console.log(this.allPets);
		})
  }
  
  getPets() {
  this._dataService.getAllUsersPets()
  }
  
  addPet() {
    this._dataService.postPet(this.currentUser._id, this.newPet, ()=>{
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