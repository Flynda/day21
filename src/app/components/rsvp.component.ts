import { Component, OnInit } from '@angular/core';
import { Rsvp } from '../model/rsvp.model';
import { RsvpService } from '../services/rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  RsvpList: Rsvp[]

  constructor(private rsvpSvc: RsvpService) { }

  ngOnInit(): void {
    this.rsvpSvc.getRsvp()
    .then(results => {
      // console.info('get rsvp results', results)
      this.RsvpList = results.map(r => {
        return {
          name: r['name'],
          email: r['email'],
          phone: r['phone'],
          status: r['status']
        }
      })
    })
  }

}
