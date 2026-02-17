import { CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'Reach out to us through our contact form. We will schedule a consultation to understand your financial needs and goals.'
    },
    {
      number: '02',
      title: 'Personalized Assessment',
      description:
        'Our experts analyze your financial profile and recommend credit card solutions that best match your requirements.'
    },
    {
      number: '03',
      title: 'Application Support',
      description:
        'We guide you through the application process, ensuring all documentation is complete and accurate for the best approval chances.'
    },
    {
      number: '04',
      title: 'Ongoing Partnership',
      description:
        'After approval, we continue to support you with advice on credit management, rewards optimization, and financial growth strategies.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process designed to get you the right credit solutions quickly
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8 group">
              <div className="shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  {step.title}
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
