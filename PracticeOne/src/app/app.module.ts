import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { ChildFourComponent } from './child-four/child-four.component';
import { ChildFiveComponent } from './child-five/child-five.component';
import { FormsModule } from '@angular/forms';
import { ChildSixComponent } from './child-six/child-six.component';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { BackgroundcolorRendererDirective } from './directives/backgroundcolor-renderer.directive';
import { HostlistenerDirective } from './directives/hostlistener.directive';
import { HostbindingDirective } from './directives/hostbinding.directive';
import { DirectiveInputDirective } from './directives/directive-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ChildFourComponent,
    ChildFiveComponent,
    ChildSixComponent,
    BackgroundColorDirective,
    BackgroundcolorRendererDirective,
    HostlistenerDirective,
    HostbindingDirective,
    DirectiveInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
