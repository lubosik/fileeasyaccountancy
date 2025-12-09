/**
 * Google Maps Embed Component
 * Embeds Google Business Profile map for entity alignment
 * 
 * Usage: <GoogleMapsEmbed office="kent" />
 */
interface GoogleMapsEmbedProps {
  office: 'kent' | 'london' | 'dubai';
  className?: string;
}

export default function GoogleMapsEmbed({ office, className = '' }: GoogleMapsEmbedProps) {
  // GBP CID from brand_tokens.json
  const gbpCids = {
    kent: '0x47d8cd14844b6e53:0x4d94bad817be51bb',
    london: '', // TODO: Extract from GBP when available
    dubai: '' // TODO: Extract from GBP when available
  };

  // Coordinates from brand_tokens.json
  const coordinates = {
    kent: { lat: 51.3883, lng: 0.5083 },
    london: { lat: 51.5275, lng: -0.0879 }, // Approximate for City Road
    dubai: { lat: 25.0697, lng: 55.1411 } // JLT approximate
  };

  const cid = gbpCids[office];
  const coord = coordinates[office];

  // Build embed URL using Google Maps embed API (no API key needed for basic embed)
  // Format: https://www.google.com/maps/embed?pb=!1m18!... (full embed URL)
  // For now, using place search format which Google Maps provides in share dialog
  const placeQueries = {
    kent: 'File Easy Accountancy, 43 Castle Avenue, Rochester ME1 2DU, UK',
    london: 'File Easy Accountancy, 124 City Road, London EC1V 2NX, UK',
    dubai: 'File Easy Accountancy, Unit RET-R5-185, Jumeirah Lakes Towers, Dubai, UAE'
  };

  const placeQuery = encodeURIComponent(placeQueries[office]);
  
  // Use Google Maps search embed (works without API key for basic embeds)
  // Note: For production, extract actual embed iframe src from GBP share dialog
  // Format: Go to GBP listing → Share → Embed a map → Copy iframe src
  const embedSrc = `https://www.google.com/maps?q=${placeQuery}&output=embed&z=15`;

  // Direct GBP link
  const gbpLink = cid 
    ? `https://www.google.com/maps?cid=${cid}`
    : `https://www.google.com/maps?q=${coord.lat},${coord.lng}`;

  const officeNames = {
    kent: 'Kent Office (Rochester)',
    london: 'London Office',
    dubai: 'Dubai Office'
  };

  return (
    <div className={` rounded-lg p-6 border border-primary/10 my-8 ${className}`} style={{ backgroundColor: '#F8F8F5' }}>
      <h3 className="text-2xl font-bold text-primary mb-4">Find Us on the Map</h3>
      <p className="text-muted-foreground mb-6">
        Click for directions or explore the area around our {officeNames[office]}.
      </p>

      {/* Embedded Google Map */}
      <div className="relative w-full overflow-hidden rounded-lg border border-[#E0E2E8]" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedSrc}
          width="600"
          height="450"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Google Map showing File Easy Accountancy ${officeNames[office]} location`}
          title={`File Easy Accountancy ${officeNames[office]} Location Map`}
        />

        {/* Fallback link if iframe fails to load */}
        <noscript>
          <div className="absolute inset-0 flex items-center justify-center text-center p-4" style={{ backgroundColor: '#E0E2E8' }}>
            <div>
              <p className="text-muted-foreground mb-2">Map not loading? View our location directly:</p>
              <a
                href={gbpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </noscript>
      </div>

      {/* Direct Link to Google Maps (below map) */}
      <div className="mt-4 text-center">
        <a
          href={gbpLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors"
          aria-label={`Open ${officeNames[office]} location in Google Maps (new window)`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Get Directions in Google Maps</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

