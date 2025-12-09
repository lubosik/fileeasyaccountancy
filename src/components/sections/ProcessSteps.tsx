import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string;
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  className = ''
}: ProcessStepsProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center lg:text-left">
                  <div className="flex flex-col lg:items-start items-center">
                    {/* Step number and icon */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl relative z-10">
                        {step.number}
                      </div>
                      <div className="absolute inset-2 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden w-0.5 h-8 bg-border mx-auto mt-6" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}