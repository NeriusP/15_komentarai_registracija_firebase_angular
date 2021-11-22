import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
@ViewChild('form') regForm: NgForm;
email: string = "Petras@gmail.com"

user:{
  email: string;
  age: string;
  password: string;
  gender: string;
}


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submitinam");
    console.log(this.regForm);
    this.user = {
      email : this.regForm.value.email,
      age : this.regForm.value.age,
      password : this.regForm.value.password,
      gender : this.regForm.value.gender

    }
    console.log(this.user);
    this.regForm.reset();
    
  }

  randomPassword(){
    this.regForm.form.patchValue({   //arba setValue()
      password:(Math.random()*1000),
      name: "Jonas"
    })  
  }

}

// visa forma išvaloma :
// this.regForm.reset();

//vienas inputas išvalomas:
// this.ngForm.controls.email.reset();