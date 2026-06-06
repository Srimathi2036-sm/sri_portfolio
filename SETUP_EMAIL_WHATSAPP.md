# Email & WhatsApp Setup Guide

## 1. Gmail SMTP Setup (for Email Sending)

Gmail requires an **App Password** instead of your regular password for SMTP:

### Steps:
1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. Search for **App passwords** 
5. Select **Mail** and **Windows Computer** (or your device)
6. Google will generate a 16-character password
7. Copy that password and update `.env`:

```env
SMTP_USER=srissa2006@gmail.com
SMTP_PASS=your_16_character_app_password
```

✅ Email will now work!

---

## 2. WhatsApp via Ultramsg (for WhatsApp Sending)

### Steps:
1. Go to https://ultramsg.com
2. Sign up for a FREE account
3. Get your **Instance ID** and **API Token**
4. Update `.env` with:

```env
ULTRAMSG_TOKEN=your_token_from_ultramsg
ULTRAMSG_INSTANCE=your_instance_id_from_ultramsg
```

✅ WhatsApp will now work!

---

## 3. Test the Form

1. Fill the contact form with:
   - Name: Your Name
   - Email: your.email@gmail.com
   - Message: Test message

2. Click "Send Message"

3. You should receive:
   - Email at srissa2006@gmail.com
   - WhatsApp at 7305587479

---

## Current Configuration:

**Frontend**: http://localhost:3000
**Email Recipient**: srissa2006@gmail.com  
**WhatsApp Recipient**: 7305587479
