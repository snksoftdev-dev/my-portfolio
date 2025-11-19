# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Instructions to Deploy Your Portfolio

### 1️⃣ Create GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Click "Sign up"
- Follow the registration process

### 2️⃣ Create a New Repository on GitHub

1. **Go to GitHub** and click the "+" icon in the top right
2. **Click "New repository"**
3. **Repository Settings:**
   - **Repository name:** `my-portfolio` (or any name you prefer)
   - **Description:** "My professional portfolio website"
   - **Visibility:** Public ✅
   - **DO NOT** initialize with README (we already have one)
4. **Click "Create repository"**

### 3️⃣ Connect Your Local Project to GitHub

Open your terminal and run these commands:

```bash
# Configure your Git identity for THIS PROJECT ONLY (not global)
git config user.name "Siliveru Nirmal Kumar"
git config user.email "snksoftdev@gmail.com"

# Add the remote repository
git remote add origin https://github.com/snksoftdev-dev/my-portfolio.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 4️⃣ Deploy to GitHub Pages

Simply run this command:

```bash
npm run deploy
```

This command will:
- Build your production-ready app
- Create a `gh-pages` branch
- Deploy your site to GitHub Pages

### 5️⃣ Enable GitHub Pages (if not automatic)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click **Save**

### 6️⃣ Access Your Live Website

Your portfolio will be live at:
```
https://snksoftdev-dev.github.io/my-portfolio/
```

⏰ **Note:** It may take 1-2 minutes for the site to be available.

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Stage your changes
git add .

# Commit your changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Deploy updates
npm run deploy
```

---

## 🎯 Custom Domain (Optional)

If you want to use a custom domain like `nirmalkumar.dev`:

1. Buy a domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
2. In your repository, create a file named `CNAME` in the `public` folder
3. Add your domain name in the file (e.g., `nirmalkumar.dev`)
4. Configure DNS settings in your domain provider
5. Redeploy: `npm run deploy`

---

## ⚡ Alternative: Quick Deploy with Vercel (Even Easier!)

If GitHub Pages seems complex, try Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site will be live at `your-name.vercel.app`

---

## 📧 Need Help?

If you encounter any issues:
1. Check the repository settings
2. Make sure the `gh-pages` branch exists
3. Verify GitHub Pages is enabled
4. Wait a few minutes and refresh

---

## ✅ Checklist

- [ ] Git initialized
- [ ] Code committed
- [ ] GitHub repository created
- [ ] Remote added
- [ ] Code pushed to GitHub
- [ ] `npm run deploy` executed successfully
- [ ] GitHub Pages enabled
- [ ] Site is live!

---

**Your portfolio is ready to share with companies! 🎉**
