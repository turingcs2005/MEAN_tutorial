```typescript
// Step 3. register your custom SVG file in your component file
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

// your component's constructor
constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
) {
    this.matIconRegistry.addSvgIcon(
        'lobster',
        this.domSanitizer.bypassSecurityTrustResourceUrl('/icons/lobster.svg')
    );
}
```
```html
<!-- Step 4. use your custom icon -->
<mat-icon sgvIcon="lobster"></mat-icon>
```