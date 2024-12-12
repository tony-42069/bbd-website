# DHBG Website

A modern, responsive website for DHBG, featuring a dark purple and pink theme that showcases artisanal baked goods with style.

## 🍰 About

This website serves as the digital storefront for DHBG, where 40 years of baking expertise meets modern web design. The site features a custom order system, product gallery, and an elegant user interface that reflects the artisanal nature of Donika's baked goods.

## 🚀 Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Radix UI Components

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/tony-42069/bbd-website.git
cd bbd-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📂 Project Structure

```
bbd-website/
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # Reusable components
│   ├── data/           # Static data and content
│   └── utils/          # Utility functions
├── public/             # Static assets
├── docs/              # Documentation
│   ├── migration/     # Migration guides and plans
│   └── deployment/    # Deployment instructions
└── ...configuration files
```

## 🎨 Features

- Modern, responsive design with dark mode
- Custom order form system
- Product gallery with dynamic loading
- Interactive menu with categories
- Contact form with validation
- Responsive navigation
- Mobile-friendly interface

## 📧 Email & Domain Infrastructure

Current Setup:
- Domain Registration: GoDaddy
- Email Hosting: GoDaddy
- Website Hosting: GoDaddy

Planned Migration:
- Email: Microsoft 365 Business
- Domain: Remains on GoDaddy
- Website Hosting: Vercel (Next.js)

### Migration Plan

1. Email Migration (GoDaddy → Microsoft 365)
   - Purchase Microsoft 365 Business licenses
   - Verify domain ownership
   - Configure DNS records
   - Migrate existing email data
   - Update MX records
   - Document in `/docs/migration/email-migration.md`

2. Website Deployment
   - Set up Vercel deployment
   - Configure domain settings
   - Update DNS records
   - Document in `/docs/migration/website-migration.md`

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```env
# Add any environment variables needed for the project
```

## 👩‍💻 Development

To start development:

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "Description of changes"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

## 🚀 Deployment

The site is configured for deployment on Vercel. Each push to the main branch will trigger a new deployment.

## 📝 License

All rights reserved - Donika's Home Baked Goods © 2024

## 👥 Contributors

- Project Lead: @CREdebtDorian
- UI/UX Design: @CREdebtDorian
- Development: @CREdebtDorian

