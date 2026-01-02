import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const PAYMENTS_API_URL = process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3000';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    // Await params in Next.js 15
    const { orderId } = await params;
    console.log("Order id", orderId);
    // Get authenticated user from Clerk
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get Clerk session token to pass to payments API
    const authObj = await auth();
    const token = await authObj.getToken();
    console.log(token);
    // Call payments API
    const response = await fetch(
      `${PAYMENTS_API_URL}/api/payments/status/${orderId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      }
    );

    const data = await response.json();
    console.log("Api response for payment status", data);
    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || 'Failed to get payment status' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error getting payment status:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}


