import { useNavigate, useParams } from 'react-router-dom';
import { blogs, BlogArticleProps } from './blogData';
import { useEffect, useState } from 'react';
import "./../../style.css";

function BlogArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentBlog, setCurrentBlog] = useState<BlogArticleProps | null>(null);

  useEffect(() => {
    const blogId = parseInt(id || "", 10);
    const foundBlog = blogs.find(blog => blog.index === blogId);

    if (foundBlog) {
      setCurrentBlog(foundBlog);
    } else {
      // Redirection ou message d'erreur si l'article est introuvable
      navigate("/not-found", { replace: true });
    }
  }, [id, navigate]);

  const nextBlog = () => {
    if (currentBlog && currentBlog.index < blogs.length) {
      navigate(`/blog/${currentBlog.index + 1}`);
    }
  };

  const prevBlog = () => {
    if (currentBlog && currentBlog.index > 1) {
      navigate(`/blog/${currentBlog.index - 1}`);
    }
  };

  if (!currentBlog) return null; // Ou un spinner de chargement

  return (
    <div className="custom-container py-24 px-4 sm:px-6 lg:px-8 shadow-md rounded-lg max-w-3xl mx-auto mb-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center custom-h1">{currentBlog.title}</h1>
      <div className="flex justify-center custom-image-wrapper">
        <img src={currentBlog.img} alt={currentBlog.title} className="rounded-md shadow-md blog-image" />
      </div>
      <div className="blog-content text-gray-700 leading-relaxed">
        <p>{currentBlog.content}</p><br/>
        <p>{currentBlog.contentP2}</p><br/>
        <p>{currentBlog.contentP3}</p>
      </div>
      <div className="navigation flex justify-between items-center gap-4 flex-wrap custom-navigation mt-8">
        <button
          onClick={(e) => { e.preventDefault(); prevBlog(); }}
          className={`nav-link px-4 py-2 rounded-md border transition-colors duration-200 ${
            currentBlog.index === 1 
              ? "text-gray-400 border-gray-300 cursor-not-allowed" 
              : "text-rose-600 border-rose-600 hover:text-rose-800 hover:border-rose-800"
          }`}
          disabled={currentBlog.index === 1}
        >
          ← Article précédent
        </button>

        <a href="/#blog" className="nav-link text-rose-600 hover:text-rose-800 text-base">
          Retour à l'accueil
        </a>

        <button
          onClick={(e) => { e.preventDefault(); nextBlog(); }}
          className={`nav-link px-4 py-2 rounded-md border transition-colors duration-200 ${
            currentBlog.index === blogs.length 
              ? "text-gray-400 border-gray-300 cursor-not-allowed" 
              : "text-rose-600 border-rose-600 hover:text-rose-800 hover:border-rose-800"
          }`}
          disabled={currentBlog.index === blogs.length}>
          Article suivant →
        </button>
    </div>
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Commentaires</h2>
      <p className="text-gray-700">Aucun commentaire pour le moment.</p>
    </div>
    </div>
  );
}

export default BlogArticle;
