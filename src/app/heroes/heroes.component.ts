import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../sharedServices/heroService';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero; //the '?' makes the property optional so no initialization is needed.
  heroes = HeroService.getHeroes();

  constructor() { }

  ngOnInit(): void {
  }

  onClickHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
