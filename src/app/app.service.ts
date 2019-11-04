import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Annotator, Link } from './app.models'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAnnotators(): Observable<Annotator[]> {
    return this.http.get<Annotator[]>('assets/samples.json')
  }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('assets/links.json')
  }

}
