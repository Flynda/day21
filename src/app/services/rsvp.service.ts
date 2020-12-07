import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Rsvp } from '../model/rsvp.model';

const SERVER = 'http://localhost:3000/api'

@Injectable()
export class RsvpService {
    constructor(private http: HttpClient) {}

    async getRsvp(): Promise<Rsvp[]>{
        const resp = await this.http.get<any>(`${SERVER}/rsvps`)
          .toPromise()
          .catch((err: HttpErrorResponse) => {
              console.error('An error occured: ', err)
          })
        return resp
    }

    async postRsvp(body: Rsvp): Promise<any>{
        return await this.http.post(`${SERVER}/rsvp`, body)
          .toPromise()
          .catch((err: HttpErrorResponse) => {
              console.error('An error occured: ', err)
          })
    }
}