# Shayan Delbari's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, and projects. The website is built using modern web technologies including [Svelte](https://svelte.dev/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Responsive Design**: The website is fully responsive and works on all devices.
- **Dark Mode**: Toggle between light and dark themes.
- **Smooth Scrolling**: Smooth scrolling for navigation links.
- **Interactive Elements**: Pop-ups for project details and more.
- **Dynamic Content**: Content is dynamically loaded and displayed.

## Technologies Used

- **Svelte**: A modern JavaScript framework for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool for modern web projects.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: A code formatter to ensure consistent code style.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shayandelbari/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Build the project**:

   ```bash
   npm run build
   ```

5. **Preview the build**:

   ```bash
   npm run preview
   ```

## Usage

After running the development server, you can access the website at `http://localhost:5173`. The website includes the following sections:

- **Hero**: Introduction and welcome message.
- **About**: Information about me.
- **Experience**: My professional experience.
- **Skills**: A list of my skills categorized by type.
- **Projects**: A showcase of my projects with pop-up details.
- **Contact**: Contact information and links to my social profiles.

## Project Structure

The project structure is organized as follows:

```plaintext
my-portfolio/
├── .svelte-kit/
├── node_modules/
├── public/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   ├── data/
│   │   ├── icons/
│   │   └── styles/
│   ├── routes/
│   │   ├── sections/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── Menu.svelte
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   └── main.ts
├── static/
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── postcss.config.js
├── README.md
├── svelte.config.js
├── tsconfig.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.
