import React from "react";

const LikeImageRender = (props) => {
    return (
        <>
            <div>
                <button onClick={props.increaseCount}>Like Image Render  {props.count}  </button></div>
        </>
    )
}

export default LikeImageRender;