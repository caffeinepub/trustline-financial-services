import { useContactSubmissions } from '../hooks/useContactSubmissions';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function AdminSubmissionsPage() {
  useDocumentMeta('Admin - Contact Submissions', 'View all contact form submissions');

  const { data: submissions, isLoading, error } = useContactSubmissions();

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Contact Submissions</h1>
        <p className="text-muted-foreground text-lg">
          Review all contact form submissions from potential clients
        </p>
      </div>

      {isLoading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {error && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error Loading Submissions</CardTitle>
            <CardDescription>
              There was a problem loading the contact submissions. Please try again later.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {!isLoading && !error && submissions && submissions.length === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>No Submissions Yet</CardTitle>
            <CardDescription>
              Contact form submissions will appear here once customers reach out.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {!isLoading && !error && submissions && submissions.length > 0 && (
        <div className="space-y-6">
          {submissions.map((submission, index) => (
            <Card key={index} className="hover:shadow-soft transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {submission.name}
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-1">
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {submission.email}
                      </span>
                      {submission.phone && (
                        <span className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {submission.phone}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </div>
                  <p className="text-foreground whitespace-pre-wrap bg-muted/30 p-4 rounded-md">
                    {submission.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
