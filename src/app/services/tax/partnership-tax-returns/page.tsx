import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactStrip from '@/components/ui/ContactStrip';
import { FAQPageSchema, BreadcrumbSchema } from '@/lib/schema';
import ArticleLayout from '@/components/ArticleLayout';
import ArticleCTA from '@/components/ArticleCTA';
import TocHighlight from '@/components/TocHighlight';

export const metadata: Metadata = {
  title: 'Partnership Tax Returns Services in Kent | File Easy Accountancy',
  description: 'Expert partnership tax return services in Kent. Partnership Self Assessment (SA800), partnership tax filing, partner tax returns. Clear pricing, friendly help.',
  alternates: {
    canonical: 'https://fileeasyaccountancy.co.uk/services/partnership-tax-returns/',
  },
  openGraph: {
    title: 'Partnership Tax Returns Services in Kent | File Easy Accountancy',
    description: 'Expert partnership tax return services in Kent. Partnership Self Assessment (SA800), partnership tax filing, partner tax returns.',
    url: 'https://fileeasyaccountancy.co.uk/services/partnership-tax-returns/',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How do partnerships pay tax?',
    answer: 'Partnerships themselves don\'t pay tax—each partner pays Income Tax and National Insurance on their share of partnership profits through Self Assessment. The partnership files a partnership tax return (SA800) reporting total profits, then each partner includes their share on their personal Self Assessment return (SA100 + SA104) and pays tax on it. This is different from limited companies, which pay Corporation Tax. Partnerships are "transparent" for tax, meaning tax is paid by the partners individually, not by the partnership as an entity.',
  },
  {
    question: 'Do partnerships file tax returns?',
    answer: 'Yes, partnerships must file a partnership tax return (SA800) every year, reporting total partnership income, expenses, and profits. The partnership return also includes a Partnership Statement showing each partner\'s share of profits. Each partner must then file their own personal Self Assessment return (SA100 + SA104) showing their share of partnership profits. So there are two levels of filing: the partnership return (SA800) and individual partner returns (SA100 + SA104). Both are due by 31 January following the tax year end.',
  },
  {
    question: 'What is a partnership tax return?',
    answer: 'A partnership tax return (SA800) is the form that partnerships must file with HMRC every year. It reports total partnership income, expenses, profits, and losses, and includes a Partnership Statement showing each partner\'s share. The partnership return itself doesn\'t calculate tax—it just reports the partnership\'s financial position. Tax is calculated and paid by each partner individually on their share through their personal Self Assessment returns. The SA800 is different from individual Self Assessment returns (SA100) that partners file.',
  },
  {
    question: 'How is partnership income taxed?',
    answer: 'Partnership income is taxed on each partner individually. First, the partnership calculates total taxable profit (income minus expenses). Then, profits are allocated to each partner according to the partnership agreement (usually in profit-sharing ratios). Each partner then pays Income Tax and National Insurance on their share at their personal tax rate (basic rate 20%, higher rate 40%, or additional rate 45%). So if a partnership makes £100,000 profit and has two equal partners, each partner pays tax on £50,000 of income at their personal rate.',
  },
  {
    question: 'Do partners file individual tax returns?',
    answer: 'Yes, each partner must file their own personal Self Assessment return (SA100 + SA104) showing their share of partnership profits. The SA104 pages are specifically for partnership income and show how much profit each partner is allocated. Partners also need to report any other income they have (employment, property, investments, etc.) on their full Self Assessment return. Each partner is responsible for their own return and tax payment, even though the partnership files its own return too.',
  },
  {
    question: 'What are partnership tax obligations?',
    answer: 'Partnerships have several tax obligations: file a partnership tax return (SA800) by 31 January, complete a Partnership Statement showing each partner\'s share of profits, provide partners with their profit allocation information, and ensure each partner files their individual return. Each partner must: file their personal Self Assessment return (SA100 + SA104) by 31 January, declare their share of partnership profits, pay Income Tax and National Insurance on their share, and keep records for at least 5 years. Late filing penalties apply to both the partnership return and individual partner returns.',
  },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Tax', href: '/services/tax' },
  { label: 'Partnership Tax Returns', href: '/services/tax/partnership-tax-returns' },
];

const tocItems = [
  { id: 'what-this-helps', text: 'What this helps you do (fast)' },
  { id: 'how-it-works', text: 'How it works' },
  { id: 'costs-timelines', text: 'Costs & timelines' },
  { id: 'kent-focus', text: 'Kent (UK) focus' },
  { id: 'faqs', text: 'FAQs' },
];

export default function PartnershipTaxReturnsPage() {
  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={breadcrumbs.map((item) => ({
          name: item.label,
          url: `https://fileeasyaccountancy.co.uk${item.href}`,
        }))}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Partnership Tax Returns',
            provider: {
              '@type': 'AccountingService',
              name: 'File Easy Accountancy',
              url: 'https://fileeasyaccountancy.co.uk',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+44-7894-447435',
                contactType: 'customer service',
                email: 'info@fileeasyaccountancy.co.uk',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: '43 Castle Avenue',
                addressLocality: 'Rochester',
                addressRegion: 'Kent',
                postalCode: 'ME1 2DU',
                addressCountry: 'GB',
              },
              areaServed: [
                { '@type': 'City', name: 'Medway', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Maidstone', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Canterbury', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Ashford', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
                { '@type': 'City', name: 'Dartford', containedIn: { '@type': 'AdministrativeArea', name: 'Kent' } },
              ],
            },
            description: 'Expert partnership tax return services in Kent. Partnership Self Assessment (SA800), partnership tax filing, partner tax returns.',
            name: 'Partnership Tax Returns',
            url: 'https://fileeasyaccountancy.co.uk/services/tax/partnership-tax-returns/',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tax Preparation Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partnership Tax Return (SA800)' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Partner Tax Return Support' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comprehensive Partnership Tax Service' } },
              ],
            },
          }),
        }}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={breadcrumbs} showHome={false} />
      </div>

      <ArticleLayout
        title="Partnership Tax Returns"
        updated="November 2025"
        hero={null}
        toc={tocItems}
      >
        <p>
          If you&apos;re in a partnership, you need to file a partnership tax return (SA800) every year, and each partner must also file their own personal Self Assessment return. Partnerships themselves don&apos;t pay tax—each partner pays Income Tax and National Insurance on their share of partnership profits through Self Assessment (
          <a href="https://www.gov.uk/tax-partnership" target="_blank" rel="noopener noreferrer">
            gov.uk partnership tax
          </a>
          ). Partnerships must file a partnership tax return (SA800) reporting total partnership profits, with each partner then including their share on their individual Self Assessment return. Partnership tax returns must be filed by 31 January following the tax year end, the same deadline as individual Self Assessment returns.
        </p>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Here&apos;s what you need to know:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Partnerships themselves don&apos;t pay tax</strong> — Each partner pays Income Tax and National Insurance on their share of partnership profits through Self Assessment
            </li>
            <li>
              <strong>Partnerships must file a partnership tax return (SA800)</strong> — This reports total partnership profits and allocates each partner&apos;s share
            </li>
            <li>
              <strong>Each partner must file their own Self Assessment return</strong> — Showing their share of partnership profits and paying tax on it
            </li>
            <li>
              <strong>Partnership tax returns are due by 31 January</strong> — The same deadline as individual Self Assessment returns
            </li>
          </ul>
        </div>

        <p>
          The problem is most partnerships don&apos;t understand how partnership tax works. They think the partnership pays tax like a company, don&apos;t know about the SA800 return, or struggle with allocating profits between partners. That causes problems—late filing penalties, incorrect profit allocations, and confusion about who pays what tax.
        </p>

        <p>
          We handle partnership tax returns for partnerships needing proper tax compliance: partnership tax return preparation (completing the SA800 partnership return with all partnership income and expenses), profit allocation (calculating each partner&apos;s share of profits according to the partnership agreement), partner tax returns (helping each partner complete their personal Self Assessment return with their partnership income), tax calculations (calculating Income Tax and National Insurance for each partner on their share), and return filing (filing the partnership return and supporting partners with their individual returns). Whether you&apos;re a partnership in Medway with straightforward trading income, a partnership in Maidstone with multiple income sources, or a partnership in Canterbury needing profit allocation help, we&apos;ll handle your partnership tax returns that work. No confusion, no penalties—just proper tax compliance that keeps everyone right.
        </p>

        <h2 id="what-this-helps">What this helps you do (fast)</h2>
        <ul>
          <li>
            <strong>Meet partnership tax filing obligations</strong> — File your partnership tax return (SA800) and support each partner with their individual returns. Proper filing means no penalties or HMRC enquiries.
          </li>
          <li>
            <strong>Allocate profits correctly</strong> — Calculate each partner&apos;s share of profits according to your partnership agreement. Accurate allocation ensures each partner pays the right amount of tax.
          </li>
          <li>
            <strong>Complete partner tax returns</strong> — Help each partner complete their personal Self Assessment return with their partnership income. Partner returns ensure everyone reports their share correctly.
          </li>
          <li>
            <strong>Calculate tax correctly</strong> — Work out Income Tax and National Insurance for each partner on their share. Accurate calculations mean partners pay the right amount of tax.
          </li>
          <li>
            <strong>Avoid penalties and HMRC enquiries</strong> — File on time and accurately to avoid late filing penalties and HMRC enquiries. Compliance saves money and stress.
          </li>
          <li>
            <strong>Understand partnership tax structure</strong> — We&apos;ll explain how partnership tax works, who pays what, and what each partner needs to do. Understanding the structure helps everyone stay compliant.
          </li>
        </ul>

        <h2 id="how-it-works">How it works</h2>
        <p>
          <strong>Step-by-step process for partnership tax returns:</strong>
        </p>
        <ol>
          <li>
            <strong>Discovery call</strong> — We chat about your partnership: how many partners you have, what your partnership agreement says about profit sharing, what types of income the partnership receives, whether you&apos;ve filed partnership returns before, and what you want to achieve.
          </li>
          <li>
            <strong>Partnership information gathering</strong> — We gather all partnership information:
            <ul>
              <li>
                <strong>Partnership details</strong> — Partnership name, UTR, partnership agreement (for profit-sharing ratios)
              </li>
              <li>
                <strong>Income records</strong> — All partnership income (trading income, property income, investment income, etc.)
              </li>
              <li>
                <strong>Expense records</strong> — All partnership expenses (business expenses, capital allowances, etc.)
              </li>
              <li>
                <strong>Partner details</strong> — Names, addresses, UTRs, profit-sharing ratios, and periods as partners
              </li>
              <li>
                <strong>Supporting documents</strong> — Bank statements, invoices, receipts, partnership agreement, and other records
              </li>
            </ul>
            Partnership information gathering ensures we have everything needed to complete the partnership return.
          </li>
          <li>
            <strong>Partnership profit calculation</strong> — We calculate partnership profits:
            <ul>
              <li>
                <strong>Total income</strong> — Calculate total partnership income from all sources (trading, property, investments, etc.)
              </li>
              <li>
                <strong>Total expenses</strong> — Calculate total partnership expenses (allowable business expenses, capital allowances, etc.)
              </li>
              <li>
                <strong>Partnership profit</strong> — Calculate total taxable profit (income minus expenses)
              </li>
              <li>
                <strong>Profit allocation</strong> — Allocate profit to each partner according to the partnership agreement
              </li>
              <li>
                <strong>Partner profit shares</strong> — Calculate each partner&apos;s share of profits, losses, and other income
              </li>
            </ul>
            Partnership profit calculation ensures profits are calculated correctly and allocated fairly between partners.
          </li>
          <li>
            <strong>SA800 partnership return completion</strong> — We complete the partnership tax return:
            <ul>
              <li>
                <strong>Partnership details section</strong> — Complete partnership information (name, UTR, accounting period)
              </li>
              <li>
                <strong>Income and expenses</strong> — Report all partnership income and expenses on the SA800 form
              </li>
              <li>
                <strong>Partnership Statement</strong> — Complete the Partnership Statement showing each partner&apos;s share of profits
              </li>
              <li>
                <strong>Supplementary pages</strong> — Complete any supplementary pages required (property income, foreign income, capital gains, etc.)
              </li>
              <li>
                <strong>Declaration</strong> — Complete the partnership return declaration (signed by nominated partner)
              </li>
            </ul>
            SA800 completion ensures the partnership return is accurate and complete.
          </li>
          <li>
            <strong>Partner tax return support</strong> — We help each partner complete their personal return:
            <ul>
              <li>
                <strong>SA104 partnership pages</strong> — Complete SA104 pages showing each partner&apos;s share of partnership profits
              </li>
              <li>
                <strong>Partner tax calculation</strong> — Calculate Income Tax and National Insurance for each partner on their share
              </li>
              <li>
                <strong>Individual return completion</strong> — Help partners complete their full Self Assessment return (SA100 + SA104)
              </li>
              <li>
                <strong>Return filing</strong> — Support partners with filing their individual returns online
              </li>
            </ul>
            Partner tax return support ensures each partner reports their partnership income correctly.
          </li>
          <li>
            <strong>Filing and payment</strong> — We handle filing and payment:
            <ul>
              <li>
                <strong>Partnership return filing</strong> — File the SA800 partnership return online via HMRC&apos;s Government Gateway
              </li>
              <li>
                <strong>Partner return filing</strong> — Ensure all partner returns are filed by the deadline (31 January)
              </li>
              <li>
                <strong>Payment coordination</strong> — Help partners understand their tax bills and payment deadlines
              </li>
              <li>
                <strong>Filing confirmation</strong> — Get confirmation from HMRC that returns have been received
              </li>
            </ul>
            Filing and payment ensures everything is submitted on time and tax is paid correctly.
          </li>
        </ol>

        <div className="article-callout article-callout--success">
          <h3 style={{ marginTop: 0 }}>What partnership tax return filing includes:</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Partnership information gathering (partnership details, income records, expense records, partner details, supporting documents)</li>
            <li>Partnership profit calculation (total income, total expenses, partnership profit, profit allocation, partner profit shares)</li>
            <li>SA800 partnership return completion (partnership details, income/expenses, Partnership Statement, supplementary pages, declaration)</li>
            <li>Partner tax return support (SA104 pages, partner tax calculation, individual return completion, return filing)</li>
            <li>Filing and payment (partnership return filing, partner return filing, payment coordination, filing confirmation)</li>
          </ul>
        </div>

        <div className="article-callout article-callout--info">
          <h3 style={{ marginTop: 0 }}>Key partnership tax rules:</h3>
          <h4 style={{ marginTop: '1rem' }}>Partnership tax structure:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Partnerships don&apos;t pay Corporation Tax</strong> — Unlike limited companies, partnerships are transparent for tax
            </li>
            <li>
              <strong>Partners pay personal tax</strong> — Each partner pays Income Tax and National Insurance on their share
            </li>
            <li>
              <strong>Two-level filing</strong> — Partnership files SA800, each partner files SA100 + SA104
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Partnership Statement:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Short version</strong> — Use if partnership has only trading/professional income and bank interest
            </li>
            <li>
              <strong>Full version</strong> — Use if partnership has other income types (property, foreign income, etc.)
            </li>
            <li>
              <strong>Partner details</strong> — Must show each partner&apos;s name, UTR, and profit share
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Profit allocation:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>According to partnership agreement</strong> — Profits allocated according to the partnership agreement (usually in profit-sharing ratios)
            </li>
            <li>
              <strong>Equal shares</strong> — If no agreement specifies otherwise, profits are shared equally
            </li>
            <li>
              <strong>Changing partners</strong> — If partners change during the year, allocation reflects periods as partners
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Filing deadlines:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Partnership return (SA800)</strong> — 31 January following the tax year end
            </li>
            <li>
              <strong>Partner returns (SA100 + SA104)</strong> — 31 January following the tax year end (same deadline)
            </li>
            <li>
              <strong>Tax payment</strong> — 31 January following the tax year end (for partners)
            </li>
          </ul>
          <h4 style={{ marginTop: '1rem' }}>Late filing penalties:</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>
              <strong>Partnership return</strong> — Penalties apply if SA800 is filed late (charged to each partner)
            </li>
            <li>
              <strong>Partner returns</strong> — Penalties apply if individual returns are filed late
            </li>
            <li>
              <strong>Both must be filed on time</strong> — Partnership and partner returns both have the same deadline
            </li>
          </ul>
        </div>

        <p>
          We handle all aspects of partnership tax returns. The key is calculating partnership profits correctly, allocating them fairly between partners, completing both partnership and partner returns accurately, and filing everything on time, so partners pay the right amount of tax and avoid penalties.
        </p>

        <ArticleCTA variant="primary" />

        <h2 id="costs-timelines">Costs &amp; timelines</h2>
        <p>
          <strong>Pricing factors:</strong>
        </p>
        <ul>
          <li>
            <strong>Number of partners</strong> — More partners mean more partner returns to support, so costs increase
          </li>
          <li>
            <strong>Partnership complexity</strong> — Simple partnerships (single income source, equal profit sharing) cost less than complex partnerships (multiple income sources, complex profit-sharing arrangements)
          </li>
          <li>
            <strong>Income types</strong> — Partnerships with multiple income types (trading, property, foreign income) require more work
          </li>
          <li>
            <strong>Partnership return complexity</strong> — Full Partnership Statement (vs short version) requires more work
          </li>
          <li>
            <strong>Partner return support</strong> — If you want help with all partner returns (not just the partnership return), this adds to the cost
          </li>
        </ul>

        <p>
          <strong>Commonly reported ranges by local providers:</strong>
        </p>
        <ul>
          <li>
            <strong>Simple partnership tax return (2 partners, equal shares):</strong> £400–£800 for partnership return (SA800) plus basic support for 2 partner returns
          </li>
          <li>
            <strong>Standard partnership tax return (3-4 partners):</strong> £600–£1,200 for partnership return plus support for 3-4 partner returns
          </li>
          <li>
            <strong>Complex partnership tax return (5+ partners, multiple income types):</strong> £1,000–£2,000+ for partnership return plus comprehensive support for all partner returns
          </li>
          <li>
            <strong>Partnership return only (no partner support):</strong> £300–£600 for just the SA800 partnership return (partners complete their own returns)
          </li>
          <li>
            <strong>Additional partner return support:</strong> £100–£200 per partner for help completing individual Self Assessment returns
          </li>
        </ul>

        <p>
          <strong>Why partnership tax return filing costs what it does:</strong>
        </p>
        <ul>
          <li>Partnership information gathering requires collecting income, expenses, and partner details from multiple sources</li>
          <li>Partnership profit calculation requires calculating total profits and allocating to each partner correctly</li>
          <li>SA800 completion requires completing the partnership return accurately with all required information</li>
          <li>Partner return support requires helping each partner complete their individual return (SA100 + SA104)</li>
          <li>Filing management requires coordinating partnership and partner returns to ensure everything is filed on time</li>
        </ul>

        <p>
          <strong>Timeline:</strong> For returns filed before the deadline, partnership return preparation usually takes 2-3 weeks from when we receive all partnership records. Partner return support typically takes 1-2 weeks per partner depending on complexity. We&apos;ll need all records at least 4-6 weeks before the 31 January deadline to ensure on-time filing for both partnership and partner returns.
        </p>

        <p>
          <strong>Payment:</strong> Tax is paid by individual partners (not the partnership) through their Self Assessment returns by 31 January. Each partner&apos;s tax bill depends on their share of profits and their personal tax rate. We can help partners understand their tax bills and payment options if needed.
        </p>

        <p>
          <strong>No hidden fees.</strong> Partnership tax return price includes partnership return preparation, profit allocation, SA800 completion, and basic partner return support. Comprehensive partner return support for all partners is separate if you want it.
        </p>

        <h2 id="kent-focus">Kent (UK) focus</h2>
        <p>
          We work with partnerships across Kent: partnerships in Medway with straightforward trading income, partnerships in Maidstone with multiple partners, and partnerships in Canterbury needing profit allocation help.
        </p>

        <p>
          Kent partnerships face the same partnership tax obligations as everyone else—filing SA800 partnership returns, allocating profits to partners, and ensuring each partner files their individual return. The difference is when you get proper help with partnership tax returns, you calculate profits correctly, allocate them fairly, and file both partnership and partner returns on time. That&apos;s what helps Kent partnerships stay compliant and avoid penalties.
        </p>

        <p>
          <strong>Common Kent partnership scenarios:</strong>
        </p>
        <ul>
          <li>
            <strong>Professional partnerships</strong> — Accountancy firms, solicitors, consultants running as partnerships
          </li>
          <li>
            <strong>Trading partnerships</strong> — Business partnerships with trading income and expenses
          </li>
          <li>
            <strong>Property partnerships</strong> — Partnerships owning and letting property together
          </li>
          <li>
            <strong>Multi-partner partnerships</strong> — Partnerships with 3+ partners needing coordinated filing
          </li>
          <li>
            <strong>LLPs</strong> — Limited Liability Partnerships (same tax structure as general partnerships)
          </li>
        </ul>

        <p>
          <strong>Kent business market context:</strong>
        </p>
        <ul>
          <li>Many Kent businesses operate as partnerships (professional services, trades, property investment)</li>
          <li>Proper partnership tax help helps Kent partnerships comply with filing requirements</li>
          <li>On-time filing helps Kent partnerships avoid penalties and keep partners happy</li>
          <li>Clear profit allocation helps Kent partnerships maintain good relationships between partners</li>
        </ul>

        <p>
          <strong>Remote-first, Kent-focused.</strong> We don&apos;t need to meet in person (though we can if you prefer), and we understand what Kent partnerships are dealing with. Partnership returns, profit allocation, partner returns, tax calculations—we&apos;ll handle your partnership tax returns that keep everyone compliant and avoid penalties.
        </p>

        <h2 id="faqs">FAQs</h2>
        <FAQAccordion
          title="Partnership Tax Returns - Frequently Asked Questions"
          subtitle="Common questions about partnership tax returns and partner tax obligations"
          faqs={faqs}
          generateJsonLd={false}
        />

        <div>
          <h3>Related services</h3>
          <ul>
            <li>
              <Link href="/services/tax/self-assessment-sole-traders/">Self-Assessment Tax Returns for Sole Traders</Link> — Individual Self Assessment returns (similar to partner returns)
            </li>
            <li>
              <Link href="/services/bookkeeping/bookkeeping-partnerships-llps/">Bookkeeping for Partnerships & LLPs</Link> — Bookkeeping that supports partnership tax returns
            </li>
            <li>
              <Link href="/services/tax/tax-planning-optimization/">Tax Planning & Optimization</Link> — Tax planning for partnerships and partners
            </li>
          </ul>
          <p>
            <Link href="/services/tax/" className="font-semibold">
              View all tax services →
            </Link>
          </p>
        </div>

        <ArticleCTA variant="secondary" title="Need help with your partnership tax returns?" description="Don't let partnership tax confusion stress you out. We'll handle your partnership return (SA800) and support each partner with their individual returns, ensuring accuracy and compliance. No confusion, no penalties—just proper tax compliance that keeps everyone right." />
      </ArticleLayout>

      <TocHighlight />

      <ContactStrip title="Need help with partnership tax returns?" />
    </>
  );
}

