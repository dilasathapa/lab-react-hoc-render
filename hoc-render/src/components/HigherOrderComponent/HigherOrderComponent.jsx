import React, { useState } from "react";


function HigherOrderComponent(PassedComponent){

    const NewComponent =()=>{
        const [count, setCount] = useState(0)

        function incrementCount(){
            setCount(count+1)
        }

        return (
            <>
                <PassedComponent count={count} incrementCount={incrementCount} />
            </>
        )
    }
    return NewComponent;
}

export default HigherOrderComponent;