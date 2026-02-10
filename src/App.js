import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Добавили useLocation
import { useEffect } from "react"; // Добавили useEffect
import Home from "./pages/Home";
import Contact  from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Layout from "./components/layout/Layout";

// 1. Создаем компонент, который следит за URL
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // При изменении пути скроллим в начало (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const handleNavigate = (section) => {
  const element = document.getElementById(section);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Layout onNavigate={handleNavigate}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;