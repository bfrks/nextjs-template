# NextJS 13 Template Project (TypeScript)

> Use this template repository for getting a NextJS 13 project that contains every resource that you need
> for modern web development.

### What is Included

The template contains the boilerplate code required for setting up a modern full-stack web application development environment.
The project is [TypeScript][typescript] based, and it utilizes the popular [NextJS][nextjs] framework. The project also contains various
configurations for unit, integration, and E2E testing.

### What is NOT Included

The template does not contain any deployment configurations -- I leave setting up CI/CD integrations to the users of this template.
This template is a good starting point for application development, but it is not something that is ready for production deployments.

### Featured Tools

- [NextJS 13][nextjs]: Modern React framework for creating full-stack web applications. ([docs][nextjs-docs])
- [Sass][sass]: CSS extension language that levels up the CSS development effectiveness. ([docs][sass-docs])
- [Jest][jest]: Javascript testing framework that relies on simplicity. ([docs][jest-docs])
- [Testing Library][testing-library]: Testing utilities used for effective component testing. ([docs][testing-library-docs])
- [Cypress][cypress]: Remarkable tool for frontend E2E testing. ([docs][cypress-docs])
- [MSW][msw]: API mocking tool to enhance the E2E testing experience. ([docs][msw-docs])
- [ESLint][eslint]: Static code analyzer that helps you to write maintainable code. ([docs][eslint-docs])
- [Prettier][prettier]: The go-to formatting tool of many JavaScript developers. ([docs][prettier-docs])

### Directory Structure

```
template
├── app: NextJS main resources
├── components: Client or Server-Side components used by resources in the app directory
├── cypress
│   ├── e2e: The collection of the E2E test suites
│   └── support: Custom commands and settings used in E2E testing
├── pages: NextJS API resources (going to be changed when version 13 finalizes)
├── public: Public resources used by the website that is based on this template
├── styles: The SCSS stylesheets used by pages, components, etc
├── test
│   ├── [app/component]: The collection of unit and integration test suites
│   ├── config: The Jest configuration files used for configuring up the unit and integration tests
│   ├── setup: Global Jest setup files that run before every test suite
│   └── mocks: The collection of configurations related to MSW mocking
└── utils: Common utility functions used throughout the application
```

### Available Commands

| Command                       | Effect                                                                     |
|-------------------------------|----------------------------------------------------------------------------|
| `npm run dev`                 | Starts up the NextJS development server for local development.             |
| `npm run build`               | Creates a production build of the application (used in deployments).       |
| `npm run start`               | Start a server that serves the resources created from the `build` command. |
| `npm run lint`                | Runs ESLint on the project files.                                          |
| `npm run test`                | Runs the unit, integration, and function test suites.                      |
| `npm run unit[:watch]`        | Runs the unit test suites (in watch mode).                                 |
| `npm run integration[:watch]` | Runs the integration test suites (in watch mode).                          |
| `npm run functional[:watch]`  | Runs the functional (E2E) test suites (in watch mode).                     |
| `npm run cypress:headless`    | Starts Cypress in CLI mode (without opening the Cypress UI).               |
| `npm run cypress:open`        | Opens the Cypress UI.                                                      |


[typescript]: https://www.typescriptlang.org/
[nextjs]: https://nextjs.org/
[nextjs-docs]: https://beta.nextjs.org/docs
[sass]: https://sass-lang.com/
[sass-docs]: https://sass-lang.com/documentation/
[jest]: https://jestjs.io/
[jest-docs]: https://jestjs.io/docs/getting-started
[testing-library]: https://testing-library.com/
[testing-library-docs]: https://testing-library.com/docs/
[cypress]: https://www.cypress.io/
[cypress-docs]: https://docs.cypress.io/guides/overview/why-cypress
[msw]: https://mswjs.io/
[msw-docs]: https://mswjs.io/docs/
[eslint]: https://eslint.org/
[eslint-docs]: https://eslint.org/docs/latest/
[prettier]: https://prettier.io/
[prettier-docs]: https://prettier.io/docs/en/index.html
