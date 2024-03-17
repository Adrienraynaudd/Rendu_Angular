import { Component, OnInit } from '@angular/core';
import { open5eService } from '../Service/open5e.service';
import { NgFor, NgIf } from '@angular/common';
import { Classe } from '../interfaces/Classe';
import {Router, RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { SharedDataService} from '../Service/shared-data.service';
@Component({
  selector: 'app-chooseclasse',
  standalone: true,
  imports: [NgIf, NgFor, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './chooseclasse.component.html',
  styleUrl: './chooseclasse.component.css'
})
export class ChooseclasseComponent implements OnInit {
  classes: Classe[] = [];
  selectedClass: string = "Barbarian";
  selectedArchetype: string = "";
  constructor(private open5eService: open5eService,private router: Router) { }

  ngOnInit(): void {
    this.open5eService.getClasses().subscribe(classes => {
        this.classes = classes;
    });
  }
  onClasseSelect(event: any) {
    const selectedClass = event.target.value;
    this.selectedClass = selectedClass;
    this.getArchetypesForSelectedClass();
    this.getSelectedArchetypeDescription();
  }
  onArchetypeSelect(event: any) {
    this.selectedArchetype = event.target.value;
  }
  getArchetypesForSelectedClass(): any[] {
    const selectedClass = this.classes.find(cls => cls.name === this.selectedClass);
    return selectedClass ? selectedClass.archetypes : [];
  }
  getSelectedArchetypeDescription(): string {
    const selectedClass = this.classes.find(cls => cls.name === this.selectedClass);
    if (selectedClass && this.selectedArchetype) {
      const selectedArchetype = selectedClass.archetypes.find(archetype => archetype.name === this.selectedArchetype);
      if (selectedArchetype) {
        return selectedArchetype.desc.replace(/#####/g, '\n');
      }
    }
    return '';
  }
  onNext() {
    SharedDataService.Classe = this.selectedClass;
    SharedDataService.Archetype = this.selectedArchetype;
    this.router.navigate(['/step5']);
  }

}
