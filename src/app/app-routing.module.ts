import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
     path: '', loadChildren: () => import('./modules/public/public.module').then((m) => {return m.PublicModule}).catch( err => console.log('Oh no!', err) )
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
