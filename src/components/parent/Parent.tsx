import React, {useMemo, useState} from "react";
import Button from "@/components/button";
import classNames from "classnames";
import FocusTrap from "@/components/focus-trap";
import Child from "@/components/parent/Child";

const Parent = () => {
    const [isLight, setIsLight] = useState(true);
    const [count, setCount] = useState(2);

    return (
        <div
            className={classNames(isLight ? "bg-gray-200 text-black" : "bg-gray-300 text-white", "grid gap-4 p-10 rounded-md")}>
            <div className="flex gap-4"><Button onClick={() => setIsLight(!isLight)}>Set theme</Button>
                <Button onClick={() => setCount(count + 1)}>Count {count}</Button></div>
            { isLight ?
                <FocusTrap>
                    <div tabIndex={0}>first</div>
                    <div tabIndex={0}>second</div>
                </FocusTrap>
                : <Child content={"hi"}/>}
        </div>
    );
};


export default Parent;
