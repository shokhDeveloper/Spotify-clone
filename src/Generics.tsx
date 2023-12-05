import React from "react";
interface GenericsProps<T extends {id: number}> {
    array: T[] 
}
export const Generics:React.FC<GenericsProps<{id: number, first: string}>> = ({array}):JSX.Element => {
    return(
        <ul>
            {array?.map((item) => {
                return(
                    <h1 key={item.id}>{item.first}</h1>
                )
            })}
        </ul>
    )
}