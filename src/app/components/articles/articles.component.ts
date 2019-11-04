import { Component, Input } from '@angular/core'
import { Annotator } from '../../app.models'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  @Input() annotator: Annotator
}
