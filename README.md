### NestJS starter with DDD

In future if we want to make multiple services it can be added to apps as new project. Whenever new project is added update the tsconfig.json file for paths to use absolute path
#### Change set
Before making commit, run the following
`pnpm changeset`

![alt scaffloding-image](https://raw.githubusercontent.com/mahboobmonnamd/monorepo-nestjs/master/diagrams/images/scaffolding.png)


Note: 
If path update is not working properly in vscode. Press CMD+SHIFT+P select "Typescript Reload Project"
![alt reload-image](https://raw.githubusercontent.com/mahboobmonnamd/monorepo-nestjs/master/diagrams/images/reload-project.png)


should check with this
https://stackoverflow.com/questions/21554977/should-services-always-return-dtos-or-can-they-also-return-domain-models