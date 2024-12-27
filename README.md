# MyTestVueApp

## Required IDE Setup

[Node.JS](https://nodejs.org/en)

[Visual Studio](https://visualstudio.microsoft.com/)

[VS Code](https://code.visualstudio.com/)

[GIT](https://git-scm.com/downloads)

[Docker Desktop](https://www.docker.com/get-started/)

[Microsoft SQL Server Management Studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)

## Essential VS Code Extensions

Prettier - Code formatter <- *Set as default formatter*

Path Intellisense

vscode-icons

## Setup for local development

### Frontend setup in VS Code

1. Open the .Client project folder in VS Code by clicking 'File' -> 'Open Folder' and selecting the .Client inside the cloned repository folder
1. Open terminal with 'ctrl+`' *The key left of 1*
1. Run the following commands:
	```
	npm install
	```

### Database Setup in Visual Studio
1. Open the .sln file in the root directory of the project in Visual Studio
1. CD to return to the root directory and run the following commands:
	```
	docker-compose up -d
	```
	*This will run the database in a docker container and create the schema defined in the init.sql file*
1. Open Microsoft SQL Server Management Studio and connect to the database using the following credentials:
	```
	Server: localhost,1433
	Login: sa
	Password: LocalPassword123
	Encryption: Optional
	Trust Server Certificate: Yes
	```
	*Use the same password as defined in your .env file*

### Backend setup in Visual Studio

1. Open the .sln file in the root directory of the project in Visual Studio
1. Run the project with the Start button in Visual Studio
1. Accept all certificates when prompted

## Adding a new service/controller

### Adding a new service
1. Create the service interface with the desired methods in the ```Interfaces``` folder
1. Create the service implmentation in the ```ServiceImplementation``` folder
1. Setup the dependency injection in the ```Program.cs``` file following the existing example

### Adding a new controller
When adding a new controller, follow these steps:
1. Create a file in the Controllers folder ending with ```Controller.cs```
1. Be sure to have the class inherit from ```ControllerBase```
1. Include the ```[ApiController]``` and ```[Route("[controller]")]``` attributes above the class name
1. IMPORTANT: Add your controller name to the ```vite.config.ts``` file in the client folder under the ```server.proxy``` section
	1. Failure to do so will result in all fetch request failing to the requested controller 
	