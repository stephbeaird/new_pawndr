import { Component, OnInit } from '@angular/core';
import { Pet } from '../../pets';
import { User } from '../../users';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  allPets: Array<Pet>;
  currentUser:any = {firstName:'req.params.firstName', lastName:'req.params.lastName',}
  searchStr: string = '';

  constructor(private _dataService: DataService) { 
  }

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

  deletePet(pet){
    this._dataService.deletePet(pet)
    this._dataService.getAllPets();
  }
}