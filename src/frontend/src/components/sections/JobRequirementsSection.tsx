import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MessageSquare, Target, Users2, Laptop, TrendingUp } from 'lucide-react';

export default function JobRequirementsSection() {
  const requirements = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Minimum high school diploma (12th pass). Bachelor\'s degree preferred for career advancement opportunities.'
    },
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Strong verbal and written communication abilities to explain credit card features clearly and build customer rapport.'
    },
    {
      icon: Laptop,
      title: 'Technical Skills',
      description: 'Basic computer proficiency and familiarity with CRM tools for managing applications and customer data.'
    },
    {
      icon: Users2,
      title: 'Customer Handling',
      description: 'Confidence in engaging with customers, addressing concerns, and providing excellent service throughout the sales process.'
    },
    {
      icon: Target,
      title: 'Target-Driven',
      description: 'Ability to work under pressure, meet monthly sales targets, and maintain consistent performance metrics.'
    },
    {
      icon: TrendingUp,
      title: 'Professional Attitude',
      description: 'Positive mindset, honesty, integrity, and willingness to work in field sales or tele-calling environments.'
    }
  ];

  return (
    <section id="job-requirements" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Credit Card Sales — Job Requirements
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our team of financial professionals. Here's what we're looking for in our credit card sales representatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {requirements.map((requirement, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-soft">
              <CardContent className="flex flex-col items-start gap-4 p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <requirement.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{requirement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{requirement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Sales experience is helpful but not always required. We provide comprehensive training to help you succeed in your role.
          </p>
        </div>
      </div>
    </section>
  );
}
