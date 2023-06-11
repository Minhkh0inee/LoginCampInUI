import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
