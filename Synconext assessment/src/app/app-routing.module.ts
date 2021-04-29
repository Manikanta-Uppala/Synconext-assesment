import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MultiplefilteringComponent } from './multiplefiltering/multiplefiltering.component';


const routes: Routes = [
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'multiplefiltering', component: MultiplefilteringComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
