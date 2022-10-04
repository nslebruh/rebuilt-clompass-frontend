import { useState } from "react"
import { useFetcher, useNavigation } from "react-router-dom";
import {Button, FloatingLabel, FormControl, FormCheck } from "react-bootstrap"


const LoginForm = (props) => {
    const navigation = useNavigation()
    const Fetcher = useFetcher()
    const [type, setType] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
            <Fetcher.Form className="loginForm" method="post" >
                <FloatingLabel
                    controlId="floatingInputEmail"
                    label={type ? "Email address" : "Username"}
                    className="formElement"
                >
                    <FormControl
                        name="username" 
                        type={type ? "email" : "text"} 
                        placeholder={type ? "name@example.com" : "ABC0001"} 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInputPassword"
                    label="Password"
                    className="formElement"
                >
                    <FormControl 
                        name="password" 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FloatingLabel>
                <FormCheck
                    type="switch" 
                    name="type"
                    label="Change login type"
                    placeholder={"false"}
                    value={type}
                    onChange={() => setType(!type)}
                    className="formElement"
                />
                <Button type="submit" className="formElement" disabled={navigation.state !== "idle" || Fetcher.state !== "idle"}>
                    Login
                </Button>
            </Fetcher.Form>

    )
}

export {LoginForm}