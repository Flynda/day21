import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddRsvpComponent } from './components/add-rsvp.component';
import { RsvpComponent } from './components/rsvp.component';
import { RsvpService } from './services/rsvp.service';

const ROUTES: Routes = [
  { path: '', component: RsvpComponent },
  { path: 'addRsvp', component: AddRsvpComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    AddRsvpComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RsvpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
