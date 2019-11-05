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

  links: Link[]
  instructions: string[]
  annotator: Annotator
  email = new FormControl()
  greeting: string

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getLinks().subscribe(data => this.links = data)
    this.appService.getInstructions().subscribe(data => this.instructions = data)
  }

  loadArticles(email: string) {
    this.appService.getAnnotators().subscribe(
      data => this.annotator = data.find(annotator => annotator.email === this.email.value),
      error => console.log(error),
      () => this.greeting = this.annotator.gender === 'woman' ? 'Bienvenida' : 'Bienvenido'
    )
  }

}
