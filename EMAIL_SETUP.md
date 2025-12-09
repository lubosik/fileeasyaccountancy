# Email Setup Guide

All contact form inquiries are sent to: **info@fileeasyaccountancy.co.uk**

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up for an account
2. Verify your account and log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (it starts with `re_`)

### 2. Configure the Domain

For production emails to work properly, you need to verify your domain with Resend:

1. In your Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `fileeasyaccountancy.co.uk`
4. Follow the instructions to add the DNS records (SPF, DKIM, DMARC)
5. Wait for verification (usually takes a few minutes)

### 3. Set Environment Variable

#### For Local Development:
Create a `.env.local` file in the root directory:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

#### For Vercel Production:
1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production (and Preview if needed)
4. Redeploy your application

### 4. Test the Contact Form

1. Visit your website
2. Go to the Contact page or any page with a contact form
3. Fill out and submit the form
4. Check `info@fileeasyaccountancy.co.uk` for the email

## Email Features

### Beautiful HTML Emails
All inquiry emails are professionally formatted with:
- **Brand colors** (gold gradient header matching File Easy Accountancy branding)
- **Clear sections**: Customer details, inquiry message, quick actions
- **Responsive design** that works on all email clients
- **Clickable buttons** to reply via email or call (if phone provided)
- **Automatic timestamps** with British date/time format
- **24-hour response time reminder**

### Two Email Templates

#### 1. Simple Lead Form (Contact page, CTA forms)
- Name
- Email
- What they need help with
- Source tracking (which form/page)

#### 2. Full Contact Form (More detailed inquiries)
- First Name & Last Name
- Email Address
- Phone Number (optional)
- Company Name (optional)
- Service Required
- Additional Message

### Reply-To Feature
All emails automatically set the customer's email as the reply-to address, so you can simply hit "Reply" in your email client to respond directly to the customer.

## Troubleshooting

### Emails Not Sending?
1. Check that `RESEND_API_KEY` is set in your environment variables
2. Verify your domain is properly configured in Resend
3. Check the server logs for error messages
4. Ensure you're using a valid `from` email address on your verified domain

### Testing Email Deliverability
- Resend provides a testing mode where emails go to your verified email only
- Once domain is verified, all emails will be delivered normally
- Check Resend dashboard for email logs and delivery status

## Support

For Resend support, visit:
- Documentation: https://resend.com/docs
- Email: support@resend.com
- Status Page: https://resend.com/status
