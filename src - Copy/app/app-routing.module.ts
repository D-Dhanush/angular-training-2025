import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PostComponent } from './post/post.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserdetailComponent},
  {path:'posts',component:PostComponent,canActivate:[authGuard]},
  {path:'posts/:id',component:PostdetailsComponent},
  {path:'admin',loadChildren:()=> import('./admin.module').then(m=>m.AdminModule)},  // {path:'',component:HomeComponent},this or below is better
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PnfComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
