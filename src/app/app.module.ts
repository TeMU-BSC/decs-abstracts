import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// Angular HTTP
import { HttpClientModule } from '@angular/common/http'

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Flex Layout
// https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout'

// Own components
import { ArticleComponent } from './components/article/article.component'
import { ArticlesComponent } from './components/articles/articles.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
