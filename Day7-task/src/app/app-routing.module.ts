import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './base/login/login.component';
import{RegisterComponent} from './base/register/register.component';


const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"reg",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
