'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
  generateJsonLd?: boolean;
}

export default function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  className = '',
  generateJsonLd = true
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  // Generate JSON-LD structured data for FAQs
  const faqJsonLd = generateJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(index);
              return (
                <div
                  key={index}
                  className=" border border-border rounded-lg overflow-hidden" style={{ backgroundColor: '#F8F8F5' }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold text-foreground pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ease-in-out ${
                      isOpen ? 'pb-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: isOpen ? 'visible' : 'hidden'
                    }}
                  >
                    <div className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}