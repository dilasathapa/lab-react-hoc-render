import React from "react";

const LikePostHoc =(props)=>{
    let {count, increaseCount} = props;
    return (
        <>
        <button onClick={increaseCount}>Like Post Hoc {count}</button>
        </>
    )
}

export default LikePostHoc;