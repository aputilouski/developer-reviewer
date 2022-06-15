import { useCallback,useRef } from "react";
import Post from "./Post";
import Spin from "../../components/Spin";
const VerticlePosts=({data,isPostClicked,loading,setPageNumber,setIsPostClicked})=>{
    const observer = useRef();
    const lastEntryRef = useCallback(
      node => {
        if ( loading   ) return;
        if(data.length >=100) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            setPageNumber(prev=>prev+1);
          }
        });
        if (node) {
          observer.current.observe(node);
        }
      },
      
   [data] );
    return(
        <div  className={`flex flex-col gap-3 ${isPostClicked !==false && "hidden"}`}>
          {data?.map((post, i) => {
            if (data.length == i + 1) {
              return <Post key={i} post={post} reff={lastEntryRef} onClick={()=>{setIsPostClicked(i)}} />;
            }
            return <Post key={i} post={post} onClick={()=>{console.log("first",i);setIsPostClicked(i)}}  />;
          })}
          <Spin spinning={data.length < 100}/>
      </div>
    )
}

export default VerticlePosts