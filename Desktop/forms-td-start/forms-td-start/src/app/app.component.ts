import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer: string;
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    gender: '',
    secret: '',
    answer: '',
  };
  formSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value)
  // }

  onSubmit() {
    this.formSubmitted = true;
    const tempD = Object.keys(this.signupForm.value)
      .filter((key) => key !== 'userData')
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: this.signupForm.value[key] });
      }, {});

    this.user = {
      ...this.signupForm.value.userData,
      ...tempD,
    };

    console.log(this.user);

    this.signupForm.reset();
  }
}
