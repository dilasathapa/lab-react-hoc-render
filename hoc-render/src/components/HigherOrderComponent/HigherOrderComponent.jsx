import React, {useState} from "react";

const HigherOrderComponent =(PassedComponent)=>{
    const NewComponent =()=>{

        let [count, setCount] = useState(0);

        const increaseCount =()=>{
            setCount(count+1);
        }
        return (
            <>
                <PassedComponent count={count} increaseCount={increaseCount} />
            </>
        )
    }
    return NewComponent;

}

export default HigherOrderComponent;