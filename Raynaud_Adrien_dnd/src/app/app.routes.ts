import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {FormnameComponent} from './formname/formname.component';
import { ChooseraceComponent} from './chooserace/chooserace.component';
import { ChoosebackgroundComponent } from './choosebackground/choosebackground.component';
import { ChooseclasseComponent } from './chooseclasse/chooseclasse.component';
import { ChoosealignementComponent } from './choosealignement/choosealignement.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';
import { FicheComponent } from './fiche/fiche.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'step1', component: FormnameComponent },
  { path: 'step2', component: ChooseraceComponent },
  { path: 'step3', component: ChoosebackgroundComponent },
  { path: 'step4', component: ChooseclasseComponent },
  { path: 'step5', component: ChoosealignementComponent },
  { path: 'step6', component: CaracteristiquesComponent },
  { path: 'stepfinal', component: FicheComponent },
    { path: '**', redirectTo: '' }
];