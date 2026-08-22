import React, { useState } from 'react';
import { ToastProvider, useToast } from './context/ToastContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AuthModal from './components/common/AuthModal';
import CheckoutModal from './components/common/CheckoutModal';
import TrialModal from './components/common/TrialModal';
import SearchModal from './components/common/SearchModal';
import ToastNotification from './components/common/ToastNotification';

// Pages
import HomePage from './pages/HomePage';
import DesignerPage from './pages/DesignerPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ShopPage from './pages/ShopPage';
import SupportPage from './pages/SupportPage';
import WhoWeArePage from './pages/WhoWeArePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import FunctionsPage from './pages/FunctionsPage';
import BenefitsPage from './pages/BenefitsPage';
import BasicsPage from './pages/BasicsPage';
import ProductVideosPage from './pages/ProductVideosPage';
import BrochurePage from './pages/BrochurePage';
import PartnersPage from './pages/PartnersPage';
import TestimonialsPage from './pages/TestimonialsPage';
import SystemRequirementsPage from './pages/SystemRequirementsPage';
import DemoVersionPage from './pages/DemoVersionPage';
import TutorialTipsPage from './pages/TutorialTipsPage';
import FAQPage from './pages/FAQPage';
import HandbookPage from './pages/HandbookPage';
import ChangelogPage from './pages/ChangelogPage';
import LegalNoticePage from './pages/LegalNoticePage';
import PrivacyStatementPage from './pages/PrivacyStatementPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import ServiceSpecificationPage from './pages/ServiceSpecificationPage';
import HowToOrderPage from './pages/HowToOrderPage';

function MainAppContent() {
  const [activeRoute, setActiveRoute] = useState('home');
  const [user, setUser] = useState(null);
  
  // Modals state
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState('standard');

  const handleNavigate = (route) => {
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const openCheckoutWithPlan = (planId) => {
    setSelectedPlanForCheckout(planId || 'standard');
    setCheckoutModalOpen(true);
  };

  const renderActivePage = () => {
    switch (activeRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            openTrialModal={() => setTrialModalOpen(true)}
            openCheckoutModal={openCheckoutWithPlan}
            user={user}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
      case 'designer':
        return (
          <DesignerPage
            user={user}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
      case 'applications':
        return (
          <ApplicationsPage
            onNavigate={handleNavigate}
            openTrialModal={() => setTrialModalOpen(true)}
          />
        );
      case 'shop':
        return (
          <ShopPage
            openCheckoutModal={openCheckoutWithPlan}
            openTrialModal={() => setTrialModalOpen(true)}
          />
        );
      case 'support':
        return (
          <SupportPage
            onNavigate={handleNavigate}
            openTrialModal={() => setTrialModalOpen(true)}
          />
        );
      case 'who-we-are':
        return <WhoWeArePage onNavigate={handleNavigate} />;
      case 'admin':
        return <AdminDashboardPage />;
      case 'functions':
        return <FunctionsPage />;
      case 'benefits':
        return <BenefitsPage />;
      case 'basics':
        return <BasicsPage />;
      case 'videos':
        return <ProductVideosPage />;
      case 'brochure':
        return <BrochurePage />;
      case 'partners':
        return <PartnersPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'system-requirements':
        return <SystemRequirementsPage />;
      case 'demo':
        return (
          <DemoVersionPage
            openTrialModal={() => setTrialModalOpen(true)}
            onNavigate={handleNavigate}
          />
        );
      case 'tutorials':
        return <TutorialTipsPage />;
      case 'faq':
        return <FAQPage />;
      case 'handbook':
        return <HandbookPage />;
      case 'changelog':
        return <ChangelogPage />;
      case 'legal-notice':
        return <LegalNoticePage />;
      case 'privacy-statement':
        return <PrivacyStatementPage />;
      case 'terms-conditions':
        return <TermsConditionsPage />;
      case 'service-specification':
        return <ServiceSpecificationPage />;
      case 'how-to-order':
        return (
          <HowToOrderPage
            openCheckoutModal={openCheckoutWithPlan}
            openTrialModal={() => setTrialModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            openTrialModal={() => setTrialModalOpen(true)}
            openCheckoutModal={openCheckoutWithPlan}
            user={user}
            openAuthModal={() => setAuthModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1329] text-gray-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Single Shared Header */}
      <Header
        user={user}
        onLogout={handleLogout}
        openAuthModal={() => setAuthModalOpen(true)}
        openSearchModal={() => setSearchModalOpen(true)}
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Single Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
        openTrialModal={() => setTrialModalOpen(true)}
      />

      {/* Global Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        openCheckout={openCheckoutWithPlan}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        selectedPlan={selectedPlanForCheckout}
        user={user}
      />

      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Global Toast System */}
      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MainAppContent />
    </ToastProvider>
  );
}
