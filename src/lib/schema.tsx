interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email?: string;
  url: string;
  priceRange?: string;
  openingHours?: string[];
  serviceArea?: {
    name: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
  };
  sameAs?: string[];
  additionalProperties?: Record<string, unknown>;
}

interface FAQPageSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  additionalProperties?: Record<string, unknown>;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
  additionalProperties?: Record<string, unknown>;
}

// LocalBusiness Schema Component
export function LocalBusinessSchema({
  name,
  description = 'Professional accountancy services for UK businesses',
  address,
  telephone,
  email,
  url,
  priceRange,
  openingHours = [
    'Mo-Fr 09:00-17:30',
    'Sa 09:00-13:00'
  ],
  serviceArea,
  sameAs = [],
  additionalProperties = {}
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    telephone,
    email,
    url,
    priceRange,
    openingHours,
    serviceArea: serviceArea ? {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: serviceArea.latitude?.toString(),
        longitude: serviceArea.longitude?.toString()
      },
      geoRadius: serviceArea.radius?.toString()
    } : undefined,
    sameAs,
    ...additionalProperties
  };

  // Remove undefined values
  Object.keys(schema).forEach(key => {
    if (schema[key as keyof typeof schema] === undefined) {
      delete schema[key as keyof typeof schema];
    }
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}

// FAQPage Schema Component
export function FAQPageSchema({
  faqs,
  additionalProperties = {}
}: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    })),
    ...additionalProperties
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}

// Service Schema Component
export function ServiceSchema({
  name,
  description,
  provider,
  areaServed = 'United Kingdom',
  serviceType = 'Professional Service',
  additionalProperties = {}
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      ...provider
    },
    areaServed,
    serviceType,
    ...additionalProperties
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}

// Organization Schema Component
export function OrganizationSchema({
  name,
  description,
  url,
  logo,
  address,
  telephone,
  email,
  sameAs = [],
  additionalProperties = {}
}: {
  name: string;
  description?: string;
  url: string;
  logo?: string;
  address: LocalBusinessSchemaProps['address'];
  telephone: string;
  email?: string;
  sameAs?: string[];
  additionalProperties?: Record<string, unknown>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    description,
    url,
    logo,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    telephone,
    email,
    sameAs,
    ...additionalProperties
  };

  // Remove undefined values
  Object.keys(schema).forEach(key => {
    if (schema[key as keyof typeof schema] === undefined) {
      delete schema[key as keyof typeof schema];
    }
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}

// Breadcrumb Schema Component
export function BreadcrumbSchema({
  items
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}