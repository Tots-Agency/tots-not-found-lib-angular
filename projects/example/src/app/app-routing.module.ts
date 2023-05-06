import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotsNotFoundPageConfig } from 'projects/tots/not-found/src/lib/entities/tots-not-found-page-config';
import { TotsNotFoundPageComponent } from 'projects/tots/not-found/src/lib/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { 
    path: '**', 
    component: TotsNotFoundPageComponent, 
    data: {
      pathHome: '/',
      image: '/assets/not-found404.png',
      textTitle: 'Ooops... 404!',
      textSubtitle: 'The page you requested could not be found.',
      textReturn: 'Return to home page',
    } as TotsNotFoundPageConfig
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
