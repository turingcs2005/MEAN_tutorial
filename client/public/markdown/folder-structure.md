# MEAN project folder structure

___

```
📁 project
├── 📄 .gitignore
├── 📁 .git
├── 📄 Dockerfile
├── 📄 .dockerignore
├── 📁 client
│   ├── 📁 public
│   │   ├── 📁 fonts
│   │   └── 📁 markdown
│   └── 📁 src
│       ├── 📁 app
│       │   ├── 🟦 app.routes.ts
│       │   ├── 🟦 app.config.ts
│       │   ├── 📁 shared
│       │   │   ├── 🟦 material.ts
│       │   │   └── 🟦 tools.ts
│       │   ├── 📁 welcome
│       │   │   ├── 📁 home
│       │   │   └── 📁 top-bar
│       │   ├── 📁 feature1
│       │   │   ├── 📁 component1
│       │   │   ├── 📁 component2
│       │   │   └── 🟦 feature1.routes.ts
│       │   ├── 📁 feature2
│       │   ├── 📁 feature3
│       │   └── 📁 services
│       │       ├── 🟦 global.ts
│       │       └── 🟦 crud.ts
│       └── 📁 environments
│           ├── 🟦 environment.ts
│           └── 🟦 environment.development.ts
└── 📁 server
    ├── 📁 src
    │   ├── 🟦 app.mts
    │   └── 📁 mongodb
    │       ├── 📁 controllers
    │       ├── 📁 models
    │       ├── 📁 routes
    ├── 📁 dist
    ├── 📁 angular
    │   └── 📁 browser
    └── 📄 .env
```