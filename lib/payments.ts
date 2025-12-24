/**
 * Payment API utilities for PhonePe integration
 */

const PAYMENTS_API_URL = process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3000';

export interface PaymentInitiateRequest {
  amount: number; // Amount in paise (₹1 = 100 paise)
  merchantOrderId?: string;
  redirectUrl?: string;
  metadata?: {
    userId: string;
    productId?: string;
    productName?: string;
    [key: string]: any;
  };
}

export interface PaymentInitiateResponse {
  success: boolean;
  message: string;
  data: {
    checkoutUrl: string;
    merchantOrderId: string;
    amount: number;
  };
  timestamp: string;
}

export interface PaymentStatusResponse {
  success: boolean;
  message: string;
  data: {
    state: 'PAYMENT_PENDING' | 'PAYMENT_SUCCESS' | 'PAYMENT_ERROR' | 'PAYMENT_DECLINED';
    responseCode: string;
    amount: number;
    merchantOrderId: string;
    transactionId?: string;
    paymentInstrument?: {
      type: string;
      utr?: string;
    };
  };
  timestamp: string;
}

/**
 * Get auth token from Clerk session
 */
async function getAuthToken(): Promise<string | null> {
  try {
    // In Next.js, we'll pass the token from the server component
    // For client-side calls, we'll use Clerk's getToken
    if (typeof window !== 'undefined') {
      // This will be handled by the API route that calls the payments service
      return null;
    }
    return null;
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
}

/**
 * Initiate a payment
 */
export async function initiatePayment(
  request: PaymentInitiateRequest,
  authToken?: string
): Promise<PaymentInitiateResponse> {
  const response = await fetch(`${PAYMENTS_API_URL}/api/payments/initiate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to initiate payment');
  }

  return response.json();
}

/**
 * Get payment status
 */
export async function getPaymentStatus(
  merchantOrderId: string,
  authToken?: string
): Promise<PaymentStatusResponse> {
  const response = await fetch(
    `${PAYMENTS_API_URL}/api/payments/status/${merchantOrderId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get payment status');
  }

  return response.json();
}

/**
 * Get payments by user ID
 */
export async function getPaymentsByUserId(
  userId: string,
  authToken?: string
): Promise<any> {
  const response = await fetch(
    `${PAYMENTS_API_URL}/api/payments/user/${userId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get payments');
  }

  return response.json();
}

/**
 * Convert rupees to paise
 */
export function rupeesToPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

/**
 * Convert paise to rupees
 */
export function paiseToRupees(paise: number): number {
  return paise / 100;
}

/**
 * Format amount for display
 */
export function formatAmount(paise: number): string {
  const rupees = paiseToRupees(paise);
  return `₹${rupees.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}


