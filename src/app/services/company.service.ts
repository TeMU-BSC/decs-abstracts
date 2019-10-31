import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getSamples(): Observable<any[]> {
    return this.http.get<any[]>('assets/samples.json')
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('assets/companies.json')
  }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('assets/links.json')
  }
}