import { Person } from "./PersonTypes/PersonType"

interface PersonItem extends Person {
    item: Person
}
export const PersonItem = ({name, lastname, email, item}:PersonItem) => {
    return(
        <li>
            <h1>{name}</h1>
            <h3>{lastname}</h3>
            <h4>{email}</h4>
        </li>
    )
}