import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentu-registracija',
  templateUrl: './studentu-registracija.component.html',
  styleUrls: ['./studentu-registracija.component.css']
})
export class StudentuRegistracijaComponent implements OnInit {

  rezForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rezForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname': new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'code': new FormControl(null, [Validators.required, this.codeValidation]),
    });
  }

  onSubmit() {
    console.log(this.rezForm.value);
  }

  codeValidation(control: FormControl){
    if(control.value % 2 == 0) {
      return null;
    } else {
      return {
        'codeIsInvalid': true
      }

    }

  }

}
