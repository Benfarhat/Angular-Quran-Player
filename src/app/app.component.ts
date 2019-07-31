import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Quran Player';
  langage = 'en';

  constructor(@Inject(DOCUMENT) public document: Document) {}

  ngOnInit() {
    this.document.documentElement.title = this.title
    this.document.documentElement.lang = this.langage; 

  }

}
