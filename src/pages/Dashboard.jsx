import {useState, useEffect} from "react"
import {Container, Form} from "react-bootstrap"
import {useLoaderData} from "react-router-dom"

export const Dashboard = () => {
    const loaderData = useLoaderData()
    return (
        <h1>
            {JSON.stringify(loaderData)}
            Dashboard
        </h1>
    )
}