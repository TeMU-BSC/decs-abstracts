import { Component, OnInit } from '@angular/core'
// import { Md5 } from 'ts-md5/dist/md5'
import { AppService } from './app.service'
import { Annotator, Link } from './app.models'
import { FormBuilder, FormGroup } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  annotator: Annotator
  emailForm: FormGroup
  links: Link[]

  constructor(private appService: AppService, private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ''
    })
  }

  ngOnInit() {
    this.getLinks()
    // this.generateHashes()
  }

  getLinks() {
    this.appService.getLinks().subscribe(data => this.links = data)
  }

  loadArticles(email: string) {
    this.appService.getAnnotators().subscribe(
      data => this.annotator = data.find(annotator => annotator.email === email)
    )
  }

  // generateHashes() {
  //   this.appService.getSamples().subscribe(
  //     data => {
  //       const updatedCompanies: Annotator[] = []
  //       data.forEach(
  //         sample => {
  //           const updatedAnnotator: Annotator = {
  //             id: sample.annotator,
  //             hash: Md5.hashStr('sample.company'),
  //             articles: sample.articles
  //           }
  //           updatedCompanies.push(updatedAnnotator)
  //         }
  //       )
  //       console.log(JSON.stringify(updatedCompanies))
  //     }
  //   )
  // }

}
