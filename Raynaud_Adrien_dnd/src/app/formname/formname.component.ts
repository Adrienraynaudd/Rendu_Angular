import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { SharedDataService} from '../Service/shared-data.service';

@Component({
  selector: 'app-formname',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './formname.component.html',
  styleUrl: './formname.component.css'
})
export class FormnameComponent {
  public formulaire: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    this.formulaire = this.formBuilder.group({
      Username: ['', Validators.required],
      PersoName: ['', Validators.required]
    });
  }
  submitForm(): void {
    if (this.formulaire.valid) {
      SharedDataService.Username = this.formulaire.value.Username;
      SharedDataService.PersoName = this.formulaire.value.PersoName;
      this.router.navigate(['/step2']);
    }
  }
}