# Ashutosh Kasaudhan - Portfolio

A clean, responsive React portfolio website.

## 🚀 Getting Started

```bash
npm install
npm start
```

## 📦 Deploy to Vercel (Free)

### Option 1 – Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 – GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com → New Project → Import your repo
3. Framework: **Create React App** (auto-detected)
4. Click Deploy → Done! 🎉

## 📸 Adding Your Photo

In `src/components/Hero.jsx`, replace the `<img src="...">` with your actual photo:
```jsx
<img src="/your-photo.jpg" alt="Ashutosh Kasaudhan" style={{...}} />
```
Place your photo in the `/public/` folder.

## 📬 Setting Up Contact Form

To make the contact form actually send emails, integrate one of:
- **Formspree** (free): https://formspree.io
- **EmailJS** (free tier): https://www.emailjs.com

In `src/components/Contact.jsx`, replace the `setTimeout` mock with your service call.

## 🛠 Tech Stack
- React 18
- Lucide React (icons)
- Pure CSS (no external UI library)
- Vercel (hosting)
