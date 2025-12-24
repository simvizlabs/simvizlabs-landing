# Clerk Authentication & Payments Integration Guide

This guide explains how Clerk authentication and PhonePe payments are integrated in the SimvizLabs landing page.

## Overview

The integration includes:
1. **Clerk Authentication** - User sign-up, sign-in, and session management
2. **PhonePe Payments** - Payment initiation, status checking, and webhook handling
3. **Protected Routes** - Dashboard and checkout pages require authentication
4. **Payment Flow** - Complete checkout to payment success flow

## Setup Instructions

### 1. Install Dependencies

```bash
cd simvizlabs-landing
npm install @clerk/nextjs
```

### 2. Environment Variables

Create a `.env.local` file in `simvizlabs-landing`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_PAYMENTS_API_URL=http://localhost:3000
```

### 3. Clerk Setup

1. Create an account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key and secret key
4. Add them to your `.env.local` file

### 4. Payments API Setup

Update `simvizlabs-payments/.env`:

```env
CLERK_SECRET_KEY=your_clerk_secret_key
PHONEPE_REDIRECT_URL=http://localhost:3003/payment/redirect
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3003
```

## Integration Details

### Authentication Flow

1. **Sign Up/Sign In Pages**
   - Located at `/sign-in` and `/sign-up`
   - Uses Clerk's pre-built components
   - Redirects to `/dashboard` after successful authentication

2. **Protected Routes**
   - Dashboard (`/dashboard`) - Requires authentication
   - Checkout (`/checkout`) - Requires authentication
   - Middleware automatically redirects unauthenticated users

3. **Navbar Integration**
   - Shows "Sign In" / "Start Building" for unauthenticated users
   - Shows "Dashboard" / "Sign Out" for authenticated users
   - Uses Clerk's `useUser` hook for real-time auth state

### Payment Flow

1. **Checkout Page** (`/checkout`)
   - User must be authenticated
   - Accepts product details via URL params: `?product=Name&amount=9000&productId=a320-bundle`
   - Calls `/api/payments/initiate` with user ID from Clerk
   - Redirects to PhonePe checkout URL

2. **Payment Redirect** (`/payment/redirect`)
   - PhonePe redirects here after payment
   - Polls payment status using `merchantOrderId` from URL
   - Shows success/failure/pending states
   - Redirects to dashboard on success

3. **Dashboard** (`/dashboard`)
   - Displays user information from Clerk
   - Shows active subscription if payment successful
   - Displays activation key for successful payments
   - Shows payment history

### API Routes

#### Frontend API Routes (Next.js)

- `POST /api/payments/initiate` - Initiate payment (requires auth)
- `GET /api/payments/status/[orderId]` - Check payment status (requires auth)
- `GET /api/payments/user/[userId]` - Get user payments (requires auth, verifies ownership)

#### Backend API Routes (Express)

- `POST /api/payments/initiate` - PhonePe payment initiation
- `GET /api/payments/status/:merchantOrderId` - Payment status
- `GET /api/payments/user/:userId` - User payments (requires Clerk JWT)
- `POST /api/payments/webhook` - PhonePe webhook handler

### Authentication Middleware

The payments API includes Clerk authentication middleware:

- **optionalAuth** - Verifies token if present, doesn't fail if missing
- **requireAuth** - Requires valid Clerk JWT token
- **verifyUserOwnership** - Ensures user can only access their own resources

### Payment Scenarios Handled

1. **Successful Payment**
   - User completes payment on PhonePe
   - Redirected to `/payment/redirect?merchantOrderId=xxx`
   - Status polled and confirmed as `PAYMENT_SUCCESS`
   - User sees success message and activation key
   - Dashboard shows active subscription

2. **Failed Payment**
   - User cancels or payment fails
   - Redirected to `/payment/redirect?merchantOrderId=xxx`
   - Status shows `PAYMENT_ERROR` or `PAYMENT_DECLINED`
   - User can retry payment

3. **Pending Payment**
   - Payment initiated but not yet confirmed
   - Status shows `PAYMENT_PENDING`
   - User can check dashboard later

4. **Webhook Updates**
   - PhonePe sends webhook callbacks
   - Payment status updated in database
   - User's dashboard reflects latest status

## Testing

### Test Authentication

1. Navigate to `/sign-up`
2. Create a test account
3. Verify redirect to `/dashboard`
4. Check navbar shows "Dashboard" and "Sign Out"

### Test Payment Flow

1. Navigate to `/in/a320-bundle`
2. Click "Get Started" button
3. Should redirect to `/checkout` (requires sign-in)
4. Click "Proceed to Payment"
5. Should redirect to PhonePe checkout
6. Complete or cancel payment
7. Should redirect to `/payment/redirect`
8. Verify status display

### Test Protected Routes

1. Sign out
2. Try to access `/dashboard` - should redirect to `/sign-in`
3. Try to access `/checkout` - should redirect to `/sign-in`

## Troubleshooting

### Clerk Issues

- **"ClerkProvider not found"** - Ensure `ClerkProvider` wraps your app in `app/layout.tsx`
- **"Invalid token"** - Check `CLERK_SECRET_KEY` matches in both projects
- **Redirect loops** - Verify middleware matcher configuration

### Payment Issues

- **Payment not initiating** - Check `NEXT_PUBLIC_PAYMENTS_API_URL` is correct
- **Status not updating** - Verify webhook endpoint is configured in PhonePe dashboard
- **CORS errors** - Ensure `ALLOWED_ORIGINS` includes your frontend URL

### Database Issues

- Payments API works without MongoDB
- For payment history, MongoDB is required
- Check `MONGODB_URI` in payments API `.env`

## Security Considerations

1. **JWT Tokens** - Always passed via Authorization header
2. **User Ownership** - Users can only access their own payments
3. **Protected Routes** - Middleware enforces authentication
4. **Webhook Validation** - PhonePe webhooks are validated
5. **Rate Limiting** - Payment endpoints are rate-limited

## Production Checklist

- [ ] Set Clerk keys in production environment
- [ ] Update `PHONEPE_REDIRECT_URL` to production domain
- [ ] Configure PhonePe webhook URL in merchant dashboard
- [ ] Set `PHONEPE_ENVIRONMENT=PROD`
- [ ] Update `ALLOWED_ORIGINS` with production domains
- [ ] Enable HTTPS for all endpoints
- [ ] Set up MongoDB for payment tracking
- [ ] Configure proper logging and monitoring

