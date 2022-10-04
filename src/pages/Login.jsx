import {LoginForm} from "../components/LoginForm"
import {Col} from "react-bootstrap"
import "../scss/login.scss"
import { useFetchers } from "react-router-dom"

export const Login = () => {
    const Fetchers = useFetchers()
    console.log(Fetchers)
    return (
        <Col className="d-flex flex-column mx-0 px-0">
            <div className="headerContainer">
                <div className="header">
                    <i className="icon-clompassTest3 icon"><i className="path1 icon-clompassTest3"></i><i className="path2 icon-clompassTest3"></i><i className="path3 icon-clompassTest3"></i><i className="path4 icon-clompassTest3"></i><i className="path5 icon-clompassTest3"></i><i className="path6 icon-clompassTest3"></i><i className="path7 icon-clompassTest3"></i></i>
                    <div className="name">
                        Clompass
                    </div>
                </div>
                
            </div>
            <div className="loginFormContainer">
                <LoginForm />
            </div>
            
                {Fetchers.length && Fetchers[0].data
                    ?   <div className="errorContainer">
                            <div className="error">
                                <div className="errorTitle">
                                    {`Error ${Fetchers[0].data.status}`}
                                </div>
                                <div className="errorMessage">
                                    {Fetchers[0].data.message}
                                </div>
                            </div> 
                        </div>
                    :   null
                }
        </Col>
    )
}