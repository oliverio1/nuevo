import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from "./componentes/login-page/login-page.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { ListadoPageComponent } from "./componentes/listado-page/listado-page.component";
import { NotFoundPageComponent } from "./componentes/not-found-page/not-found-page.component";
import { RegisterPageComponent } from "./componentes/register-page/register-page.component";

const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: '', component: InicioComponent},
    {path: 'listado', component: ListadoPageComponent},
    {path: 'registro', component: RegisterPageComponent},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
