import { Component, NgModule } from '@angular/core';
import { MyTitleModule } from './my-title.module';


@Component({
  selector: 'my-title-composition-cmp',
  template: `MyButton composition: <my-title></my-title>`
})
class MyTitleCompositionComponent {}

@NgModule({
  declarations: [MyTitleCompositionComponent],
  imports: [MyTitleModule],
  bootstrap: [MyTitleCompositionComponent]
})
export class MyTitleCompositionModule {}
