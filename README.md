# 🚀 Portfolio Website

This is my personal portfolio website built using modern web technologies to showcase my projects, skills, achievements, and experience.

---

# 🌟 Features

* Modern and responsive UI
* Smooth animations and interactive components
* Full-stack integration
* Contact form with email functionality
* Showcases projects, skills, achievements, and resume
* Mobile-friendly design

---

# 💻 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB

---

# 🛠️ Setup Instructions

Follow the steps below to run the project locally.

---

# 1️⃣ Clone the Repository

```bash id="7i0s2k"
git clone https://github.com/Srimathi2036-sm/_srimathi_portfolio.git
```

---

# 2️⃣ Install Dependencies

Install all required packages in both frontend and backend folders.

```bash id="vq8l2f"
npm install
```

Run this command inside both:

* frontend folder
* backend folder

---

# 3️⃣ Configure Environment Variables

Create a `.env` file inside the backend folder and add the required environment variables.

Example:

```env id="v5d0nc"
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

MONGODB_URI=mongodb://127.0.0.1:27017/portfolioDB

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com
```

---

# 4️⃣ Run Backend Server

Navigate to the backend folder and start the server:

```bash id="q3l7re"
cd backend
node server.js
```

✔ This will:

* Start the backend server
* Connect to MongoDB database
* Enable contact form email functionality

---

# 5️⃣ Run Frontend

Navigate to the frontend folder and run:

```bash id="c8m1sx"
npm run dev
```

✔ This will:

* Start the frontend development server
* Launch the portfolio website in your browser

---

# 📬 Contact Form

The portfolio includes a contact form feature.

Users can:

* Enter their name
* Enter their email
* Send messages directly through the portfolio

✔ Messages will be:

* Stored using backend integration
* Sent to your email using SMTP configuration

---

# 📌 Important Notes

* Make sure MongoDB is properly configured before running the backend.
* Never upload your `.env` file to GitHub.
* Add `.env` inside `.gitignore` for security purposes.
* Use Gmail App Password instead of your normal Gmail password.

---

# 📂 Project Structure

```plaintext id="ev8w9n"
portfolio-website/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⭐ Support

If you like this project, feel free to give it a star on GitHub!

---

# 📬 Contact

Feel free to connect with me through my portfolio website.
