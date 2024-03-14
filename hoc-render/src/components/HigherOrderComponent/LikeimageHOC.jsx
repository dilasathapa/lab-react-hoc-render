import React from "react";

const LikeImageHoc =(props)=>{
    let {count, incrementCount} = props;
    return (
        <>
        <button onClick={incrementCount} >Like Image Hoc {count}</button>
        </>
    )
}

export default LikeImageHoc;