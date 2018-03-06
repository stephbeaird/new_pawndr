import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  	userData: BehaviorSubject<object> = new BehaviorSubject({});
	petsData: BehaviorSubject<object> =  new BehaviorSubject([]);
	singlePetData: BehaviorSubject<object> =  new BehaviorSubject([]);
	randomPetData: BehaviorSubject<object> =  new BehaviorSubject([]);
	allUsersData: BehaviorSubject<object> =  new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
    this.getAllPets();
   }

   getCurrentUser(){
	console.log('getCurrentUser');
		this._http.get('/data/current_user')
	  	.subscribe((responseData:any)=>{
	console.log('responseData', responseData);
		console.log(responseData);
	  	this.userData.next(responseData);
	  })
   	}

	loginUser(userObj){
	console.log('loginUser');
	this._http.post('/data/login', userObj)
	.subscribe((responseData:any)=>{
		console.log('responseData', responseData);
		this.userData.next(responseData);
	})
	}

	getAllPets(){
		console.log('getAllPets')
		this._http.get('/data/pets')
		.subscribe((responseData:any)=>{
			console.log("responseData", responseData);
			this.petsData.next(responseData)
		})
	}
	  
  	postPet(userId, newPet, callback){
		var myPet = {
			_user: userId, 
			name: newPet.name,
			description: newPet.description,
			image: newPet.image,
			location: newPet.location,
			}
			console.log(myPet);
			this._http.post('/data/pet', myPet)
			.subscribe((responseData:any)=>{
				console.log('responseData', responseData);
				this.petsData.next(responseData);
				callback();
		})
	}

  	showPet(petId){
		console.log('showPet');
		this._http.get('/data/pet/'+ petId)
		.subscribe((responseData: any)=>{
			this.singlePetData.next(responseData);
			console.log(responseData);
		})
  	}
  	getRandomPet(){
		console.log('randomPet');
		this._http.get('/petOfTheDay')
		.subscribe((responseData: any)=>{
			this.singlePetData.next(responseData);
			console.log(responseData);
		})
  	}

  	deletePet(pet){
		this._http.post('/pet/delete', {_id:pet})
		.subscribe((data:any)=>{
		this.getAllPets();
		})
	}	 

  	update(pet){
		console.log('service.update', pet);
		this._http.post('/pet/edit', pet)
		.subscribe((data:any)=>{
		})
	}
	  
  	getAllUsersPets(){
    console.log('getAllPets')
		this._http.get('/data/mypets')
		.subscribe((responseData:any)=>{
			console.log("responseData", responseData);
			this.petsData.next(responseData)
    	})
  	}

  	logout(){
		this._http.get('/data/logout')
		.subscribe((responseData:any)=>
		console.log(responseData))
	}
}
