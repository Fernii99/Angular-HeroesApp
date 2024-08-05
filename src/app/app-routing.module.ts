import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    //loadchildren is a function that imports the path of the module we want to load and .then declare the module
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'heroes',
    //loadchildren is a function that imports the path of the module we want to load and .then declare the module
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    // between the ' and the first letter in the paths there is an empty string that will make all the routes
    // come to this one, this is where the pathMatch: 'full' becomes handy that makes the '' must be completely equal
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
