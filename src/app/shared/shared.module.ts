import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavComponent, SearchComponent
  ],
  imports: [
    CommonModule
  ], exports:[NavComponent, SearchComponent]
})
export class SharedModule { }
