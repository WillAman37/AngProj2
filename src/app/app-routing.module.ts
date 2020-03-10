import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
{path: 'store', component: StoreComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: '', component: HomeComponent},
{path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ContactComponent,  AboutComponent, StoreComponent, HomeComponent, CartComponent ]