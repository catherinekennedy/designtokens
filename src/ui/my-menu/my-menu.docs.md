---
labels: ['angular', 'typescript', 'my-menu']
description: 'A `my-menu` component.'
---

# MyMenu documentation

Import `MyMenuModule` into your application:

```ts
import { MyMenuModule } from './my-menu.module';

// add it to your module imports
@NgModule({
  imports: [
    MyMenuModule
  ]
})
export class AppModule {}
```

Use `MyMenuComponent` in your templates:

```html
<my-menu></my-menu>
```
