import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;

  getHeroes(): void {
    this.heroes =  this.heroService.getHeroes();
  }

  onSelect(hero: Hero)
  {
    this.selectedHero = hero;
  }
}
