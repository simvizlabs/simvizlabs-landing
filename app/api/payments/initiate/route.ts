import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { initiatePayment } from '@/lib/payments';

const PAYMENTS_API_URL = process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3000';

export async function POST(request: NextRequest) {
  try {
    // Get authenticated user from Clerk
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { amount, metadata, planId, redirectUrl } = body;

    // Validate required fields
    // If planId is present, amount might be determined by backend, so we can be looser here
    // But for now let's keep it simple or allow 0 if planId is there (backend validates)
    if ((!amount || amount <= 0) && !planId) {
      return NextResponse.json(
        { success: false, message: 'Amount is required and must be greater than 0, or planId must be provided' },
        { status: 400 }
      );
    }

    // Get Clerk session token to pass to payments API
    const authObj = await auth();
    const token = await authObj.getToken();

    // Call payments API
    const response = await fetch(`${PAYMENTS_API_URL}/api/payments/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({
        amount,
        planId,
        redirectUrl: redirectUrl || `${request.nextUrl.origin}/payment/redirect`,
        metadata: {
          ...metadata,
          userId, // Always include userId from Clerk
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to initiate payment' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error initiating payment:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}


