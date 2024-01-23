import './App.css';
import React from 'react';
import LikePost from './components/LikePost';
import LikeImage from './components/LikeImage';
import HigherOrderComponent from './components/HigherOrderComponent/HigherOrderComponent';
import LikeImageHoc from './components/HigherOrderComponent/LikeimageHOC';
import LikePostHoc from './components/HigherOrderComponent/LikePostHOC';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponent';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';


const LikeImageH = HigherOrderComponent(LikeImageHoc)
const LikePostH = HigherOrderComponent(LikePostHoc)


function App() {
  return (
    <div>
      <h3>Some Blog</h3>


      <div className="render">
        <RenderPropsComponent render={(count, increaseCount)=>(
          <LikeImageRender count={count} increaseCount={increaseCount}/>
        )} />
         <RenderPropsComponent render={(count, increaseCount)=>(
          <LikePostRender count={count} increaseCount={increaseCount} />
        )} />
      </div>


      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>

      <div className="hoc">
        <LikeImageH />
        <LikePostH />
      </div>


    </div>
  );
}

export default App;
