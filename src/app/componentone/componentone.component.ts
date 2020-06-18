import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; //(since we are importing HeroService that has HEROES)
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css']
})
export class ComponentoneComponent implements OnInit {
  // heroes = HEROES;

  ngOnInit() {
    this.getHeroes();
  }  
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();  // it is a function to retrieve heroes from the service
  // }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

                                                                 


 
}