import { useState, useEffect, useContext } from "react"
import { PersonList } from "./Person";
import { Person } from "./PersonTypes/PersonType";
import { Counter } from "./Counter";
import { Context, myContext } from "./Context";
import { ReduxCounter } from "./ReduxCount/ReduxCount";
import { Timer } from "./Timer";
import { CustonBtn } from "./CustomBtn";
import { ComponentProps } from "./ComponentProps";
import { Generics } from "./Generics";

function App() {
  const [isLoggedIt, setIsLoggedIt] = useState<null | boolean>()
  const [user, setUser] = useState<Person[] | null>([] as Person[])
  const [token, setToken] = useState<string | null>()
  const {modal, setModal} = useContext(Context)
  const handleLogin = (): void => {
    const user: Person[] = [{
      name: "Shohijahon",
      lastname: "Musinkulov",
      email: "shohijahonmusinkulov@gmail.com"
    }]
    setUser(user)
  }
  const handleToken = (tokenArray: (string | number)[]): string => {
    let result: string = ''
    for (let i: number = 0; i < tokenArray?.length; i++) {
      result += tokenArray[Math.floor(Math.random() * tokenArray?.length)]
    }
    return result
  }
  const handleLogOut = (): void => {
    setUser(null)
    setToken(null)
    setIsLoggedIt(null)
   }
  useEffect(() => {
    if (user) {
      let tokenArray: (string | number)[] = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index))
      let token = handleToken(tokenArray)
      setToken(token)
      setIsLoggedIt(true)
    }
  }, [user])
  useEffect(() => {
    console.log(modal)
  },[modal])
  return (
    <div className="App">
      <ComponentProps variant="primary" >
    <h1> Helo</h1>
      </ComponentProps>
      <CustonBtn variant="primary" onClick={() => console.log("click")}>Leo</CustonBtn>
      {/* <Generics array={[1, 2, 3]}/>
      <Generics array={["Batman", "Superman", "Spider man"]}/> */}

      <Generics array={[
        {
        id: 1,
        first: "Batman"
      },
      {
        id: 2,
        first: "Superman",
      }
      ]}/>
      {/* <ReduxCounter/>
      <button onClick={() => setModal(!modal)}>Modal</button>
      {modal? (
        <h1>OPen modal</h1>
      ):(
        <h1>Close modal</h1>
      )}
      <PersonList />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {isLoggedIt && user?.length ? (
        <>
          {user?.map((item: Person) => {
            return (
              <>
                <h1>{item.name}</h1>
                <h1>{item.lastname}</h1>
                <h1>{item.email}</h1>
              </>
            )
          })}
        </>
      ) : (
        <>
          <h1>Login</h1>
        </>
      )}
      <Counter name=""/> */}
  <Timer/>
    
    </div>
  );
}

export default App;
