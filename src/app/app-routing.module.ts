import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { SwitchComponent } from './switch/switch.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"registration",component:RegistrationComponent},
  {path:"switch",component:SwitchComponent },
  {path:"templatedriven",component:TemplatedrivenComponent },
  {path:"reactive",component:ReactiveComponent },


  {path:"**",component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
