import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { open5eService } from '../Service/open5e.service';
import { Alignment } from '../interfaces/Alignement';
import { SharedDataService} from '../Service/shared-data.service';
@Component({
  selector: 'app-choosealignement',
  standalone: true,
  imports: [NgIf, NgFor, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './choosealignement.component.html',
  styleUrl: './choosealignement.component.css'
})
export class ChoosealignementComponent implements OnInit {
  alignments: Alignment[] = [];
  selectedAlignement: string = "Lawful Good";
  constructor(private open5eService: open5eService, private router: Router) { }

  ngOnInit(): void {
    this.alignments = this.open5eService.getAllAlignments();
  }
  onAlignementSelect(event: any) {
    const selectedIndex = event.target.value;
    this.selectedAlignement = selectedIndex;
    this.getDescription();
  }
  onNext() {
    SharedDataService.Alignment = this.selectedAlignement;
    this.router.navigate(['/step6']);
  }
  getDescription(): string {
    const selectedAlignement = this.alignments.find(cls => cls.label === this.selectedAlignement);
    if (selectedAlignement && this.selectedAlignement) {
      return selectedAlignement.desc.replace(/#####/g, '\n');
    }
    return '';
  }
}
