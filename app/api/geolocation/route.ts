import { NextRequest, NextResponse } from 'next/server';

// Indian locale codes
const INDIAN_LOCALES = ['en-IN', 'hi-IN', 'ta-IN', 'te-IN', 'kn-IN', 'ml-IN', 'mr-IN', 'gu-IN', 'pa-IN', 'bn-IN', 'or-IN', 'as-IN', 'ne-IN', 'ur-IN'];

/**
 * Detect if user is from India based on Accept-Language header
 */
function isIndianLocale(req: NextRequest): boolean {
  const acceptLanguage = req.headers.get('accept-language') || '';
  
  // Check for Indian locale codes
  for (const locale of INDIAN_LOCALES) {
    if (acceptLanguage.includes(locale)) {
      return true;
    }
  }
  
  // Check for 'IN' country code in locale string
  if (acceptLanguage.match(/[-_]IN\b/i)) {
    return true;
  }
  
  // Check for common Indian language codes
  const indianLanguages = ['hi', 'ta', 'te', 'kn', 'ml', 'mr', 'gu', 'pa', 'bn', 'or', 'as', 'ne', 'ur'];
  const languages = acceptLanguage.toLowerCase().split(',').map(lang => lang.split(';')[0].trim().split('-')[0]);
  
  for (const lang of languages) {
    if (indianLanguages.includes(lang)) {
      return true;
    }
  }
  
  return false;
}

export async function GET(request: NextRequest) {
  try {
    // Check for test parameter first
    const testIndia = request.nextUrl.searchParams.get('testIndia');
    if (testIndia === 'true') {
      return NextResponse.json({
        success: true,
        isIndia: true,
        country: 'India',
        countryCode: 'IN',
        method: 'test-parameter',
        locale: 'en-IN'
      });
    }

    // Use i18n locale detection (preferred method)
    const isIndia = isIndianLocale(request);
    
    if (isIndia) {
      const acceptLanguage = request.headers.get('accept-language') || '';
      const locale = acceptLanguage.split(',')[0].trim();
      
      return NextResponse.json({
        success: true,
        isIndia: true,
        country: 'India',
        countryCode: 'IN',
        method: 'i18n-locale',
        locale: locale,
        acceptLanguage: acceptLanguage
      });
    }

    // If not Indian locale, return false
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    return NextResponse.json({
      success: true,
      isIndia: false,
      country: 'Unknown',
      countryCode: 'XX',
      method: 'i18n-locale',
      locale: acceptLanguage.split(',')[0].trim() || 'en',
      acceptLanguage: acceptLanguage
    });
  } catch (error: any) {
    console.error('Geolocation route error:', error);
    return NextResponse.json({
      success: false,
      isIndia: false,
      error: error.message
    }, { status: 500 });
  }
}

