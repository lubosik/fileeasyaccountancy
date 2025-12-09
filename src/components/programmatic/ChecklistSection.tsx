import { CheckCircle } from 'lucide-react';

interface ChecklistItem {
  step: number;
  title: string;
  description: string;
  action: string;
}

interface ChecklistSectionProps {
  items: ChecklistItem[];
  title?: string;
  className?: string;
}

export default function ChecklistSection({
  items,
  title = 'Step-by-Step Checklist',
  className = ''
}: ChecklistSectionProps) {
  return (
    <section className={`py-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>

      <div className="space-y-6">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const bgGradient = isEven
            ? "from-blue-50/50 to-primary/5"
            : "from-green-50/50 to-primary/10";

          return (
            <div
              key={index}
              className={`relative group bg-gradient-to-r ${bgGradient} border border-border rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-50" />

              <div className="relative flex items-start space-x-5">
                {/* Enhanced step number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    <div className="absolute -inset-1 bg-primary/20 rounded-full -z-10 group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Enhanced action box */}
                  <div className=" /80 backdrop-blur-sm border-2 border-primary/20 p-4 rounded-lg shadow-sm" style={{ backgroundColor: '#F8F8F5' }}>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-700 mb-1">Next Action:</p>
                        <p className="text-sm text-foreground font-medium">{item.action}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}