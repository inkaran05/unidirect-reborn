# UniDirect - A Modern College Finder Platform

UniDirect is a fully responsive, frontend web application designed to simplify the college admission process for students in India. Inspired by leading portals like CollegeDunia and UpGrad, this project provides a clean, intuitive interface for students to find, compare, and get information about colleges based on their budget, academic stream, and location.

This project was built as part of a 15-day focused development sprint.

**Live Test URL (via GitHub Pages):** [https://inkaran05.github.io/unidirect-reborn/](https://inkaran05.github.io/unidirect-reborn/)

![Screenshot of the UniDirect Homepage](https://placehold.co/800x400/e2e8f0/4a5568?text=UniDirect+Homepage+Screenshot)

---

## Features

- **Dynamic Search & Filtering:** Users can search for colleges and filter results in real-time by annual fee budget, location, and academic stream.
- **Multi-Page Navigation:** Built as a single-page application (SPA) with `react-router-dom` to handle navigation between pages like Home, Search, College Details, and International Admissions.
- **Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
- **Component-Based Architecture:** Built with reusable React components for a clean and maintainable codebase.
- **Mock Data for Frontend Development:** The application is fully functional using a local mock data set, allowing for rapid frontend development before backend integration.
- **Simulated User State:** Uses React Context to manage a simulated user login state, demonstrating how the UI will adapt for authenticated users.

---

## Tech Stack

- **Frontend:** React (with Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Version Control:** Git & GitHub
- **Deployment (Testing):** GitHub Pages

---

## How to Run This Project Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/inkaran05/unidirect-reborn.git](https://github.com/inkaran05/unidirect-reborn.git)
    ```
2.  **Navigate into the project directory:**
    ```sh
    cd unidirect-reborn
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Start the development server:**
    ```sh
    npm run dev
    ```
Your project will be running at `http://localhost:5173/`.

---

## Project Status

This project represents the completed frontend MVP. The next phase will involve integrating a full backend with Firebase for live data, real user authentication, and an admin dashboard.
