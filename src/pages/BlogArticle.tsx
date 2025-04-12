import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from './Home';
import { useEffect, useState } from 'react';
// import "./../../style.css"

export type BlogArticleProps = {
  img? : string;
  title: string; 
  content? : string;
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
    <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center"> {currentBlog?.title} </h1>
      <div className="flex justify-center">
      <img src={currentBlog?.img} alt="Avantages du massage régulier" className="w-[400px] rounded-md shadow-md mb-6 max-h-[400px] mb-[20px]" />
      </div>
      <div className="blog-content text-gray-700 leading-relaxed">
        <p className="mb-4">  
          {
            currentBlog?.content
          }
        </p>
      </div>
      <div className="navigation flex justify-between mt-8">
        <a onClick={(e)=>{e.preventDefault(); prevBlog(parseInt(id as string)-1);}} className="text-rose-600 hover:text-rose-800">← Article précédent</a>
        <a href="/#blog" className="text-rose-600 hover:text-rose-800">Retour au blog</a>
        <a onClick={(e)=>{e.preventDefault(); nextBlog(parseInt(id as string)+1); }} className="text-rose-600 hover:text-rose-800">Article suivant →</a>
      </div>
    </div>
  );
}

export default BlogArticle;