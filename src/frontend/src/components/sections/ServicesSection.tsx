import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Users, TrendingUp } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: 'Credit Card Sales',
      description:
        'Expert guidance in credit card applications and sales. We help customers find the right credit solutions tailored to their needs and financial goals.'
    },
    {
      icon: Users,
      title: 'Client Consultation',
      description:
        'Personalized consultations to understand your financial situation and recommend the best credit card products that align with your lifestyle and spending habits.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Growth',
      description:
        'Strategic advice on building credit, maximizing rewards, and leveraging credit cards as tools for financial growth and stability.'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive credit card solutions designed to meet your unique financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-soft"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="/assets/generated/trustline-icons-set.dim_768x256.png"
            alt="Service icons"
            className="mx-auto h-16 w-auto opacity-60"
          />
        </div>
      </div>
    </section>
  );
}
