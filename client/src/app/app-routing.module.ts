import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'login',loadChildren:()=>import('./views/user/login-user/login-user.module').then(m=>m.LoginUserModule)},
    {path:'register',loadChildren:()=>import('./views/user/register/register.module').then(m=>m.RegisterModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'dashbord',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'allevents',loadChildren:()=>import('./views/admin/alleventes/alleventes.module').then(m=>m.AlleventesModule)},
    {path:'ajouter-event',loadChildren:()=>import('./views/admin/addevent/addevent.module').then(m=>m.AddeventModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/login/login.module').then(m=>m.LoginModule)}
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
