# Block 1 - Premium Dorm Website

A modern, responsive website for Block 1 dormitory featuring contact form integration with Supabase database.

## Features

- 🏠 Modern dormitory showcase website
- 📱 Responsive design with mobile-first approach
- 🎨 Dark theme with gradient accents
- 📧 Contact form with database integration
- 📊 Admin dashboard for managing submissions
- 🔒 Secure data handling with Supabase

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup (Supabase)

1. **Create a Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Create a new account and project

2. **Get Your Credentials**
   - Go to Project Settings → API
   - Copy your Project URL and anon public key

3. **Set Environment Variables**
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Create Database Table**
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Copy and run the SQL from `supabase/migrations/create_contact_submissions.sql`

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Access the Website
- Main website: `http://localhost:5173`
- Admin dashboard: Navigate to "Admin Dashboard" in the sidebar

## How Contact Form Works

1. **User Submission**: Users fill out the contact form on the website
2. **Database Storage**: Form data is securely stored in Supabase
3. **Admin Access**: View all submissions in the Admin Dashboard
4. **Email Integration**: Click "Reply" to respond via email
5. **Export Data**: Download submissions as CSV for record-keeping

## Admin Dashboard Features

- View all contact form submissions
- Real-time data updates
- Export submissions to CSV
- Direct email reply links
- Responsive design for mobile access

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Support

For questions about the website or technical issues, use the contact form or check the admin dashboard for submitted inquiries.