import { NgModule } from '@angular/core';
import { MyMenuComponent } from './my-menu.component';
import { UiModule } from '@catherinekennedy/angularcomponent/ui.module';

@NgModule({
  declarations: [
    MyMenuComponent
  ],
  imports: [UiModule],
  exports: [
    MyMenuComponent,
    UiModule
  ]
})
export class MyMenuModule {}
