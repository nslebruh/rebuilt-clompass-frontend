import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useRouteError } from "react-router-dom"

export const ErrorModal = () => {
    const [show, setShow] = useState(true)
    const error = useRouteError()
    return (
        <Modal show={show} onHide={() => setShow(!show)}>
            {JSON.stringify(error)}
        </Modal>
    )
}