import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../Service/shared-data.service';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  public username: string = '';
  public persoName: string = '';
  public race: string = '';
  public classe: string = '';
  public archetype: string = '';
  public alignment: string = '';
  public background: string = '';
  public caracteristiquesNames: string[] = [];
  public caracteristiques: number[] = [];

  constructor(private sharedDataService: SharedDataService, private router: Router ) { }

  ngOnInit(): void {
    this.username = this.sharedDataService.getUsername();
    this.persoName = this.sharedDataService.getPersoName();
    this.race = this.sharedDataService.getRace();
    this.classe = this.sharedDataService.getClasse();
    this.archetype = this.sharedDataService.getArchetype();
    this.alignment = this.sharedDataService.getAlignment();
    this.background = this.sharedDataService.getBackground();
    this.caracteristiquesNames = this.sharedDataService.getCharacteristicsNames();
    this.caracteristiques = this.sharedDataService.getCharacteristics();
  }
  onNext() {
    this.router.navigate(['']);
  }
}
