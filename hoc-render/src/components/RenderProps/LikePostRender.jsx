import React from "react";

const LikePostRender = (props) => {
    return (
        <>
            <div>
                <button onClick={props.increaseCount}>Like Post Render {props.count}</button>
            </div>
        </>
    )
}

export default LikePostRender;