# File Easy Accountancy

A modern Next.js website for File Easy Accountancy - Professional UK accountancy services.

## Features

- 🔧 **Next.js 15** with App Router
- 🎨 **TypeScript** for type safety
- 🎯 **Tailwind CSS** for styling
- 📱 **Responsive design** mobile-first approach
- 🎭 **shadcn/ui** components
- 📧 **Contact forms** with validation
- 🔍 **SEO optimised** with structured data
- 📊 **Analytics ready** with Vercel Analytics
- 🏢 **Schema markup** for LocalBusiness
- 🎪 **Accessible** components
- 🔗 **GoHighLevel CRM Integration** for lead capture and onboarding
- 🔄 **Resume Functionality** - Users can resume quotes using Surname + Unique ID
- 💳 **Stripe Deposit Payment** - £100 deposit integration for Monthly flow

## Pages

- **Homepage** (`/`) - Hero, services overview, process, FAQs
- **Services** (`/services`) - Service listings and individual service pages
  - Bookkeeping (`/services/bookkeeping`)
  - Tax Returns (`/services/tax-returns`)
- **Contact** (`/contact`) - Contact information and enquiry form
- **Quote/Onboarding** (`/quote`) - Multi-step onboarding flow with GHL integration
- **Resume** (`/resume`) - Resume quote using Surname + Unique ID
- **Privacy** (`/privacy`) - GDPR compliant privacy policy
- **Sitemap** (`/sitemap.xml`) - XML sitemap for search engines
- **Robots** (`/robots.txt`) - Search engine crawling instructions

## Components

### Layout
- **Header** - Navigation with mobile menu
- **Footer** - Site links and contact information
- **MobileNav** - Responsive mobile navigation

### UI Components
- **Hero** - Flexible hero sections
- **ServiceCard** - Service presentation cards
- **ProcessSteps** - Step-by-step process display
- **FAQAccordion** - Expandable FAQ sections
- **ContactStrip** - Call-to-action contact bar
- **TrustBar** - Software/partner logos
- **PricingTable** - Service pricing display
- **LeadForm** - Contact/enquiry forms
- **CTASticky** - Sticky call-to-action
- **Badge** - Flexible badge component

### Schema Helpers
- **LocalBusinessSchema** - Structured data for local business
- **FAQPageSchema** - FAQ structured data
- **ServiceSchema** - Service structured data

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Configuration

### Email Handler
The contact form API endpoint (`/api/contact`) is configured with placeholders for:
- **Resend** (recommended) - Uncomment and add API key
- **Formspree** - Alternative email service

### Analytics
Vercel Analytics is included. Other analytics can be added to `layout.tsx`.

### SEO
- Metadata configured in `layout.tsx`
- Structured data using Schema.org
- UK English localisation (`en-GB`)
- OpenGraph and Twitter cards

## Environment Variables

Create `.env.local` for:
```bash
# GoHighLevel (Required)
GHL_API_KEY=your_ghl_api_key_here
GHL_LOCATION_ID=your_location_id_here

# Stripe (Required for deposit payments)
STRIPE_SECRET_KEY=sk_test_...  # or sk_live_... for production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...  # or pk_live_... for production
STRIPE_WEBHOOK_SECRET=whsec_...

# App (Required)
APP_BASE_URL=https://fileeasyaccountancy.co.uk  # or http://localhost:3000 for local

# Email (Optional)
RESEND_API_KEY=your_resend_api_key_here
# or
FORMSPREE_ID=your_formspree_id_here

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_ga_tracking_id
NEXT_PUBLIC_FB_PIXEL_ID=your_fb_pixel_id
```

See `DEVELOPER_HANDOFF.md` for detailed setup instructions.

## How to Configure GHL (GoHighLevel)

The onboarding flow integrates with GoHighLevel CRM to capture leads and track progress. Follow these steps to configure:

### 1. Get Your GHL Credentials

1. **API Key:**
   - Go to GHL Dashboard → Settings → Integrations → API Keys
   - Create a new API key or copy an existing one
   - Copy the API key value

2. **Location ID:**
   - Go to GHL Dashboard → Settings → Locations
   - Select your File Easy location
   - Copy the Location ID from the URL or settings page

### 2. Set Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Required for GHL integration
GHL_API_KEY=your_ghl_api_key_here
GHL_LOCATION_ID=your_location_id_here

# Optional - Analytics
NEXT_PUBLIC_GA_ID=your_ga_tracking_id
NEXT_PUBLIC_FB_PIXEL_ID=your_fb_pixel_id
```

### 3. Configure Custom Fields in GHL

The onboarding flow maps form answers to GHL custom fields. You need to:

1. **Create Custom Fields in GHL:**
   - Go to GHL Dashboard → Settings → Custom Fields
   - Create the following custom fields (or use existing ones):
     - Engagement Type (Monthly/One-Off)
     - Business Type
     - Turnover Band
     - Team Structure
     - Current Support
     - Urgency
     - Priorities
     - Budget Comfort
     - Recommended Package
     - Selected Package
     - Payment Preference
     - Company Name
     - Trading Name
     - Company Number
     - Business Address
     - Website URL
     - User Role
     - Has Other Directors
     - All UK Residents
     - AML Consent
     - One-Off Job Type
     - One-Off Urgency
     - One-Off Budget
     - Preferred Contact Method
     - Status Field

2. **Map Field IDs:**
   - Open `config/ghlCustomFields.ts`
   - Replace each `cf_PLACEHOLDER_*` value with your actual GHL custom field ID
   - Field IDs usually start with `cf_` followed by alphanumeric characters

### 4. Verify Integration

1. Start the development server: `npm run dev`
2. Navigate to `/quote` and complete the onboarding flow
3. Check GHL Dashboard → Contacts to verify:
   - Contact is created/updated
   - Tags are applied correctly
   - Custom fields are populated

### 5. GHL Tags Used

The integration applies these tags automatically:
- `Lead – Started Quote` - When Step 1 is completed
- `Engagement Type – Monthly` - For monthly support flow
- `Engagement Type – One-Off` - For one-off job flow
- `Monthly – Prequal Complete` - After pre-qualification questions
- `Recommended – [Package]` - When package is recommended
- `Selected Package – [Package]` - When user selects a package
- `Onboarding – Details Complete` - After onboarding details submitted
- `Ready to Onboard` - When user chooses "Set Me Up"
- `Needs Call` - When user chooses "Book a Welcome Call"
- `One-Off – Scoping Complete` - After one-off scoping questions
- `One-Off – Callback Requested` - When callback is requested
- `UID Issued` - When Unique ID is generated
- `UID Email – Send` - Trigger UID email automation
- `UID Reminder – Send` - Trigger UID reminder email
- `UID Reset Code – Send` - Trigger reset code email
- `UID Reset – Done` - When UID reset is complete
- `Deposit Paid` - When £100 deposit payment is completed

## Resume & Deposit Features

### Resume Functionality

Users can resume their quote progress using their Surname + Unique ID:

1. **Unique ID Generation:**
   - Generated automatically after Step 1
   - 10-character base32 format (e.g., `F3K8-2JQ9`)
   - Stored in GHL custom field `cf_uniqueId`
   - Emailed to user via GHL automation

2. **Resume Lookup:**
   - Navigate to `/resume`
   - Enter Surname + Unique ID
   - All previous answers restored
   - Continue from exact point left off

3. **UID Reminder:**
   - Navigate to `/resume/reminder`
   - Enter Surname + Email
   - UID emailed via GHL automation

4. **UID Reset:**
   - Navigate to `/resume/reset`
   - Enter Surname + Email
   - Receive 6-digit verification code
   - Verify code and get new UID

### Deposit Payment

Monthly flow requires a £100 deposit before Step 6 (Onboarding Details):

1. **Payment Flow:**
   - After Step 5 (Payment Preference), redirects to Stripe Checkout
   - User completes £100 deposit payment
   - Redirects to success page
   - Auto-redirects to Step 6

2. **Guard Logic:**
   - Step 6 blocked if deposit not paid (Monthly flow only)
   - Shows modal with "Try Payment Again" option
   - One-Off flow bypasses deposit requirement

3. **Stripe Integration:**
   - Uses Stripe Checkout for secure payment processing
   - Webhook handler updates GHL on payment completion
   - Custom fields: `depositStatus`, `stripeSessionId`, `stripePaymentIntentId`, `depositPaidAt`

### Configuration

See `DEVELOPER_HANDOFF.md` for complete setup instructions including:
- Environment variables
- GHL custom fields setup
- GHL automations setup
- Stripe webhook configuration
- Deployment checklist

### Troubleshooting

- **503 Error:** GHL not configured - Check that `GHL_API_KEY` and `GHL_LOCATION_ID` are set
- **Field not updating:** Verify the custom field ID in `config/ghlCustomFields.ts` matches GHL
- **Tags not applying:** Check that tag names match exactly (case-sensitive) in GHL

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui + Lucide React
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics
- **Email:** Resend (configurable)
- **CRM:** GoHighLevel API integration

## License

Professional project for File Easy Accountancy.
