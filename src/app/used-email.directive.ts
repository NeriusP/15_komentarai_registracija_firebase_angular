import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[usedEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsedEmailDirective,
      multi: true
    }
  ]
})
export class UsedEmailDirective implements Validator{

  constructor() { }

  validate(input: FormControl){
    if(input.value == "test@test.lt") {
      return {
       UsedEmailklaida: true 
      }
    }
    return null;
  }
}
