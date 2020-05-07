import { ProductsRoutingModule } from './components/products/products-routing.module';
import { ProductsModule } from './components/products/products.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ListComponent } from './components/products/list/list.component';
import { EditComponent } from './components/products/edit/edit.component';
import { AddComponent } from './components/products/add/add.component';
import { HeaderComponent } from './components/header/header.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ListComponent,
    EditComponent,
    AddComponent,
    HeaderComponent,
    FileNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProductsRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
