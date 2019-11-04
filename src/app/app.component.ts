import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Annotator, Link } from './app.models'
import { AppService } from './app.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  annotator: Annotator
  email = new FormControl()
  links: Link[]

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getLinks().subscribe(data => this.links = data)
  }

  loadArticles(email: string) {
    this.appService.getAnnotators().subscribe(
      data => this.annotator = data.find(annotator => annotator.email === this.email.value)
    )
  }

}
