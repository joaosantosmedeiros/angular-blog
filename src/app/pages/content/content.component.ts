import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      const id = value.get('id');
      this.id = id ?? '0';
      this.setComponentValues(this.id);
    });
  }

  setComponentValues(id: string) {
    const result = fakeData.find((row) => row.id == id);
    console.log(result);
    if (result) {
      this.photoCover = result.photo;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}
