import { Component, OnInit } from '@angular/core';
import { open5eService } from '../Service/open5e.service';
import { Race } from '../interfaces/Race';
import { NgFor, NgIf } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { SharedDataService} from '../Service/shared-data.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-chooserace',
  standalone: true,
  imports: [NgIf, NgFor,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './chooserace.component.html',
  styleUrl: './chooserace.component.css'
})
export class ChooseraceComponent implements OnInit {
  races: Race[] = [];
  selectedRace: string = "dwarf";
  constructor(private open5eService: open5eService,private router: Router) { }

  ngOnInit(): void {
    this.open5eService.getRaces().subscribe(races => {
        this.races = races;
    });
  }
  onRaceSelect(event: any) {
    const selectedIndex = event.target.value;
    this.selectedRace = selectedIndex;
  }
  onNext() {
    SharedDataService.Race = this.selectedRace;
    this.router.navigate(['/step3']);
  }
  getDescription(): string {
    const selectedRace = this.races.find(cls => cls.name === this.selectedRace);
    if (selectedRace && this.selectedRace) {
        return selectedRace.desc.replace(/#####/g, '\n');
    }
    return '';
  }
}
