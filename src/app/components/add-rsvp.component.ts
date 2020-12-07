import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RsvpService } from '../services/rsvp.service';

@Component({
  selector: 'app-add-rsvp',
  templateUrl: './add-rsvp.component.html',
  styleUrls: ['./add-rsvp.component.css']
})
export class AddRsvpComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private rsvpSvc: RsvpService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
    })
  }

  async addTask() {
    // console.info('name', this.form.value['name'])
    // console.info('email', this.form.value['email'])
    // console.info('phone', this.form.value['phone'])
    // console.info('status', this.form.value['status'])
    // console.info('form:', this.form.value)
    await this.rsvpSvc.postRsvp(this.form.value)
    this.router.navigate(['/'])
  }

}
