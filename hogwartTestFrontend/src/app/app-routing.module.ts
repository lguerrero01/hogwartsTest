import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/characters',
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('src/app/pages/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: '**',
    redirectTo: '/characters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
