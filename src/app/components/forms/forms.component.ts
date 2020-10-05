import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('')]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });

    this.registerForm.valueChanges.subscribe(change => {
      console.log(change);
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submit() {
    debugger;
    this.submitted = true;

    if (this.registerForm.invalid) return;
    // this.registerForm.valid

    // this.registerForm.value

    alert('Form send');
    console.log(this.registerForm.value);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]; //password
      const matchingControl = formGroup.controls[matchingControlName];  // confirmPassword

      if (matchingControl.errors && matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
