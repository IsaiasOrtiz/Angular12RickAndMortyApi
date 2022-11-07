import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { CardComponent } from './components/card/card.component';
const routes: Routes = [{
  path :"" , component: CardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
