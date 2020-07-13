import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string='';
  email: string='';
  message: string='';
  phone: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}.Phone No: ${this.phone}. My message is ${this.message}`;
    alert('Message is currently Disabled :( ........................ Please Email me at yash.h.bharani@gmail.com'); 
  }

}
