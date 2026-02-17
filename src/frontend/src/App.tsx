import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import HomePage from './pages/HomePage';
import AdminSubmissionsPage from './pages/AdminSubmissionsPage';
import Navbar from './components/marketing/Navbar';
import Footer from './components/marketing/Footer';
import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'admin'>('home');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'home' ? <HomePage /> : <AdminSubmissionsPage />}
      </main>
      <Footer currentPage={currentPage} onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <AppContent />
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
