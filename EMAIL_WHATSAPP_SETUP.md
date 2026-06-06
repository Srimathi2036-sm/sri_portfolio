# ✅ Contact Form Setup Complete

## What's Been Configured:

### 1. **Frontend Contact Form** (components/contact.tsx)
   - ✅ Name field
   - ✅ Email field  
   - ✅ Message field
   - ✅ Sends to: `/api/contact`

### 2. **Frontend API Route** (app/api/contact/route.ts)
   - ✅ Receives: name, email, message
   - ✅ Sends via SMTP (Gmail)
   - ✅ Sends via WhatsApp (Ultramsg)
   - ✅ Saves to MongoDB

### 3. **Backend Route** (backend/routes/contactRoutes.js)
   - ✅ Accepts: name, email, message
   - ✅ Email recipient: srissa2006@gmail.com
   - ✅ WhatsApp recipient: 7305587479

### 4. **Database Schema** (lib/contactModel.ts)
   - ✅ Stores: name, email, message
   - ✅ Auto timestamp: createdAt

---

## 🔧 To Enable Email Sending:

Gmail requires an **App Password** (not your regular password):

1. Go to: https://myaccount.google.com
2. Click **Security** in left menu
3. Enable **2-Step Verification** if needed
4. Search for **"App passwords"**
5. Select **Mail** and **Windows Computer**
6. Copy the 16-character password generated
7. Update `.env`:

```env
SMTP_USER=srissa2006@gmail.com
SMTP_PASS=your_16_character_app_password_here
```

---

## 📱 To Enable WhatsApp Sending:

1. Go to: https://ultramsg.com
2. Sign up FREE
3. Get your **Instance ID** and **API Token**
4. Update `.env`:

```env
ULTRAMSG_TOKEN=your_token_from_ultramsg
ULTRAMSG_INSTANCE=your_instance_id
```

---

## 📋 Complete .env File:

```env
# Existing
EMAIL_USER=srissa2006@gmail.com
EMAIL_PASS=Srimathi@2006@#
MONGODB_URI=mongodb://127.0.0.1:27017/portfolioDB

# SMTP (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=srissa2006@gmail.com
SMTP_PASS=your_app_password_here
SMTP_FROM=srissa2006@gmail.com

# WhatsApp (Ultramsg)
ULTRAMSG_TOKEN=your_ultramsg_token_here
ULTRAMSG_INSTANCE=your_ultramsg_instance_here
```

---

## 🚀 Running the Project:

```bash
cd "e:\portfolio-website (2) - Copy"
npm run dev
```

Then visit: **http://localhost:3000**

---

## ✅ Form Submission Flow:

1. User fills: Name, Email, Message
2. Clicks: "Send Message"
3. Sent to: `/api/contact` (POST)
4. Backend:
   - ✅ Sends Email to srissa2006@gmail.com
   - ✅ Sends WhatsApp to 7305587479
   - ✅ Saves to MongoDB
5. User sees: Success notification

---

## 📞 Current Recipients:

- **Email**: srissa2006@gmail.com
- **WhatsApp**: 7305587479
- **From Field**: srissa2006@gmail.com

---

## 🔍 Troubleshooting:

**Email not sending?**
- Check SMTP credentials in .env
- Make sure 2-Step Verification is ON in Google Account
- Use App Password, not regular password

**WhatsApp not sending?**
- Verify Ultramsg credentials
- Check if account is activated
- Ensure number format is correct

**MongoDB Connection Error?**
- Make sure MongoDB is running: `mongod`
- Check MONGODB_URI in .env

---

All files are configured and ready! 🎉
