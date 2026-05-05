import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import Home from './Home';
import Services from './Services';
import Templates from './Template';
import Reviews from './Reviews';
import Blog from './Blog';
import Pricing from './pricing';
import About from './About';
import Credentials from './Credential';
import Contact from './contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}