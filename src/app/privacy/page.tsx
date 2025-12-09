export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Fill out contact forms or request consultations</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Engage our accounting services</li>
            <li>Communicate with us via phone, email, or other channels</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide, maintain, and improve our accounting services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Comply with legal obligations and professional standards</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>With your consent:</strong> We may share your information with your explicit consent</li>
            <li><strong>For legal reasons:</strong> We may share information if required by law or regulation</li>
            <li><strong>Professional obligations:</strong> With HMRC or other regulatory bodies as required</li>
            <li><strong>Service providers:</strong> With trusted third parties who assist in our operations</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organisational security measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. This includes
            encryption, secure data storage, and regular security assessments.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">
            Under UK data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Erase your personal data</li>
            <li>Restrict processing of your personal data</li>
            <li>Data portability</li>
            <li>Object to processing</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p className="mb-6">
            Our website uses cookies to improve your browsing experience. You can control cookies through
            your browser settings. Some features of our website may not function properly if cookies are disabled.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Retention of Information</h2>
          <p className="mb-6">
            We retain your personal information for as long as necessary to provide our services and comply
            with legal obligations. For accounting records, we typically retain information for at least
            6 years as required by HMRC.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by
            posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p><strong>File Easy Accountancy</strong></p>
            <p>Email: privacy@fileeasyaccountancy.co.uk</p>
            <p>Phone: +44 7894 447435</p>
            <p>Address: 43 Castle Avenue, Rochester, Kent ME1 2DU, United Kingdom</p>
          </div>
        </div>
      </main>
    </div>
  );
}