import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({providedIn: 'root'})

export class HeroesService {

  // retrieve the base URL to the localhost from the environment File
  private baseURL: string = environment.baseURL;

  //injection of the module HTTPCLIENT to make the petition to the server
  constructor(private http: HttpClient) { }

  //getHeroes Function that returns the Array of type Hero from the petition
  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseURL}/heroes`)
  }


  //Function that will return an Observable of type Hero or undefined
  //as the get method can return an 404 error if the id is not an existing one
  // adding a pipe with a catchError(imported from rxjs) will detect and return what we need
  //! Note that as the return is an observable we need to add the of() from rxjs to make it
  //! become an observable, in other case it will say it is not type observable
  getHeroById(id: string):Observable< Hero | undefined> {
    return this.http.get<Hero>(`${this.baseURL}/heroes/${id}`)
    .pipe(
      catchError( error => of(undefined) )
    )
  }

}
