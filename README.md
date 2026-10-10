# 💼 Personal Portfolio Website - Anshika P

> **Data Analyst Aspirant | Python • SQL • Power BI • Excel**  
> A modern, responsive, dark-themed personal portfolio website built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**.

---

## 🌟 Live Look & Key Features

- **Sleek Modern Dark Theme**: Deep black canvas with electric purple (`#a855f7`) and cyan blue (`#38bdf8`) ambient glow and glassmorphic cards.
- **Dynamic Typing Animation**: Cycles through roles in the Hero section (*Data Analyst Aspirant*, *Python & SQL Enthusiast*, *Power BI Dashboard Builder*, *Data Storyteller*).
- **Fully Responsive**: Optimized for desktop, laptops, tablets, and smartphones using Bootstrap 5's 12-column grid.
- **Interactive Sections**:
  1. **Navbar**: Frosted glass sticky navigation with mobile hamburger menu that auto-collapses on selection.
  2. **Hero Section**: Personal branding for Anshika P, social media quick links (GitHub, LinkedIn, Instagram), CTA buttons, and avatar with floating KPI cards.
  3. **About Me**: Career objective, academic mindset, and key competency checklist.
  4. **Skills**: Core cards for **Excel**, **Python**, **SQL**, and **Power BI** with animated progress indicators, plus additional tool badges.
  5. **Projects**: Detailed project cards for **RETAIL SALES EDA CLEANING AND VISUALISATION** and **CUSTOMER CHURN & RETENTION ANALYTICS**, complete with tags and GitHub/Live Demo links.
  6. **Education**: Chronological academic timeline highlighting degree, coursework, and certifications.
  7. **Contact**: Form with real-time client-side validation, error handling, success alerts, and integration notes.
  8. **Footer**: Social icons, dynamic copyright year, and a smooth back-to-top floating button.

---

## 📁 Project Structure

```text
portfolio2/
│
├── index.html            # Main semantic HTML5 structure with Bootstrap 5 CDN
├── style.css             # Custom dark mode styles, CSS variables, glassmorphism & glows
├── script.js             # Interactive JavaScript logic (typing, scroll, validation)
├── README.md             # Documentation, running instructions & customization guide
│
└── assets/
    └── images/
        ├── avatar.jpg           # Profile avatar for Hero section
        ├── retail-sales.jpg     # Screenshot / preview for Retail Sales EDA project
        └── churn-analytics.jpg  # Screenshot / preview for Customer Churn Analytics project
```

---

## 🚀 How to Run & Preview the Website

You can preview the website using any of the following simple methods:

### Method 1: Direct Browser Open (Simplest)
1. Navigate to the project folder (`d:\portfolio2`).
2. Double-click `index.html` or right-click `index.html` and choose **Open with** -> **Google Chrome** (or Edge/Brave/Firefox).

### Method 2: Using VS Code / Antigravity IDE "Live Server"
1. Open the project folder in VS Code or Antigravity IDE.
2. If you have the **Live Server** extension installed:
   - Right-click anywhere inside `index.html` and click **"Open with Live Server"**.
   - Or click **"Go Live"** in the bottom status bar.
3. The portfolio will automatically open at `http://127.0.0.1:5500`.

### Method 3: Using Python Built-in Local Server
If you have Python installed, open your terminal / PowerShell in `d:\portfolio2` and run:

```bash
python -m http.server 8000
```
Then open your browser and navigate to:  
👉 **`http://localhost:8000`**

---

## 🛠️ How to Customize for Beginners

### 1. Change Your Name or Role
- Open `index.html` and search for `ANSHIKA P`.
- Update the name in the Navbar, Hero title, and Footer.
- To change the typing titles, open `script.js` and modify the `rolesToType` array:
  ```javascript
  const rolesToType = [
      "DATA ANALYST ASPIRANT",
      "PYTHON & SQL ENTHUSIAST",
      "POWER BI & BI DASHBOARD BUILDER",
      "DATA STORYTELLER & EXPLORER"
  ];
  ```

### 2. Update Social Media Links
In `index.html`, find the `<div class="hero-socials">` and Footer sections:
- Replace `https://github.com/` with your GitHub profile URL.
- Replace `https://linkedin.com/` with your LinkedIn profile URL.
- Replace `https://instagram.com/` with your Instagram handle.
- Replace `anshika.analytics@example.com` with your active email address.

### 3. Replace Profile or Project Images
- Place your photo inside `assets/images/` (e.g., `my-photo.jpg`).
- In `index.html`, update the `src` attribute:
  ```html
  <img src="assets/images/my-photo.jpg" alt="Your Name" class="img-fluid hero-profile-img">
  ```

### 4. Connect the Contact Form to Receive Real Emails
The contact form currently has full interactive client-side validation. To receive messages in your actual email inbox without writing backend code:
- Sign up for a free account at [Formspree.io](https://formspree.io) or [EmailJS](https://www.emailjs.com).
- In `index.html`, change the `<form>` tag to:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
  *(Remember to remove `e.preventDefault()` in `script.js` if using direct form action).*

---

## 🌐 Deploying to the Web (Free)

### Deploy with GitHub Pages:
1. Push this folder to a GitHub repository (e.g., `portfolio`).
2. Go to repository **Settings** -> **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your website will be live in 1-2 minutes at:  
   `https://<your-username>.github.io/<repo-name>/`

---

## 📜 Credits & Libraries
- [Bootstrap 5](https://getbootstrap.com/) for grid, layout, and responsive utilities.
- [Font Awesome](https://fontawesome.com/) for iconography.
- [Google Fonts](https://fonts.google.com/) for *Plus Jakarta Sans* and *Space Grotesk*.

---
*Created with precision for student and fresher portfolio workshops.*
