import React from "react";
import LikePost from "./components/LikePost";
import LikeImage from "./components/LikeImage";
import RenderPropsComponent from "./components/RenderProps/RenderPropsComponent";
import LikePostRender from "./components/RenderProps/LikePostRender";
import LikeImageRender from "./components/RenderProps/LikeImageRender";
import HigherOrderComponent from "./components/HigherOrderComponent/HigherOrderComponent";
import LikeImageHoc from "./components/HigherOrderComponent/LikeimageHOC";
import LikePostHoc from "./components/HigherOrderComponent/LikePostHOC";



function App(){

  let HOCImage = HigherOrderComponent(LikeImageHoc)
  let HOCPost = HigherOrderComponent(LikePostHoc)

  return (
    <>
     <h3>Common counter app</h3>
      <LikePost />
      <LikeImage />


      <h3>render props counter app</h3>
      <RenderPropsComponent render={(count, incrementCount)=>(
        <LikePostRender count={count} incrementCount={incrementCount} />
      )}/>
      <RenderPropsComponent render={(count, incrementCount)=>(
        <LikeImageRender count={count} incrementCount={incrementCount} />
      )}/>


      <h3>HOC</h3>
      <HOCImage />
      <HOCPost />
    </>
  )
}

export default App;