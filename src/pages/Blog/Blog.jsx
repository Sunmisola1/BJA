import Blogpost from "./blogpost/post";

export default function Blog() {
  return (
    <div className='blog-wrap'>
      <div className="hero bg-black h-70 md:h-80 w-full text-yellow-300 flex items-center justify-center"> 
    <h1 className='text-2xl'> Our Blog</h1> 
    </div>
    <Blogpost/>
    </div>
  )
}
