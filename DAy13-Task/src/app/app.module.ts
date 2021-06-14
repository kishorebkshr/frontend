import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { RegisterReactiveComponent } from './base/register-reactive/register-reactive.component';
import { LoginTemplateComponent } from './base/login-template/login-template.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '././users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './base/table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    RegisterReactiveComponent,
    LoginTemplateComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
