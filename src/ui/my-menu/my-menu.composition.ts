import { Component, NgModule } from '@angular/core';
import { MyMenuModule } from './my-menu.module';

@Component({
  selector: 'my-menu-composition-cmp',
  template: `MyMenu composition: <my-menu></my-menu>`
})
class MyMenuCompositionComponent {}

@NgModule({
  declarations: [MyMenuCompositionComponent],
  imports: [MyMenuModule],
  bootstrap: [MyMenuCompositionComponent]
})
export class MyMenuCompositionModule {}
