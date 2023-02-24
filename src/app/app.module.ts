import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { TutorialSectionComponent } from './tutorial-section/tutorial-section.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAttrDirective } from './directives/basic-attr.directive';
import { BetterAttrDirective } from './directives/better-attr.directive';
import { InteractiveAttrDirective } from './directives/interactive-attr.directive';
import { BindingAttrDirective } from './directives/binding-attr.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ServicesComponent } from './services/services.component';
import { ItemComponent } from './services/item/item.component';
import { CreateItemComponent } from './services/create-item/create-item.component';
import { ServicesAssignComponent } from './services-assign/services-assign.component';
import { ActiveUsersComponent } from './services-assign/active-users/active-users.component';
import { InactiveUsersComponent } from './services-assign/inactive-users/inactive-users.component';
import { CounterService } from './services-assign/counter.service';
import { ObservablesComponent } from './observables/observables.component';
import { FormsComponent } from './forms/forms.component';
import { FormsAssignComponent } from './forms-assign/forms-assign.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TestComponent } from './test/test.component';
import { InnerTestComponent } from './test/inner-test/inner-test.component';
import { PipesComponent } from './pipes/pipes.component';
import { PokemonPipe } from './pipes/pokemon.pipe';
import { ParametrizePipe } from './pipes/parametrize.pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    TutorialSectionComponent,
    DatabindingComponent,
    BasicAttrDirective,
    BetterAttrDirective,
    InteractiveAttrDirective,
    BindingAttrDirective,
    StructuralDirective,
    ServicesComponent,
    ItemComponent,
    CreateItemComponent,
    ServicesAssignComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ObservablesComponent,
    FormsComponent,
    FormsAssignComponent,
    ReactiveFormsComponent,
    TestComponent,
    InnerTestComponent,
    PipesComponent,
    PokemonPipe,
    ParametrizePipe,
    FilterByCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Potrzebne do formularzy Template Driven
    ReactiveFormsModule // Potrzebne do formularzy Reactive
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
