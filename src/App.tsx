import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogArticle from "./pages/BlogArticle";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";


function App() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            {/* Header */}
            <Navbar />
            <div className="min-h-screen bg-neutral-50">
                {/* Navigation */}
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/blog/:id" element={<BlogArticle />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} /> {/* catch-all pour les autres erreurs */}
                </Routes>
                {/* Footer */}

            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;