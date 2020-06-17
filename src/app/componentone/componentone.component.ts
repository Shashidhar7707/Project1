import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; //(since we are importing HeroService that has HEROES)
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css']
})
export class ComponentoneComponent implements OnInit {
  // heroes = HEROES;
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();  // it is a function to retrieve heroes from the service
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }                                                                  


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}