import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StaticPageComponentComponent } from './static-page-component/static-page-component.component';

const routes: Routes = [
    { path: 'howtobuy', component: StaticPageComponentComponent, data: {
     fileName: 'howtobuy.html',
     title: 'Оплата'
     }},

     { path: 'about', component: StaticPageComponentComponent, data: {
     fileName: 'about.html',
     title: 'О фирме'
     }},

     { path: '', pathMatch: 'full', component: MainComponent },

     { path: '**', component: StaticPageComponentComponent, data: {
     fileName: '404.html',
     title: 'Ошибка'
     }},

     { path: 'user', loadChildren: 'app/users.module#UsersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
