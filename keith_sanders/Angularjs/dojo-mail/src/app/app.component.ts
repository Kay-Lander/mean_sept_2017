import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  emails = [
    {email: 'sanders@rulez.com', importance: true, subject: 'Programmer noob', content: 'the man who make mircale'},
    {email: 'shadow@hunter.com', importance: false, subject: 'Non-fig', content: 'the man destroys'},
    {email: 'mitch@rapp.com', importance: true, subject: 'American Assassin ', content: 'the man a ghost'},
    {email: 'monster@whatever.com', importance: false, subject: 'Monster University dropout', content: 'future scarers'},
    {email: 'coding@ninja.com', importance: true, subject: 'Programmer noob', content: 'future success'},
  ]
}
