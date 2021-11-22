import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rezervacija',
  templateUrl: './rezervacija.component.html',
  styleUrls: ['./rezervacija.component.css']
})
export class RezervacijaComponent implements OnInit {

  rezForm: FormGroup;

  types = ['admin', 'reader', 'writer']; 
  status="";

  constructor() { }

  ngOnInit(): void {
    this.rezForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // 'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(60)]),
      'age': new FormControl(null, [Validators.required], this.ageValidatorAsync),
      'type': new FormControl("admin", [this.userTypeValidation.bind(this)]),
      'education': new FormArray([])

    });
    this.rezForm.statusChanges.subscribe((status)=>{
      this.status = status;
    });
  }

  onSubmit() {
    console.log(this.rezForm.value);
  }

  userTypeValidation(control:FormControl){
    if(this.types.indexOf(control.value) == -1){
      return {
        'typeNotExist': true
      }
    }
    return null;
  }
  
  ageValidatorAsync(control:FormControl){
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(+control.value > 18 && +control.value < 30){
          resolve(null);
        } else {
          resolve({'ageInvalid': true});
        }
      }, 2000);
    })
    return promise;
  }

  onAddEducation(){
    const eduControl = new FormControl(null, Validators.required);
    (<FormArray>this.rezForm.get("education")).push(eduControl);
  }

  get educations(){
    return (<FormArray>this.rezForm.get("education")).controls;

  }
}
