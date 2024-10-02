import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from "../error/error.component";
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ErrorComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {
  MIN_LENGTH = 2;
  MAX_LENGTH = 15;
  contact: Contact = {
    firstname: '',
    lastname: '',
    email: '',
  }

  onFormSubmit(): void {
    console.log("FORM DATA => ", this.contact);
  }
}
