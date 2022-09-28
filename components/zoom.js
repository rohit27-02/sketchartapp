/* eslint-disable @next/next/no-img-element */
import React from "react";
import useImageZoom from "react-image-zoom-hook";
import { useState,useEffect } from "react";
 
export default function AppWithZoomCustomization({image}) {
const [left, setleft] = useState(false);

  
    const imgHeight = "1vw";
  
    const imgWidth = "4vw";
  
    const lensHeight = 100;
  
    const lensWidth = 100;
  
    const previewLensHeight = 600;
  
    const img =
      image
    const previewImg =
     image
  
    const {
      moveLens,
  
      imgDimesions,
  
      lensDimensions,
  
      previewLensDimensions,
  
      previewImgDimensions,
  
      imgContainerDimesions,
  
      imgRefCallback,
  
      meshRefCallback,
  
      imagePreviewRefCallback
    } = useImageZoom({
      imgHeight,
  
      imgWidth,
  
      lensHeight,
  
      lensWidth,
  
      previewLensHeight,
  
      img,
  
      previewImg
    });
  
    /**
  
  * Two images are involved here, user need to have a actual image and
  
  * one good quality image with higher resolution
  
  */
  
    return (
      <div className=" w-[100vw]  z-30 flex">
        <div
          className=" "
          onMouseMove={moveLens}
          onMouseLeave={()=>setleft(false)}
          onMouseEnter={()=>setleft(true)}
          style={{
            ...imgContainerDimesions,
          }}
        >
         {left && <div
            ref={meshRefCallback}
            className="mesh cursor-zoom-in"
            style={{
              ...lensDimensions,
              height:"5vw",
              width:"4vw"
            }}
          />
  }
          <img
        
            ref={imgRefCallback}
            alt="test"
            src={img}
            className="h-[100vh] w-[40vw] cursor-zoom-in"
          />
        </div>
  
       {left && <div
          className=" overflow-hidden drop-shadow-2xl backdrop-blur-2xl border-2 z-30  bg-white "
          // ref={imagePreviewRefContainer}
  
          style={{
            
            height:"45vw",
            width:"45vw"
          }}
        >
         <div className="h-[500rem]  w-[200rem]">
         <img
            ref={imagePreviewRefCallback}
            alt="test-preview"
            src={previewImg}
           
            className=" z-30"
          />
         </div>
        </div>}
      </div>
    );
  }
  
 
  