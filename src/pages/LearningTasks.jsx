import { useOutlet } from "react-router-dom"
import { useLearningTaskStore } from "../context/data"
import "../scss/learningTasks.scss"

export const LearningTasksPage = () => {
    const add = useLearningTaskStore((state => state.add))
    const learningTasksArray = useLearningTaskStore((state) => state.learningTasksArray)

    const currentOutlet = useOutlet()
    return (
        <div className="learningTasksContainer">
            <h1>
                Learning tasks
            </h1>
            <div>
                {currentOutlet}
            </div>
            <button onClick={() => add(2, {id: 2, name: "test2"})}>Test</button>
            <button onClick={() => console.log(learningTasksArray())}>console.log</button>

        </div>
    )
}