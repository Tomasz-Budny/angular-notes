import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // ## EXPORTS - tutaj deklarujemy jakie moduły chcemy wyekspotować - udostępnić innym modułom
})
export class AppRoutingModule { }
