import { AboutComponent } from './components/about/about.component';
import { FileNotFoundComponent } from './components/file-not-found/file-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListComponent } from './components/products/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about-us', component: AboutComponent},
  {path:'contact-us', component:ContactComponent},
  {path:'**',component:FileNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
