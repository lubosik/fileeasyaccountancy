interface TrustBarProps {
  title?: string;
  className?: string;
}

export default function TrustBar({
  title = 'Trusted by businesses using:',
  className = ''
}: TrustBarProps) {
  const partners = [
    {
      name: 'Xero',
      color: 'from-blue-600 to-cyan-500',
      description: 'Xero Certified Advisors'
    },
    {
      name: 'QuickBooks',
      color: 'from-blue-500 to-blue-600',
      description: 'QuickBooks ProAdvisors'
    },
    {
      name: 'TaxFiler',
      color: 'from-green-600 to-green-500',
      description: 'HMRC-Recognised Software'
    },
    {
      name: 'Making Tax Digital',
      color: 'from-gray-700 to-gray-600',
      description: 'MTD Compliant'
    }
  ];

  return (
    <section className={`py-12 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground font-medium">{title}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className=" rounded-lg border p-6 text-center hover:shadow-md transition-shadow" style={{ backgroundColor: '#F8F8F5' }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg`}>
                {partner.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-sm mb-1 text-foreground">
                {partner.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Making Tax Digital compliant</span> • All major accounting platforms supported
          </p>
        </div>
      </div>
    </section>
  );
}