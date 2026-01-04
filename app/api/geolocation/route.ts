import { NextRequest, NextResponse } from 'next/server';

/**
 * Detect if user is from India using CloudFront Viewer Country
 */
function isIndiaUser(req: NextRequest): {
  isIndia: boolean;
  method: string;
} {
  const cfCountry = req.headers.get('cloudfront-viewer-country');

  if (cfCountry) {
    return {
      isIndia: cfCountry === 'IN',
      method: 'cloudfront-viewer-country',
    };
  }

  // Header missing (local dev / non-CloudFront)
  return {
    isIndia: true,
    method: 'cloudfront-header-missing',
  };
}

export async function GET(request: NextRequest) {
  try {
    // 🧪 Explicit test override
    const testIndia = request.nextUrl.searchParams.get('testIndia');
    if (testIndia === 'true') {
      return NextResponse.json({
        success: true,
        isIndia: true,
        country: 'India',
        countryCode: 'IN',
        method: 'test-parameter',
        locale: 'en-IN',
      });
    }

    const result = isIndiaUser(request);
    const acceptLanguage = request.headers.get('accept-language') || '';

    if (result.isIndia) {
      return NextResponse.json({
        success: true,
        isIndia: true,
        country: 'India',
        countryCode: 'IN',
        method: result.method,
        locale: acceptLanguage.split(',')[0]?.trim(),
        acceptLanguage,
      });
    }

    return NextResponse.json({
      success: true,
      isIndia: false,
      country: 'Unknown',
      countryCode: 'XX',
      method: result.method,
      locale: acceptLanguage.split(',')[0]?.trim() || 'en',
      acceptLanguage,
    });
  } catch (error: any) {
    console.error('Geolocation route error:', error);
    return NextResponse.json(
      {
        success: false,
        isIndia: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
