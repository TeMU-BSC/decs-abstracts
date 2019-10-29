import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  company: Company
  companies: Company[]
  articles: Article[]

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getArticles()
    console.log(this.articles);
    
  }

  getArticles() {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies,
      error => console.log(error),
      () => this.articles = this.companies[0].articles
    )
  }

}
