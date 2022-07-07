import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactsForm = new FormGroup({
    clientName: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
    clientAge: new FormControl('', [Validators.min(10), Validators.max(100)]),
    clientMail: new FormControl('', [Validators.email]),
    messageTitle: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    messageBody: new FormControl('', [Validators.minLength(2), Validators.maxLength(100), Validators.required, Validators.pattern('[a-zA-Z ]*')])
  });
  contactsList:any[] = [];
  saveForm()
  {
    this.contactsList.push(this.contactsForm.value);
    localStorage.setItem('contacts', JSON.stringify(this.contactsList));
    console.log(this.contactsForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
