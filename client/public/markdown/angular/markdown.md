# Rendering markdown files in an Angular app
___
## 1. NPM package installation
1. Install ngx-markdown, marked
2. Optionally, install the following packages if you plan to use them:
- mermaid: charts
- prismjs: source code syntax highlighting
- katex: math formula
- emoji-toolkit: emoji

<pre class="command-line"><code>npm i ngx-markdown marked mermaid prismjs katex emoji-toolkit</code></pre>

## 2. Configuration

### 2.1 angular.json
The official ngx-markdown documentation provides detailed configuration instructions. Below is an excerpt from a sample angular.json file. For source code syntax highlighting, you may need to add or remove the imported .css files depending on the type of source code you plan to include in your Markdown files.
```json
"styles": [
    "node_modules/@angular/material/prebuilt-themes/rose-red.css",
    "src/styles.scss",
    "node_modules/prismjs/themes/prism-okaidia.css",
    "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css",
    "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.css",
    "node_modules/prismjs/plugins/command-line/prism-command-line.css",
    "node_modules/katex/dist/katex.min.css"
],
"scripts": [
    "node_modules/prismjs/prism.js",
    "node_modules/prismjs/components/prism-typescript.min.js",
    "node_modules/prismjs/components/prism-javascript.min.js",
    "node_modules/prismjs/components/prism-python.min.js",
    "node_modules/prismjs/components/prism-json.min.js",
    "node_modules/prismjs/components/prism-css.min.js",
    "node_modules/prismjs/components/prism-html.min.js",
    "node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js",
    "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js",
    "node_modules/prismjs/plugins/command-line/prism-command-line.js",
    "node_modules/katex/dist/katex.min.js",
    "node_modules/katex/dist/contrib/auto-render.min.js",
    "node_modules/mermaid/dist/mermaid.min.js",
    "node_modules/emoji-toolkit/lib/js/joypixels.min.js"
]  
```
### 2.2 app.config.ts
```typescript
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMarkdown()
  ]
};
```

### 3.3. Component and template
- A component needs to import MarkdownModule. 
- A template can render markdown file(s) saved under public/ directory. For example, code below renders file markdown.md under directory client/public/markdown/angular/
```html
<markdown mermaid src="/markdown/angular/markdown.md"></markdown>
```
