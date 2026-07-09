# TaskFlow

TaskFlow is a task management web application built with React and Vite. It provides a clean, fast interface for organizing and tracking tasks, with user authentication support.

## Live Demo

🔗 [https://taskflow-a7w.pages.dev/](https://taskflow-a7w.pages.dev/)

## Features

- User authentication (Login/Signup)
- Task creation, tracking, and management
- Context-based global state management (User Context)
- Responsive UI
- Fast build and dev experience powered by Vite

## Tech Stack

- **Frontend:** React (JSX)
- **Build Tool:** Vite
- **Styling:** CSS
- **State Management:** React Context API
- **Linting:** Oxlint
- **Deployment:** Cloudflare Pages

## Project Structure

```
TaskFlow/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── Home.css
│   │   └── Login.css
│   ├── components/
│   │   ├── Home.jsx
│   │   └── Login.jsx
│   ├── context/
│   │   └── UserContext.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .oxlintrc.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Inayat-dev/TaskFlow.git
   cd TaskFlow
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.



## Author

**Inayat**
GitHub: [@Inayat-dev](https://github.com/Inayat-dev)

---

© 2026 TaskFlow. All rights reserved.
