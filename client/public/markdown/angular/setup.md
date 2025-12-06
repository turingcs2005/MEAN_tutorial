# Angular project setup
___
## 1. Tips

When scaffolding an Angular project:
- Use standalone components
- Implement lazy loading for feature routes

## 2. Basic Angular CLI commands:
- To create a new Angular project
<pre class="command-line"><code>ng new PROJECT --skip-git=true --style=scss --routing</code></pre>
Use <code>--skip-git=true</code> if you will version control both the front end and the back end using a single git repo. Use AI to create a git-ignore file for you.

- To create a standalone component
<pre class="command-line"><code>ng g c FEATURE/COMPONENT --standalone --change-detection=OnPush</code></pre>
Use option <code>--change-detection=OnPush</code> if your component uses immutable data patterns, i.e. arrays and objects are not mutated. If you have to mutate them,  create a new reference or remove the OnPush option (the default change detection strategy is computationally expensive).

- To create a service
<pre class="command-line"><code>ng g s services/SERVICE</code></pre>

