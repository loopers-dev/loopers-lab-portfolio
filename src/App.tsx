import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SplitReveal from './components/SplitReveal';
import TopGlowOverlay from './components/TopGlowOverlay';
import { LoadingProvider } from './context/LoadingContext';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <Layout>
                            <ServicesPage />
                        </Layout>
                    }
                />
                <Route
                    path="/process"
                    element={
                        <Layout>
                            <ProcessPage />
                        </Layout>
                    }
                />
                <Route
                    path="/work"
                    element={
                        <Layout>
                            <WorkPage />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <AboutPage />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <ContactPage />
                        </Layout>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <LoadingProvider>
            <SplitReveal>
                <Router>
                    <TopGlowOverlay />
                    <AnimatedRoutes />
                </Router>
            </SplitReveal>
        </LoadingProvider>
    );
}

export default App;


