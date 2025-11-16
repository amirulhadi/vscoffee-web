# Environment Variables Setup Guide

## 🔒 Securing EmailJS Credentials

This guide explains how to securely store your EmailJS credentials using environment variables.

## 📝 Step 1: Create .env File

Create a `.env` file in the root directory of your project with the following content:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=service_9r0l5dj
REACT_APP_EMAILJS_TEMPLATE_ID=template_j93jkjr
REACT_APP_EMAILJS_PUBLIC_KEY=ye1v1rtewaJot0nTO
```

**Important Notes:**
- The `.env` file is already in `.gitignore` and will NOT be committed to version control
- All React environment variables MUST start with `REACT_APP_` to be accessible in the browser
- Never commit your `.env` file to Git

## 🚀 Step 2: Restart Development Server

After creating the `.env` file, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm start
```

## 🌐 Step 3: Deployment Setup

### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `REACT_APP_EMAILJS_SERVICE_ID` = `service_9r0l5dj`
   - `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_j93jkjr`
   - `REACT_APP_EMAILJS_PUBLIC_KEY` = `ye1v1rtewaJot0nTO`
4. Redeploy your application

### For Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Add each variable:
   - `REACT_APP_EMAILJS_SERVICE_ID` = `service_9r0l5dj`
   - `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_j93jkjr`
   - `REACT_APP_EMAILJS_PUBLIC_KEY` = `ye1v1rtewaJot0nTO`
3. Trigger a new deploy

### For GitHub Pages / Other Platforms:
Set environment variables in your CI/CD pipeline or hosting platform's environment variable settings.

## ✅ Verification

To verify your environment variables are working:

1. Check the browser console - there should be no errors
2. Test the contact form - it should send emails successfully
3. In development, you can temporarily add:
   ```javascript
   console.log('EmailJS Config:', {
     service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
     template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
     key: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ? 'Set' : 'Missing'
   });
   ```

## 🔐 Security Best Practices

1. ✅ **DO**: Use environment variables for sensitive data
2. ✅ **DO**: Keep `.env` in `.gitignore`
3. ✅ **DO**: Use different credentials for development and production
4. ❌ **DON'T**: Commit `.env` files to version control
5. ❌ **DON'T**: Share your `.env` file publicly
6. ❌ **DON'T**: Hardcode credentials in your source code

## 📋 Quick Reference

Your current EmailJS credentials:
- **Service ID**: `service_9r0l5dj`
- **Template ID**: `template_j93jkjr`
- **Public Key**: `ye1v1rtewaJot0nTO`

