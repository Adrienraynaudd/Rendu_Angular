import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { open5eService } from '../Service/open5e.service';
import { Backgrounds } from '../interfaces/Backgrounds';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { SharedDataService} from '../Service/shared-data.service';

@Component({
  selector: 'app-choosebackground',
  standalone: true,
  imports: [NgIf, NgFor,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './choosebackground.component.html',
  styleUrl: './choosebackground.component.css'
})
export class ChoosebackgroundComponent implements OnInit {
  backgrounds: Backgrounds[] = [];
  selectedBackground: string = "acolyte";
  constructor(private open5eService: open5eService,private router: Router) { }
  ngOnInit(): void {
    this.open5eService.getBackgrounds().subscribe(backgrounds => {
        this.backgrounds = backgrounds;
    });
  }
  onBackgroundsSelect(event: any) {
    const selectedIndex = event.target.value;
    this.selectedBackground = selectedIndex;
  }
  onNext() {
    SharedDataService.Background = this.selectedBackground;
    this.router.navigate(['/step4']);
  }
  getDescription(): string {
    const selectedBackground = this.backgrounds.find(cls => cls.name === this.selectedBackground);
    if (selectedBackground && this.selectedBackground) {
        return selectedBackground.desc.replace(/#####/g, '\n');
    }
    return '';
  }
}
