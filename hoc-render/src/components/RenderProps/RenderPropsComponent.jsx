import React from "react";
import { useState } from "react";

const RenderPropsComponent =(props)=>{
    let [count, setCount] = useState(0)

    const increaseCount =()=>{
        setCount(count+1)
    }
    return (
        <>
          {props.render(count, increaseCount)}
        </>
    )
}

export default RenderPropsComponent;