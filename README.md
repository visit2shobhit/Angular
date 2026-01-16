# SmapleAngularProect

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19. It consists basics CRUD Operation and Modern Angular Concepts

#Topics Covered

Data Binding
  Property Binding
    <input
        type="text"
        width="50px"
        [value]="firstName"
        class="form-control mb-2"
      />

  Event Binding
    <input [type]="buttonType" class="btn-btn-success" value="Submit" (click)="showMeessage('Welcome Angular Learning')" />
    
Two way Data Binding
      <input
        type="text"
        width="100px"
        [(ngModel)]="firstName"
        class="form-control"
      />
Directives - (ngIf, ngFor, ngClass, ngStyle)
    Structural
    Attribute 
     
      
API Call
    Using subscribe method
    Using services      

Routes - router-outlet    

Control Flow Statements - @if and @else

Template Form
Reactive Form

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
