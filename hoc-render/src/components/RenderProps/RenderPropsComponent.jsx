import React, { useState } from "react";

function RenderPropsComponent(props){

    const [count, setCount] = useState(0);

    function incrementCount(){
        setCount(count+1)
    }
    return (
        <>
            {props.render(count, incrementCount)}
        </>
    )
}

export default RenderPropsComponent