import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextSlideComponent } from './text-slide/text-slide.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsSingleComponent } from './items/items-list/items-single/items-single.component';
import { StoreEditComponent } from './store/store-edit/store-edit.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSlideComponent,
    HomeComponent,
    StoreComponent,
    AboutComponent,
    ContactComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsSingleComponent,
    StoreEditComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
