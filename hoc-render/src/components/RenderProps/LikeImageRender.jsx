import React from "react";

function LikeImageRender(props){
    let {count, incrementCount} = props;
    return (
        <>
            <button onClick={incrementCount}>Like Image {count}</button>
        </>
    )
}

export default LikeImageRender;