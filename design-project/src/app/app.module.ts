import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdvatComponent } from './advat/advat.component';
import { SignupComponent } from './signup/signup.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    AboutusComponent,
    AdvatComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    PaginationModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
