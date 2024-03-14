import React from "react";

function LikePostRender(props){
    return (
        <>
            <button onClick={props.incrementCount}>Like Post {props.count}</button>
        </>
    )
}

export default LikePostRender;