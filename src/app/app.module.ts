import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { TutorialSectionComponent } from './tutorial-section/tutorial-section.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { BasicAttrDirective } from './directives/basic-attr.directive';
import { BetterAttrDirective } from './directives/better-attr.directive';
import { InteractiveAttrDirective } from './directives/interactive-attr.directive';
import { BindingAttrDirective } from './directives/binding-attr.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ServicesComponent } from './services/services.component';
import { ItemComponent } from './services/item/item.component';
import { CreateItemComponent } from './services/create-item/create-item.component';
import { ServicesAssignComponent } from './services-assign/services-assign.component';

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
    ServicesAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
