import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
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

}
