import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  RegisterStudent(studentForm:NgForm):void{
    console.log(studentForm.value);
  }
}

