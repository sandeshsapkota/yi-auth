import {createContext, Dispatch, SetStateAction, useContext, useState} from "react";

interface ContextPropertiesType {
    name: string;
}

interface ContextType {
    context: ContextPropertiesType
    setContext: Dispatch<SetStateAction<ContextPropertiesType>>
}

const initialValues = {name: "Sandesh "};

const ParentContext = createContext<ContextType | null>(null);

 const ParentProvider = (props: any) => {

    const [context, setContext] = useState(initialValues)

    return (
        <ParentContext.Provider value={{context, setContext}}>
            {props.children}
        </ParentContext.Provider>
    );
};

 export const getContext  = () => {
     const context= useContext(ParentContext);
     if(!context) {
          throw new  Error("can not use outside context !!")
     }
     return context
 };

export default ParentProvider
