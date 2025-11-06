import {Component} from '@angular/core';

@Component({
  selector: 'app-headMenu',
  template: `
    <section>
        <header class="brand-name">
            <img class="box-menue" width=100px src="incone.jpg" alt="logo" aria-hidden="true" />
            <h1 class="box-menue" >OverMap</h1>
        </header>
    </section>
  `,
  styleUrls: ['./headMenu.css'],
})
export class headMenu {}
