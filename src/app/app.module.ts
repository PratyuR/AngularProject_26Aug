import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomPipe } from './custom.pipe';
import { SwitchComponent } from './switch/switch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';


import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { TestloclComponent } from './testlocl/testlocl.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    RegistrationComponent,
    DirectiveComponent,
    CustomPipe,
    SwitchComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    ListComponent,
    TestloclComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
