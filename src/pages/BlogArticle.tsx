import { useNavigate, useParams } from 'react-router-dom';
import { blogs } from './Home';
import { useEffect, useState } from 'react';

export type BlogArticleProps = {
  img? : string;
  title: string; 
  content? : string;
  index : number
}
function BlogArticle() {
  const params = useParams();
  // const id = parseInt(params.id as string);
  const  [id , setId] = useState(parseInt(params.id as string))
  const [currentBlog , setCurrentBlog] = useState<BlogArticleProps | undefined>(blogs.find((item : BlogArticleProps) => item.index === id))
  const navigate = useNavigate();
  


  const redirectBlog = (idx : number) => {
   
    if (idx <= blogs.length) {
      console.log(idx);
      navigate(`/blog/${id}`)
      setCurrentBlog(blogs.find((item : BlogArticleProps) => item.index === id))
    } 
  }
    
    useEffect(() => {
      redirectBlog(id);
    }, [id])
    

  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4"> {currentBlog?.title} </h1>
      <img src={currentBlog?.img} alt="Avantages du massage régulier" className="w-full rounded-md shadow-md mb-6" />
      <div className="blog-content text-gray-700 leading-relaxed">
        {/* <p className="mb-4">Le massage régulier offre de nombreux avantages pour la santé physique et mentale. En plus de détendre les muscles tendus et de soulager les douleurs, il peut également améliorer la circulation sanguine, réduire le stress et l'anxiété, et favoriser un meilleur sommeil.</p>
        <p className="mb-4">Intégrer des séances de massage régulières dans votre routine de bien-être peut contribuer significativement à une meilleure qualité de vie. Que vous optiez pour un massage suédois, un massage profond des tissus ou une autre technique, les bienfaits cumulatifs sont indéniables.</p>
        <p className="mb-4">Considérez le massage non seulement comme un luxe occasionnel, mais comme un investissement dans votre santé à long terme.</p> */}
        <p className="mb-4">  
          {
            currentBlog?.content
          }
        </p>
      </div>
      <div className="navigation flex justify-between mt-8">
        <a onClick={(e)=>{e.preventDefault(); navigate(-1)}} className="text-rose-600 hover:text-rose-800">← Retour au blog</a>
        <a onClick={(e)=>{e.preventDefault(); setId(id+1); }} className="text-rose-600 hover:text-rose-800">Article suivant →</a>
      </div>
    </div>
  );
}

export default BlogArticle;