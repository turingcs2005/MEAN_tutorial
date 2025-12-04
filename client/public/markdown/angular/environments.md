# Environments

Previously, cli command <pre class="command-line"><code>ng new client</code></pre> would create the environments folder and placeholder files for you. Now, these need to be created either manually or by using the cli command:

<pre class="command-line"><code>ng g environments</code></pre>

 

It will create the following structure under client/src/:

```
📁 client
    └── 📁 src
        └── 📁 environments
            ├── 🟦 environment.ts
            └── 🟦 environment.development.ts
```

 

Create and populate your environment files, and then configure environments in the angular.json file.