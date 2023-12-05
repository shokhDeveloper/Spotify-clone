import {useEffect, useState} from "react"
import { Person } from "./PersonTypes/PersonType"
import { PersonItem } from "./PersonItem"
export const PersonList = () => {
    const [data, setData] = useState<Person[] | null>()
    useEffect(() => {
        if(!data?.length){
            fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data =>  setData(data))
        }
    },[data])
    return(
        <>
            {data?.length ? (
                <ul>
                    {data?.map(item => {
                        return(
                            <PersonItem name={item.name} key={item.name} lastname={item.lastname} email={item.email} item={item}/>
                        )
                    })}
                </ul>
            ): null}
        </>
    )
}