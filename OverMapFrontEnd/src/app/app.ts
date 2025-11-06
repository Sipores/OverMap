import {Component} from '@angular/core';
import {headMenu} from './HeadMenu/headMenu';

@Component({
  selector: 'app-root',
  imports: [headMenu],
  template: `
    <main>
      <section class="content">
        <app-headMenu></app-headMenu>
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
  constructor() {
    console.log(window.location.href);
  }
}


