import { Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import { Modal } from "react-bootstrap"
import { getSingleLearningTask } from "../context/data" 
import "../scss/learningTask.scss"

export const LearningTask = () => {
    const [show, setShow] = useState(true)
    const params = useParams()
    console.log(params)
    const learningTask = getSingleLearningTask(params.learningTask)
    console.log(learningTask)
    return (
        <Fragment>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title>{learningTask.name}</Modal.Title>
                </Modal.Header>
            </Modal>
            {JSON.stringify(params)}
        </Fragment>
    )
}