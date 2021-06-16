import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterReactiveComponent } from './base/register-reactive/register-reactive.component';
import { LoginTemplateComponent } from './base/login-template/login-template.component';
import { TableComponent } from './base/table/table.component';
const routes: Routes = [
  { path: "login", component: LoginTemplateComponent },
  { path: "reg", component: RegisterReactiveComponent },
  { path: "login-page", component: TableComponent },
  { path: "back", component: LoginTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
