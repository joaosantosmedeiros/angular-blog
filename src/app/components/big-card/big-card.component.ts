import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  photoCover: string =
    'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';
  @Input()
  cardDescription: string = 'Default Description';
  @Input()
  title: string = 'Default Title';
  @Input()
  id: string = '0';
}
