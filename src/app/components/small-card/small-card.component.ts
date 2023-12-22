import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input()
  title: any = 'Default title';

  @Input()
  photoCover: any =
    'https://i0.wp.com/ouvidoria.jaboatao.pe.gov.br/wp-content/uploads/2023/10/placeholder-23-1.png?fit=1200%2C800&ssl=1';

  @Input()
  id: string = '0';
}
