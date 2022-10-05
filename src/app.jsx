import { Fragment } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { useLocation, useOutlet, createBrowserRouter, RouterProvider, redirect } from "react-router-dom"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { Dashboard } from "./pages/Dashboard"
import { Sidebar } from "./pages/Sidebar"
import { Login } from "./pages/Login"
import { SchedulePage } from "./pages/Schedule"
import { Settings } from "./pages/Settings"
import { Spinner } from "./components/Spinner"
import { LearningTasksPage } from "./pages/LearningTasks"
import { LearningTask } from "./pages/LearningTask"
import { Communications } from "./pages/Communications"
import { Subjects } from "./pages/Subjects"
import { Subject } from "./pages/Subject"
import { Profile } from "./pages/Profile"
import { incNavigationIndex, addHistory, getNavigationIndex, resetIndex } from "./context/data"
import "./scss/index.scss"

const Layout = () => {
    const currentOutlet = useOutlet()
    const location = useLocation()

    return (
        <Fragment>
            <div className="sidebar-container d-flex" >
                <Sidebar />
            </div>
                <SwitchTransition>
                    <CSSTransition
                        key={location.pathname}
                        timeout={300}
                        classNames="test-transition"
                    >   
                        <div className="outletContainer">
                            {currentOutlet}
                        </div>
                    </CSSTransition>
                </SwitchTransition>  
        </Fragment>

    )
}

const Page = () => {
    const currentOutlet = useOutlet()
    const location = useLocation()
    return (
        <div className="mx-0 min-vh-100 min-vw-100"> 
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={location.pathname === "/login" ? "login" : "notlogin"}
                    timeout={300}
                    classNames="test-transition"
                >
                    {currentOutlet}
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

const routes = [
    {
        path: "/",
        element: <Page />,
        loader: async ({request}) => {
            console.log(request.url)
            let url = new URL(request.url)
            if (url.pathname === "/login") {
                resetIndex()
                return
            } 
            if (getNavigationIndex() !== 0) return
            let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/checkAuth`, {
                credentials: "include"
            })
            if (res.status !== 200) return redirect("/login")
            incNavigationIndex()
            //if (res.status !== 200) throw new Response(res.statusText, {status: res.status})

        },
        children: [
            {
                path: "/*",
                element: <Layout />,
                action: async ({request}) => {
                    const data = await request.formData()
                    const logout = data.get("logout")
                    console.log(logout)
                    if (!logout) return 
                    await fetch(`${process.env.REACT_APP_BACKEND_URL}/signout`, {
                        credentials: "include"
                    })
                    redirect("/login")
                },
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                        //loader: async () => {
                        //    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get/dashboard`, {
                        //        credentials: "include"
                        //    })
                        //} 
                    },
                    {
                        path: "schedule",
                        element: <SchedulePage />,
                    },
                    {
                        path: "learningTasks",
                        element: <LearningTasksPage />,
                        children: [
                            {
                                path: ":learningTask",
                                element: <LearningTask />
                            }
                        ]
                    },
                    {
                        path: "communications",
                        element: <Communications />
                    },
                    {
                        path: "subjects",
                        element: <Subjects />
                    },
                    {
                        path: "subjects/:subject",
                        element: <Subject />
                    },
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "settings",
                        element: <Settings />,
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />,
                action: async ({params, request}) => {
                    let formdata = await request.formData()
                    let username = formdata.get("username")
                    let password = formdata.get("password")
                    let type = formdata.get("type")
                    const data = new URLSearchParams({username: username, password: password, type: type ? "email" : "ssid"})
                    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
                        method: "POST",
                        credentials: "include",
                        body: data
        
                    })
                    if (res.status !== 200) {
                        const json = JSON.parse(await (await res.blob()).text())
                        console.log({message: json.error, status: res.status})
                        return {message: json.error, status: res.status}
                    } else {
                       return redirect("/")
                    }
                }
            }
            
        ]
    }
]


const router = createBrowserRouter(routes)

export const App = () => {
    return (
        <RouterProvider router={router} fallbackElement={<Spinner />} />
    )
}


