import React from "react";

const LikePostHoc =(props)=>{
    let {count, incrementCount} = props;
    return (
        <>
        <button onClick={incrementCount}>Like Post Hoc {count}</button>
        </>
    )
}

export default LikePostHoc;

