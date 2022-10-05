import create from "zustand"


const objectToArray = (obj) => {
    console.log(obj)
    let keys = Object.keys(obj)
    let arr = [];
    for (var i = 0; i < keys.length; i++) {
        arr.push(obj[keys[i]]);
    }
    return arr

}

export const historyStore = create((set) => ({
    history: [],
    navigationIndex: 0,
}))

export const incNavigationIndex = () => set((state) => ({navigationIndex: state.navigationIndex + 1}))

export const getNavigationIndex = () => historyStore.getState().navigationIndex

export const resetIndex = () => historyStore.setState({navigationIndex: 0})


export const useEventStore = create((set) => ({
    events: {},
}))

export const useLearningTaskStore = create((set, get) => ({
    learningTasks: {1: {name: "test"}},
    learningTasksArray: () => objectToArray(get().learningTasks),
    add: (id, obj) => set((state) => ({
        learningTasks: {
            ...state.learningTasks, [id]: obj
        }
    }))
}))

export const useSubjectsStore = create((set) => ({
    subjects: {},
}))

export const useProfileStore = create((set) => ({
    profile: {},
}))

export const useSettingsStore = create((set) => ({
    settings: {
        1: {
            name: "isTrue",
            desc: "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ",
            inputType: "switch",
            values: [true, false],
            currentValue: true

        }
    },
    addSetting: (id, {name, desc, values, currentValue, inputType}) => set((state) => ({
        settings: {
            ...state.settings,
            [id]: {
                name: name,
                desc: desc,
                inputType: inputType,
                values: [...values],
                currentValue: currentValue
            } 
        }
    })),
    removeSetting: (id) => set((state) => ({
        settings: {
            ...state.settings,
            [id]: null
        }
    })),
    updateSettingCurrentValue: (id, newValue) => set((state) => ({
        settings: {
            ...state.settings,
            [id]: {
                ...state.settings[id],
                currentValue: newValue
            } 
        }
    })),
    updateSettingProperty: (id, property, value) => set((state) => ({
        settings: {
            ...state.settings,
            [id]: {
                ...state.settings[id],
                [property]: value
            }
        }
    })),
}))

export const getArrayOfSettingIds = () => {
    return Object.keys(useSettingsStore.getState().settings);
}

export const getLearningTasks = () => {
    return useLearningTaskStore.getState().learningTasks
}

export const getArrayOfLearningTasks = () => {
    return objectToArray(useLearningTaskStore.getState().learningTasks)
}

export const getSingleLearningTask = (id) => {
    return useLearningTaskStore.getState().learningTasks[id]
}

export const getArrayOfEvents = () => {
    return objectToArray(useEventStore.getState().events)
}