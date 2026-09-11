# Russel A. Monroy Portfolio

A modern React + Vite portfolio website for showcasing projects, skills, and contact information.

## Tech Stack

- React
- Vite
- CSS
- EmailJS

## Features

- Modern dark portfolio design
- Responsive layout
- Project showcase section
- Contact form with EmailJS integration
- Social media links
- Downloadable portfolio-style presentation

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview -- --host
```

## Environment Variables

Create a `.env` file in the root directory with the following values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

This project is ready to deploy on Vercel.

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Use the default Vite settings.
4. Add the environment variables above.
5. Deploy.

## Project Structure

```bash
My-Portfolio/
├── public/
│   └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── package-lock.json
```

## Contact

Email: russelmonroy2@gmail.com
