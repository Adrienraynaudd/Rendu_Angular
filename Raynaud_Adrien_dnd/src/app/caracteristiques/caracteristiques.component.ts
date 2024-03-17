import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, } from '@angular/router';
import { NgFor } from '@angular/common';
import { SharedDataService } from '../Service/shared-data.service';
@Component({
  selector: 'app-caracteristiques',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './caracteristiques.component.html',
  styleUrl: './caracteristiques.component.css'
})
export class CaracteristiquesComponent {
  constructor(private router: Router) { }
  characteristicsNames: string[] = ['Force', 'Dextérité', 'Constitution', 'Intelligence', 'Sagesse', 'Charisme'];
  characteristicsValues: number[] = [0, 0, 0, 0, 0, 0];
  showMachines = false;

  rollAttributes() {
    let totalPoints = 27;

    for (let i = 0; i < this.characteristicsValues.length; i++) {
      this.characteristicsValues[i] = 1;
      totalPoints--;
    }

    while (totalPoints > 0) {

      const randomIndex = Math.floor(Math.random() * this.characteristicsValues.length);
      if (this.characteristicsValues[randomIndex] < 15 && totalPoints > 0) {
        this.characteristicsValues[randomIndex]++;
        totalPoints--;
      }
    }
  }

  startAnimations() {
    const machines = document.querySelectorAll('.slot');
    this.rollAttributes();
    let index = 0;
    this.showMachines = true;
    const animateNextMachine = () => {
      if (index < machines.length) {
        this.startAnimation(machines[index] as HTMLElement, index);
        index++;
        setTimeout(animateNextMachine, 2000);
      } else {
        setTimeout(() => {
          this.showMachines = false;
        }, 1000);
      }
    };

    animateNextMachine();
  }

  startAnimation(machine: HTMLElement, index: number) {
    let currentIndex = 0;
    const numbers = machine.querySelectorAll('.number');
    const numbersArray = Array.from(numbers);
  
    const targetValue = this.characteristicsValues[index]; // Valeur cible
  
    const interval = setInterval(() => {
      numbersArray.forEach((number: Element) => {
        (number as HTMLElement).style.display = 'none';
      });
      let displayedNumber: HTMLElement;
      if (currentIndex < 39) {
        const randomIndex = Math.floor(Math.random() * numbersArray.length);
        displayedNumber = numbersArray[randomIndex] as HTMLElement;
      } else {
        displayedNumber = numbersArray.find((num: Element) => parseInt((num as HTMLElement).innerText) === targetValue) as HTMLElement;
      }
      displayedNumber.style.display = 'block';
      currentIndex++;
      if (currentIndex >= 40) {
        clearInterval(interval);
        this.characteristicsValues[index] = parseInt(displayedNumber.innerText); // Mettez à jour la valeur de la caractéristique
      }
    }, 50);
  }
  onNext() {
    SharedDataService.Characteristics = this.characteristicsValues;
    SharedDataService.CharacteristicsNames = this.characteristicsNames;
    this.router.navigate(['/stepfinal']);
  }
}
