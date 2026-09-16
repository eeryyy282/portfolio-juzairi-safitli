# Personal Portfolio | Muhammad Juzairi Safitli

This repository contains the source code for my personal portfolio website. This project was developed to document my career journey, software development projects (especially mobile development and AI integration), and my academic background.

## Tech Stack

* **Core:** React 18, Vite, TypeScript
* **Styling:** Tailwind CSS, shadcn/ui based components
* **Icons:** Lucide React
* **State & i18n:** react-i18next
* **Deployment:** GitHub Pages via GitHub Actions

## Key Technical Features

* **Bilingual Support (EN/ID):** Language switching is implemented using `react-i18next`, complete with state persistence using `localStorage`.
* **Theme Toggling:** Supports Dark and Light modes with automatic OS system preference detection and Flash of Unstyled Content (FOUC) prevention.
* **Modular Architecture:** The interface is built using modular and reusable components from the `shadcn/ui` standard to ensure accessibility and design consistency.
* **Automated CI/CD:** Integrated with GitHub Actions workflows (`.github/workflows/deploy.yml`) to perform automatic build and deployment to the `gh-pages` branch upon every update.

## Local Development

Make sure Node.js (v18 or newer) is installed on your system.

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/username/portfolio-juzairi-safitli.git
   cd portfolio-juzairi-safitli
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The application will run locally, usually at the URL `http://localhost:5173`.

4. To create a production build:
   ```bash
   npm run build
   npm run preview
   ```

## Main Project Structure

The directory structure is organized to separate main layout components, basic UI elements, and language configurations:

```text
portfolio-juzairi-safitli/
├── .github/workflows/     # CI/CD configurations
├── public/assets/         # Static files (CV, profile picture, favicon)
├── src/
│   ├── components/
│   │   ├── sections/      # Main page sections (Hero, About, Projects, etc.)
│   │   ├── ui/            # Basic interface components (Button, Card, Badge, etc.)
│   │   └── ...
│   ├── i18n/              # Translation data (EN & ID) and i18next configurations
│   ├── lib/               # Utility functions
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## License

Copyright (c) 2026 Muhammad Juzairi Safitli.