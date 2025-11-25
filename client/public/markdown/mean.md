```mermaid
flowchart LR
	classDef database color: white, fill: darkred, text-align: left
	classDef backend color: white, fill: darkblue, text-align: left
	classDef frontend color: white, fill: darkgreen, text-align: left
	classDef operation color: white, fill:purple, text-align: left

	MongoDB[(MongoDB)]:::database<--> NodeJS(Node.js):::backend
	NodeJS <--> Angular(Angular):::frontend
```