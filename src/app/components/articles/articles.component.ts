import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  @Input() company: Company

}
