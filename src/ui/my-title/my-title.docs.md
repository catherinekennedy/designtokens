---
labels: ['angular', 'typescript', 'my-title']
description: 'A `my-title` component.'
---

# MyTitle documentation

Import `MyTitleModule` into your application:

```ts
import { MyTitleModule } from './my-title.module';

// add it to your module imports
@NgModule({
  imports: [
    MyTitleModule
  ]
})
export class AppModule {}
```

Use `MyTitleComponent` in your templates:

```html
<my-title></my-title>
```
