import React, { useState, useEffect } from 'react';

// Import root views
import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import WhyJfPage from './pages/why-jf';
import GlobalFootprintPage from './pages/global-footprint';

// Import division modules
import ElearningIndex from './pages/e-learning/index';
import RecruitmentIndex from './pages/recruitment-staffing/index';
import FinancialConsultancyIndex from './pages/financial-consultancy/index';

// Import sub-modality views
import InstructorLedPage from './pages/e-learning/instructor-led';
import VirtualInstructorLedPage from './pages/e-learning/virtual-instructor-led';
import CustomElearningPage from './pages/e-learning/custom-elearning';
import MicrolearningPage from './pages/e-learning/microlearning';
import LearningConsultingPage from './pages/e-learning/learning-consulting';

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // Listen for history state modifications
        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    // Simple clean router switcher matching your script file architecture
    switch (currentPath) {
        case '/':
        case '/index.html':
            return <IndexPage />;
        case '/about':
            return <AboutPage />;
        case '/contact':
            return <ContactPage />;
        case '/why-jf':
            return <WhyJfPage />;
        case '/global-footprint':
            return <GlobalFootprintPage />;

        // Divisions
        case '/e-learning':
            return <ElearningIndex />;
        case '/recruitment-staffing':
            return <RecruitmentIndex />;
        case '/financial-consultancy':
            return <FinancialConsultancyIndex />;

        // E-learning sub-paths
        case '/e-learning/instructor-led':
            return <InstructorLedPage />;
        case '/e-learning/virtual-instructor-led':
            return <VirtualInstructorLedPage />;
        case '/e-learning/custom-elearning':
            return <CustomElearningPage />;
        case '/e-learning/microlearning':
            return <MicrolearningPage />;
        case '/e-learning/learning-consulting':
            return <LearningConsultingPage />;

        default:
            return (
                <div style={{ padding: '40px', textAlign: 'center' }}>
                    <h2>404 — Section Route Not Found</h2>
                    <a href="/">Return to Home Hub Hub</a>
                </div>
            );
    }
}