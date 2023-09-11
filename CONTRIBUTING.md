# Contribution Guide

## 📑 Table of Contents

- 📦 [Prerequisites](#prerequisites)
- 🚀 [Getting started](#getting-started)
- 🛠️ [Available Scripts](#available-scripts)
- 🤝 [Requirements](#requirements)
- 🏗️ [Built with](#built-with)
- 🏷️ [Versioning](#versioning)

<h2 id="prerequisites">📦 Prerequisites</h2>

Make sure you have the following tools installed before setting up the project:

- [Git](https://git-scm.com/): Distributed version control system
- [Node.js](https://nodejs.org/): Runtime environment for JavaScript
- [pnpm](https://pnpm.io/): Package Manager for Node.js projects

### Recommendation

> For easier Node.js management, consider using [nvm](https://github.com/nvm-sh/nvm), which allows you to quickly obtain and use different versions of Node.js via the command line.

<h2 id="getting-started">🚀 Getting started</h2>

Follow these steps to set up the project:

### 1. Clone the repository locally

```bash
git clone git@github.com:codingones/conference-website.git
```

### 2. Install project dependencies

```bash
cd conference-website
pnpm install
```

After completing these steps, you're ready to start working on the project. Happy coding! 🎉

<h2 id="available-scripts">🛠️ Available Scripts</h2>

These commands are essential for application development:

### `pnpm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches [Vitest](https://vitest.dev/) test runner.

Tests will automatically rerun if you make edits.

### `pnpm build`

Builds the app for production in the `build` folder.\
It optimizes the build, correctly bundling React in production mode.

The build is minified, and the filenames include hashes.\
Your app is ready for deployment!

### `pnpm lint.es`

Performs static analysis of the project's source in the `src/` folder.

### `pnpm lint.style`

Performs static analysis of the project's style sheets in the `src/` folder.

### `pnpm lint.commit`

Checks the syntax of all commits made since the last common commit with the `main` branch.

### `pnpm prettier`

Fixes the syntax of all project files.

### `pnpm lint.staged`

Runs all static analysis on files staged with git.

<h2 id="requirements">🤝 Requirements</h2>

### Branches

- **Keep Branches Up-to-Date**: Branches should be kept up-to-date with the main branch using a rebased, linear history
- **Use Conventional Prefixes**: When creating new branches, ensure they are prefixed with one of the following categories: `build/`, `chore/`, `ci/`, `docs/`, `feat/`, `fix/`, `perf/`, `refactor/`, `revert/`, `style/` or `test/`, depending on the nature of the changes. Refer to the [Conventional Commits cheat sheet](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index) to learn more about these categories

### Commits

- **Follow Conventional Commits**: Commit messages must adhere to the [Conventional Commits](https://www.conventionalcommits.org/fr) specification. Please follow these guidelines for writing valid commit messages
- **Signed Commits**: Ensure that commits are signed using a GPG key. Refer to [About commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) for more information on setting it up

### Feature branch workflow

1. **Create Your Feature Branch**: Use `git checkout -b feat/amazing-feature` to create a new branch for your changes
2. **Commit Your Changes**: Make your changes and commit them with a descriptive message. For example, `git commit -m "feat: add some amazing feature"`
3. **Push to the Branch**: Push your feature branch to the remote repository with `git push origin feat/amazing-feature`
4. **Open a Pull Request**: Once your changes are pushed, open a Pull Request against the main branch. Provide details about the changes and request a review from collaborators.

<h2 id="built-with">🏗️ Built with</h2>

### Langages & Frameworks

- [TypeScript](https://www.typescriptlang.org/): the main programming language used here, it is an open-source language that builds on JavaScript by adding static typing
- [React](https://react.dev/): a declarative and efficient JavaScript library for building interactive user interfaces
- [Next.js](https://nextjs.org/): a React Framework for building full-stack web applications.

### Tools

- [Vitest](https://vitest.dev/): blazing-fast Unit Test Framework
- [Eslint](https://eslint.org/): static code analyzer for JavaScript and TypeScript
- [StyleLint](https://stylelint.io/): static style sheet analyzer
- [Prettier](https://prettier.io/): code formatter for various languages and syntaxes
- [Husky](https://typicode.github.io/husky/#/): performs automatic checks before publishing contributions with git
- [Commitlint](https://github.com/conventional-changelog/commitlint): ensures commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
- [Lint-staged](https://github.com/okonet/lint-staged): applies all linters against staged git files

### Continuous Integration

- [GitHub Actions](https://docs.github.com/en/actions): GitHub's built-in integration and continuous deployment tool
  - Workflow runs are available [under Actions tab](https://github.com/codingones/conference-website/actions)
- Variables for `github-pages` environment:
  - `NEXT_PUBLIC_BASE_PATH`: `/conference-website`, used in `NextConfig` at build time to define app `basePath` configuration
  - `NEXT_PUBLIC_ASSET_PREFIX`: `/conference-website`, used in `NextConfig` at build time to define app `assetPrefix` configuration
- Workflows:
  - [Validate feature branch](./.github/workflows/validate-feature-branch.yml): Runs on every branch starting with a conventional prefix. It checks code quality before merging into the `main` branch
  - [Publish on GitHub Pages](./.github/workflows/publish-on-github-pages.yml): Runs on every merge into the `main` branch. It builds and publishes a static website to GitHub Pages
    - Uses `github-pages` environment, created automatically by setting up the `GitHub Action` source from the `Build and deployment` section in `Settings/Pages`

### Continuous Deployment

- [GitHub Pages](https://pages.github.com/): GitHub's static website hosting service

<h2 id="versioning">🏷️ Versioning</h2>

This project follows [Semantic Versioning 2.0.0](https://semver.org/) specification for version naming, ensuring a clear release cycle and promoting backward compatibility.
