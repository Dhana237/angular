import { Component, Inject } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yassh-pharma';
  constructor( @Inject(DOCUMENT) private document: Document) { }
  reload(){
    this.document.location.reload();
  }
}

