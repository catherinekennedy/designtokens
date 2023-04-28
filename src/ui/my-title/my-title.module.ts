import { NgModule } from '@angular/core';
import { MyTitleComponent } from './my-title.component';
import { UiModule } from '@catherinekennedy/angularcomponent/ui.module'; 


@NgModule({
  declarations: [
    MyTitleComponent
  ],
  imports: [
    UiModule
  ],
  exports: [
    MyTitleComponent,
    UiModule
  ]
})
export class MyTitleModule {}
