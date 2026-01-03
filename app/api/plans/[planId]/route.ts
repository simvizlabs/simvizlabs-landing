import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const PAYMENTS_API_URL = process.env.NEXT_PUBLIC_PAYMENTS_API_URL || 'http://localhost:3000';

export async function GET(
    request: NextRequest,
    { params }: { params: { planId: string } }
) {
    try {
        const { planId } = params;

        if (!planId) {
            return NextResponse.json(
                { success: false, message: 'Plan ID is required' },
                { status: 400 }
            );
        }

        const response = await fetch(`${PAYMENTS_API_URL}/api/plans/${planId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        });

        const data = await response.json();

        if (!response.ok) {
            // If 404, return null or appropriate error
            return NextResponse.json(
                { success: false, message: data.message || 'Failed to fetch plan' },
                { status: response.status }
            );
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error fetching plan:', error);
        return NextResponse.json(
            { success: false, message: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
