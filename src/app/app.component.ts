import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { CompanyService } from './services/company.service';
import { Company } from './models/company.model';
import { Link } from './models/link.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  company: Company
  companyHash: string
  links: Link[]

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getLinks()
    this.generateHashes()
  }

  getLinks() {
    this.companyService.getLinks().subscribe(data => this.links = data)
  }

  loadArticles() {
    this.companyService.getCompanies().subscribe(
      data => {
        this.company = data.find(company => company.hash === this.companyHash)
      }
    )
  }

  generateHashes() {
    this.companyService.getSamples().subscribe(
      data => {
        let updatedCompanies: Company[] = []
        data.forEach(
          sample => {
            const updatedCompany: Company = {
              id: sample['company'],
              hash: Md5.hashStr(sample['company']),
              articles: sample['articles']
            }
            updatedCompanies.push(updatedCompany)
          }
        )
        console.log(JSON.stringify(updatedCompanies))
      }
    )
  }

}
