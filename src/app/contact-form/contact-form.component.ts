import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'message': new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
    // Le formulaire est déjà initialisé, donc vous pouvez laisser ngOnInit vide.
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      alert(`Email: ${this.contactForm.value.email}\nMessage: ${this.contactForm.value.message}`);
      this.contactForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
