export default function TaxReturnsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Tax Returns</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Expert tax return preparation and filing services for individuals and businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personal Tax Returns</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Self Assessment preparation</li>
                <li>Capital gains tax calculations</li>
                <li>Rental income reporting</li>
                <li>Dividend and investment income</li>
                <li>HMRC correspondence handling</li>
                <li>Tax planning advice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Business Tax Returns</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Corporation Tax returns</li>
                <li>Partnership Tax returns</li>
                <li>Sole trader accounts</li>
                <li>Company accounts filing</li>
                <li>R&D tax credits</li>
                <li>Business expense optimisation</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Key Deadlines</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Self Assessment:</strong> 31st January
              </div>
              <div>
                <strong>Corporation Tax:</strong> 9 months after year end
              </div>
              <div>
                <strong>Company Accounts:</strong> 9 months after year end
              </div>
              <div>
                <strong>P11D Forms:</strong> 6th July
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}