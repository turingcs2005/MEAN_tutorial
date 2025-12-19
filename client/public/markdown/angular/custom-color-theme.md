# Custom color theme
___
In addition to the prebuilt Material color themes, you can create a custom color theme to reflect your branding.

## 1. CLI command
<pre class="command-line"><code>ng g @angular/material:theme-color</code></pre>

1. You will be prompted to enter a path for your stylesheet (src/app/styles, default file name _theme_colors.scss).
2. You will then be prompted to enter up to 6 different colors for creating color palettes：
    1. Primary Palette: used for main UI elements such as app bars, primary buttons, selected states.
    2. Secondary Palette: used for accents such as floating action buttons, highlights, secondary buttons.
    3. Tertiary Palette: used for subtle highlight such as cards, or complementary UI surfaces.
    4. Neutral Palette: used for background, text, surfaces.
    5. Neutral-Variant Palette: used for containers, cards, hover backgrounds.
    6. Error Palettte: used for validation, alerts, errors. (should use red as base color)

You don't have to enter all 6 colors. The default colors usually will works.

## 2. Import your stylesheet
You can use mat.get-theme-color() to use your primary, secondary, tertiary, etc. colors. Often, you should let Angular pick colors for you. For example, on-primary option allows Angular 
to pick a text color againt primary 30 background color. If you want, you can import scss functions to tweak other color parameters such as saturation, etc.

```css
@use '@angular/material' as mat;
@use 'app/styles/theme-colors' as my-theme;

// defining a theme
$theme: mat.define-theme((
  color: (
    theme-type: light,
    primary: my-theme.$primary-palette,    // Slate
    tertiary: my-theme.$tertiary-palette,  // Rose Gold
  ),
));

html, body { height: 100%; }

body {
  // Default the application to a light color theme. This can be changed to
  // `dark` to enable the dark color theme, or to `light dark` to defer to the
  // user's system settings.
  color-scheme: light;

  // Set a default background, font and text colors for the application using
  // Angular Material's system-level CSS variables. Learn more about these
  // variables at https://material.angular.dev/guide/system-variables
  background-color: var(--mat-sys-surface);
  color: var(--mat-sys-on-surface);
  font: var(--mat-sys-body-medium);

  // Reset the user agent margin.
  margin: 0;
}
/* You can add global styles to this file, and also import other style files */


:root {
  // Include all component themes (this generates CSS variables)
  @include mat.all-component-themes($theme);

  @include mat.toolbar-overrides((
    container-background-color: mat.get-theme-color($theme, primary, 20),
    container-text-color: mat.get-theme-color($theme, on-primary)
  ));
}

.padding20 {
  padding: 10px 20px;
}
```