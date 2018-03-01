import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { UserPetsComponent } from './pets/user-pets/user-pets.component';
import { LandingComponent } from './landing/landing.component';
import { StoriesComponent } from './stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PetsComponent,
    PetListComponent,
    UserPetsComponent,
    LandingComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
