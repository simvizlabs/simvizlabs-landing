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
    const { amount, merchantOrderId, redirectUrl, metadata } = body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Amount is required and must be greater than 0' },
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
        merchantOrderId,
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


