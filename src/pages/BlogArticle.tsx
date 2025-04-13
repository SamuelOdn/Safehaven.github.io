import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from './Home';
import { useEffect, useState } from 'react';
import "./../../style.css"

export type BlogArticleProps = {
  img? : string;
  title: string; 
  content? : string;
  contentP2? : string;
  contentP3? : string;
  index : number
}
function BlogArticle() {
  const  {id} = useParams();
  const [currentBlog , setCurrentBlog] = useState<BlogArticleProps | undefined>()
  const navigate = useNavigate();
  


  const nextBlog = (idx : number) => {
   
    if (idx <= blogs.length) {
      navigate(`/blog/${idx}`)
    } 
  }

  const prevBlog = (idx : number) => {
   
    if (idx >= 1) {
      navigate(`/blog/${idx}`)
    } 
  }
    

    useEffect(() => {
      //console.log("params", id);
      setCurrentBlog(blogs.find((item : BlogArticleProps) => item.index === parseInt(id as string)))
    }, [id])
    
    

  
  return (
    <div className="custom-container py-24 px-4 sm:px-6 lg:px-8 shadow-md rounded-lg max-w-3xl mx-auto mb-10"> 
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center custom-h1"> {currentBlog?.title} </h1>
      <div className="flex justify-center custom-image-wrapper">
        <img src={currentBlog?.img} alt="Avantages du massage régulier" className="rounded-md shadow-md blog-image" />
      </div>
      <div className="blog-content text-gray-700 leading-relaxed">
        <p >
          { currentBlog?.content }
        </p> <br />
        <p>
          { currentBlog?.contentP2 }
        </p> <br /> 
        <p>
          { currentBlog?.contentP3 }
        </p>
      </div>
      <div className="navigation flex justify-between custom-navigation">
        <button onClick={(e)=>{e.preventDefault(); prevBlog(parseInt(id as string)-1);}} className="text-rose-600 hover:text-rose-800 nav-link">← Article précédent</button>
        <a href="/#blog" className="text-rose-600 hover:text-rose-800 nav-link">Retour à l'accueil</a>
        <button onClick={(e)=>{e.preventDefault(); nextBlog(parseInt(id as string)+1); }} className="text-rose-600 hover:text-rose-800 nav-link">Article suivant →</button>
      </div>
    </div>
  );
}

export default BlogArticle;