import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { AjoutemployesComponent } from './ajoutemployes/ajoutemployes.component';
import { SelectedemployesComponent } from './selectedemployes/selectedemployes.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    PresentationComponent,
    EmployesListComponent,
    AjoutemployesComponent,
    SelectedemployesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
