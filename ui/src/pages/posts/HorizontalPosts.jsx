import Post from './Post';
import 'swiper/css';
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useEffect, useState } from "react";
import CrossButton from "./../../components/CrossButton"

const HorizontalPosts =({data,isPostClicked,setIsPostClicked})=>{
   const [swiper,setSwiper]=useState(null)
   useEffect(()=>{
    console.log("useffect",{isPostClicked})
    if(swiper && isPostClicked){
      swiper.slideTo(isPostClicked,0)
    }
   })
return(
   <div className=" relative">
    <CrossButton onClick={()=>{setIsPostClicked(false)}}/>
     <Swiper
    modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1
      }
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {data?.map((meme,i)=>{
            return <SwiperSlide key={meme.id}> <Post post={meme}/> 
        </SwiperSlide>})}
      
    </Swiper>
   </div>
    
)
}

export default HorizontalPosts