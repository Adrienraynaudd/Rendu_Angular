import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public static Username: string = '';
  public static PersoName: string = '';
  public static Race: string = '';
  public static Alignment: string = '';
  public static Background: string = '';
  public static Classe: string = '';
  public static Archetype: string = '';
  public static CharacteristicsNames : string[]= [];
  public static Characteristics: number[] = [];

  constructor() { }

  setUsername(username: string): void {
    SharedDataService.Username = username;
  }

  setPersoName(persoName: string): void {
    SharedDataService.PersoName = persoName;
  }

  setRace(race: string): void {
    SharedDataService.Race = race;
  }

  setAlignment(alignment: string): void {
    SharedDataService.Alignment = alignment;
  }

  setBackground(background: string): void {
    SharedDataService.Background = background;
  }

  setClasse(classe: string): void {
    SharedDataService.Classe = classe;
  }

  setArchetype(archetype: string): void {
    SharedDataService.Archetype = archetype;
  }

  setCharacteristicsNames(characteristicsNames: string[]): void {
    SharedDataService.CharacteristicsNames = characteristicsNames;
  }

  setCharacteristics(Characteristics: number[]): void {
    SharedDataService.Characteristics = Characteristics;
  }

  getUsername(): string {
    return SharedDataService.Username;
  }

  getPersoName(): string {
    return SharedDataService.PersoName;
  }
  getRace(): string {
    return SharedDataService.Race;
  }
  getAlignment(): string {
    return SharedDataService.Alignment;
  }
  getBackground(): string {
    return SharedDataService.Background;
  }
  getClasse(): string {
    return SharedDataService.Classe;
  }
  getArchetype(): string {
    console.log(SharedDataService.Archetype);
    return SharedDataService.Archetype;
  }
  getCharacteristicsNames(): string[] {
    return SharedDataService.CharacteristicsNames;
  }
  getCharacteristics(): number[] {
    return SharedDataService.Characteristics;
  }
}
