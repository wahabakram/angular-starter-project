# Angular Starter Project

Welcome to the **Angular Starter Project**! This project is a modern, scalable, and feature-rich Angular-based web application that is equipped with best practices for maintainability, performance, and security.

## 🚀 Project Features

- **Angular CLI** version: `18.2.12`
- **Node** version: `20.11.1`
- **UI Frameworks**: Angular Material + TailwindCSS
- **Storybook** for component-driven development
- **End-to-End Testing** with Playwright
- **Unit Testing** with Jest
- **SCSS Preprocessor**
- **Prettier**, **ESLint**, and **Stylelint** for code formatting and linting
- **@Compodoc** for documentation generation
- **GitHub CI Workflows** setup for continuous integration
- **Firebase** auto-deployment to ensure seamless deployment to production
- **Authorization & Authentication** integrated
- **NgRx** Store implementation for state management
- **Docker** setup for containerized development and production
- **Theming** customization for dynamic UI styling
- **Modern Folder Structure** to ensure maintainability
- **Multi-Environment Setup** for different deployment stages

> Deployed app URL: [Angular Starter Project](https://angular-starter-project-f9dbb.web.app/)

## 📦 Project Setup

Follow these steps to set up the Angular Starter Project on your local machine.

### Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** version `20.11.1` or higher
- **Angular CLI** version `18.2.12`
- **Docker** (for containerization)

### 1. Clone the repository

```bash
git clone https://github.com/wahabakram/angular-starter-project.git
cd angular-starter-project
```

### 2. Install dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Run the application locally

To start the application locally, run:

```bash
npm start
```

If you want to access the app on a different host or port, use:

```bash
npm run start:host
```

The application will be accessible at `http://localhost:4200`.

### 4. Running Tests

#### Unit Tests (Jest)

```bash
npm run test
```

To watch the tests:

```bash
npm run test:watch
```

For test coverage report:

```bash
npm run test:coverage
```

For CI testing (no caching):

```bash
npm run test:ci
```

#### E2E Tests (Playwright)

Run Playwright E2E tests:

```bash
npm run e2e
```

Run Playwright tests in debug mode:

```bash
npm run e2e:debug
```

To show the test report:

```bash
npm run e2e:show-report
```

### 5. Linting & Formatting

#### Code Linting (ESLint)

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

#### Style Linting (Stylelint)

```bash
npm run stylelint
```

To fix style issues:

```bash
npm run stylelint:fix
```

#### Code Formatting (Prettier)

```bash
npm run format
```

### 6. Storybook

To start Storybook locally:

```bash
npm run storybook
```

To build the Storybook static files:

```bash
npm run build:storybook
```

### 7. Docker Setup

To build and run the application using Docker, follow these steps:

#### Build the Docker image

```bash
docker build -t angular-starter-project .
```

#### Run the Docker container

```bash
docker run -p 4200:4200 angular-starter-project
```

This will run the application inside a Docker container, and you can access it at `http://localhost:4200`.

#### Docker Compose (Optional)

If you have a `docker-compose.yml` file set up, you can use it to run multiple containers (e.g., with backend services, databases, etc.):

```bash
docker-compose up --build
```

### 🌱 Development Setup

#### Folder Structure

The project follows a clean, scalable folder structure with the following key directories:

```bash
src/
├── app/
│   ├── components/
│   ├── core/
│   ├── features/
│   └── store/
├── assets/
│   ├── images/
│   └── styles/
├── environments/
├── storybook/
└── test/
```

#### NgRx Store

State management is handled via **NgRx**. The app uses actions, reducers, and selectors for managing the application's state. Refer to the `store/` directory for the state management files.

### 🔧 CI/CD with GitHub Workflows

The project comes with GitHub Actions CI workflows set up for continuous integration. Every push to the repository triggers tests, linting, and deployment workflows.

#### Deployments

Deployments to Firebase are automatically triggered on each push to the `main` branch. You can monitor the deployment process through the Firebase Console.

### 🔒 Authentication & Authorization

The app integrates authentication and authorization. You can sign in using popular OAuth providers or use Firebase Authentication for easy integration. User roles and access control are managed using **NgRx Store**.

### 🧰 Useful Resources

- **Angular Documentation:** Angular Docs
- **NgRx Documentation:** NgRx Docs
- **Playwright Documentation:** Playwright Docs
- **Jest Documentation:** Jest Docs
- **Storybook Documentation:** Storybook Docs
- **TailwindCSS Documentation:** TailwindCSS Docs
- **Firebase Documentation:** Firebase Docs
- **Docker Documentation:** Docker Docs

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
