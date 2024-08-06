import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  //Variable to store the Superheroes that are going to be shown
  public heroes: Hero[] = [];

  //injection of the service HeroesService
  constructor( private heroesService: HeroesService) {}

  //As the data retrieving is going to be on the initial load of the page
  //there is the need of implementeing OnInit and inside the function
  //make the call to the service for the data retrieve
  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes)
  }

}
