import { Clock, PoundSterling } from 'lucide-react';

interface PricingTimeframes {
  [key: string]: string;
  timeframe: string;
  note: string;
}

interface PriceNoteProps {
  data: PricingTimeframes;
  priceNote: string;
  className?: string;
}

export default function PriceNote({ data, priceNote, className = '' }: PriceNoteProps) {
  // Extract pricing items (exclude timeframe and note)
  const pricingItems = Object.entries(data).filter(
    ([key]) => key !== 'timeframe' && key !== 'note'
  );

  return (
    <section className={`py-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing & Timeframes</h2>

      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-blue-50/50 to-green-50/50 border-2 border-primary/20 rounded-xl p-8">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100/50 rounded-full -ml-12 -mb-12" />

        <div className="relative grid md:grid-cols-2 gap-8">
          {/* Enhanced Pricing */}
          <div className=" /80 backdrop-blur-sm rounded-lg p-6 shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <PoundSterling className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Investment</h3>
            </div>

            <div className="space-y-4">
              {pricingItems.map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50/50 to-transparent rounded-lg">
                  <span className="text-sm font-medium capitalize text-foreground">
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="font-bold text-primary text-lg">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
              <p className="text-sm font-semibold text-primary">{priceNote}</p>
            </div>
          </div>

          {/* Enhanced Timeframes */}
          <div className=" /80 backdrop-blur-sm rounded-lg p-6 shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700">Timeframes</h3>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50/50 to-transparent rounded-lg mb-4">
              <p className="text-foreground font-medium leading-relaxed">{data.timeframe}</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-yellow-800 mb-1">Important Note:</p>
                  <p className="text-sm text-yellow-700 leading-relaxed">{data.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}