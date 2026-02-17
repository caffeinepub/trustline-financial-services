import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, Users2 } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We prioritize transparency and ethical practices in every client interaction'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Years of experience in financial services and credit card solutions'
    },
    {
      icon: Users2,
      title: 'Client-Focused',
      description: 'Your financial success is our primary goal and measure of achievement'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About Trustline Financial Services
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Trustline Financial Services is a leading provider of credit card sales and
                  financial consultation services. We specialize in helping individuals and
                  businesses navigate the complex world of credit products.
                </p>
                <p>
                  Our team of experienced financial professionals is dedicated to finding the right
                  credit solutions that align with your unique financial situation and goals. We
                  believe in building long-term relationships based on trust, transparency, and
                  results.
                </p>
                <p>
                  With a commitment to excellence and customer satisfaction, we have helped thousands
                  of clients achieve their financial objectives through strategic credit card
                  selection and management.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
