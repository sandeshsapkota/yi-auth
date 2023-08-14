import {forwardRef, useImperativeHandle, useState} from "react";

export interface ChildMethods {
    getCount: () => number;
}

interface ChildProps {
    content : string,
}



const Child =  forwardRef<ChildMethods, ChildProps>((props, ref) => {
    const {content} = props

    const [count, setCount] = useState(0);

    const getCount = () => count

    useImperativeHandle(ref, () => {
        return {
            getCount: getCount
        }
    })

    return (
        <div className={"bg-gray-600 p-10 rounded-md"}>
            {content}
        </div>
    )
})

export default Child;
