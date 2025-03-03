import { Component } from '@angular/core';
import { ProjAComponent } from "./proj-a.component";
import { ProjBComponent } from "./proj-b.component";
import { ProjCComponent } from "./proj-c.component";

@Component({
  selector: 'app-proj-root',
  imports: [ProjAComponent, ProjBComponent, ProjCComponent],
//   templateUrl: './proj-root.component.html',
  template: `
    <app-proj-a>stuff in a</app-proj-a>
    <app-proj-b>stuff in b</app-proj-b>
    <app-proj-c>stuff in c</app-proj-c>
  `,
  styles: ``
})
export class ProjRootComponent {

}
