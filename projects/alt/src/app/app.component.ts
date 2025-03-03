import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from "./test/a.component";
import { BComponent } from "./test/b.component";
import { CComponent } from "./test/c.component";
import { DComponent } from "./test/d.component";
import { EComponent } from "./test/e.component";
import { FComponent } from "./test/f.component";
import { GComponent } from "./test/g.component";
import { HComponent } from "./test/h.component";
import { IComponent } from "./test/i.component";
import { JComponent } from "./test/j.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AComponent, BComponent, CComponent, DComponent, EComponent, FComponent, GComponent, HComponent, IComponent, JComponent],
  templateUrl: './app.component.html',
//   template: `
//     <app-a></app-a>
//     <app-b></app-b>
//     <app-c></app-c>
//     <app-d></app-d>
//     <app-e></app-e>
//     <app-f></app-f>
//     <app-g></app-g>
//     <app-h></app-h>
//     <app-i></app-i>
//     <app-j></app-j>
//   `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'self-closing-19.2';
}
