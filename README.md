# Website + CMS Source Code

This folder contains **all the source code files** you need to deploy your website.

## Folder Structure

```
website-cms-source/
├── app/
│   ├── layout.js (main layout)
│   ├── page.js (homepage)
│   ├── globals.css (all styling)
│   ├── blog/
│   │   ├── page.js (blog list)
│   │   └── [slug]/page.js (blog post detail)
│   ├── services/
│   │   ├── development/page.js
│   │   ├── marketing/page.js
│   │   └── consulting/page.js
│   └── api/
│       ├── posts/route.js (blog API)
│       ├── leads/route.js (form submissions)
│       └── upload/route.js (image upload)
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── ServiceCard.js
│   ├── BlogCard.js
│   └── LeadForm.js
├── lib/
│   ├── supabase.js (database setup)
│   └── auth.js (authentication)
├── package.json (dependencies)
├── next.config.js (Next.js config)
├── .env.local (your secrets)
├── .gitignore (files to ignore)
└── README.md (this file)
```

## How to Use These Files

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name it: `website-cms`
3. Choose "Private"
4. Create

### Step 2: Upload All These Files to GitHub

**Option A: Use GitHub Web Upload**
1. Click "Add file" → "Upload files"
2. Select all files from this folder
3. Commit

**Option B: Use Git Command**
```bash
git clone https://github.com/YOUR-USERNAME/website-cms.git
cd website-cms
# Copy all files from this folder here
git add .
git commit -m "Initial commit"
git push
```

### Step 3: Update .env.local

In the `.env.local` file, replace:
- `paste_your_anon_key_here` with your Anon Key from Supabase
- `paste_your_service_role_key_here` with your Service Role Key
- Update `NEXT_PUBLIC_SITE_NAME` and other values

### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Add environment variables (from .env.local)
5. Deploy

## What Each File Does

| File | Purpose |
|------|---------|
| `app/page.js` | Homepage (services + blog preview) |
| `app/blog/page.js` | Blog listing page |
| `app/blog/[slug]/page.js` | Individual blog posts |
| `app/services/*.js` | Development, Marketing, Consulting pages |
| `app/api/posts/route.js` | Blog API endpoints |
| `app/api/leads/route.js` | Lead form submissions |
| `app/api/upload/route.js` | Image upload |
| `components/*.js` | Reusable UI components |
| `lib/supabase.js` | Database connection |
| `app/globals.css` | All styling |

## That's It!

Once deployed on Vercel, your site will be live at `yourdomain.com`.

To publish blog posts:
1. Create new blog posts in Supabase
2. They automatically appear on your site

To capture leads:
1. Users fill out the form
2. Leads are saved to Supabase
3. You see them in Google Analytics + Supabase

## Support

- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
