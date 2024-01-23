import React from "react";

const LikeImageHoc =(props)=>{
    let {count, increaseCount} = props;
    return (
        <>
        <button onClick={increaseCount} >Like Image Hoc {count}</button>
        </>
    )
}

export default LikeImageHoc;