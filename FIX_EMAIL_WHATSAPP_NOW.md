# 🔧 Fix Email & WhatsApp - Step by Step Guide

## ❌ Current Issues:

### Email Error: "Username and Password not accepted"
- Your regular Gmail password doesn't work with SMTP
- Gmail requires an **App Password** (16 characters)

### WhatsApp Error: 404  
- Your credentials are still placeholder values
- Need real Ultramsg Token and Instance ID

---

## ✅ Fix #1: Get Gmail App Password

### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com
2. Click **Security** (left sidebar)
3. Click **2-Step Verification** 
4. Follow prompts to enable it

### Step 2: Generate App Password
1. Go back to: https://myaccount.google.com/security
2. Search for **"App passwords"** (appears after 2-Step is enabled)
3. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
4. Click **Generate**
5. **COPY** the 16-character password shown

### Step 3: Update .env file

Replace this:
```env
SMTP_PASS=Srimathi@2006@#
```

With this (paste your 16-character password):
```env
SMTP_PASS=xxxx xxxx xxxx xxxx
```

✅ Email will now work!

---

## ✅ Fix #2: Get WhatsApp Ultramsg Credentials

### Step 1: Sign Up at Ultramsg
1. Go to: https://ultramsg.com
2. Click **Sign Up** → Choose FREE plan
3. Create account
4. Verify email

### Step 2: Get Credentials
1. Log in to Ultramsg dashboard
2. In the left menu, find **Instance ID** and **API Token**
3. Copy both

### Step 3: Update .env file

Replace these:
```env
ULTRAMSG_TOKEN=your_ultramsg_token_here
ULTRAMSG_INSTANCE=your_ultramsg_instance_here
```

With your actual credentials:
```env
ULTRAMSG_TOKEN=your_actual_token_from_ultramsg
ULTRAMSG_INSTANCE=your_actual_instance_id
```

✅ WhatsApp will now work!

---

## Final .env File Should Look Like:

```env
EMAIL_USER=srissa2006@gmail.com
EMAIL_PASS=Srimathi@2006@#
MONGODB_URI=mongodb://127.0.0.1:27017/portfolioDB

# SMTP Configuration for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=srissa2006@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx          # ← YOUR 16-CHAR APP PASSWORD
SMTP_FROM=srissa2006@gmail.com

# WhatsApp Configuration
ULTRAMSG_TOKEN=your_actual_token       # ← FROM ULTRAMSG DASHBOARD
ULTRAMSG_INSTANCE=your_actual_instance # ← FROM ULTRAMSG DASHBOARD
```

---

## After Updating .env:

1. **Restart the dev server** (Ctrl+C, then `npm run dev`)
2. **Reload the page** at http://localhost:3000
3. **Test the form** with:
   - Name: Your Name
   - Email: test@example.com
   - Message: Test message

✅ Email to: **srissa2006@gmail.com**  
✅ WhatsApp to: **7305587479**

---

## Need Help?

- **Gmail 2-Step not showing?** - Wait 24 hours after enabling it
- **App password not showing?** - Make sure 2-Step Verification is fully enabled
- **Ultramsg 404 error?** - Double-check your token and instance ID have no extra spaces
- **Email still failing?** - Make sure you're using the 16-character APP PASSWORD, not your regular password
