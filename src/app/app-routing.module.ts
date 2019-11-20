import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { AjoutemployesComponent } from './ajoutemployes/ajoutemployes.component';
import { SelectedemployesComponent } from './selectedemployes/selectedemployes.component';

const routes: Routes = [{path:'presentation',component:PresentationComponent},
                        {path:'employes-list',component:EmployesListComponent},
                        {path:'ajoutemployes',component:AjoutemployesComponent},
                        {path:'selectedemployes',component:SelectedemployesComponent},
                        {path:'',redirectTo:"my-menu",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
