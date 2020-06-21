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
  
  heroes : Hero[];

  ngOnInit() {
    this.getHeroes();
  }  
  

  constructor(private heroService: HeroService) { }
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

                                                                 


 
}