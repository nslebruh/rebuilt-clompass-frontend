import "../scss/settings.scss"
import { getArrayOfSettingIds } from "../context/data"
import { Setting } from "../components/Setting"

export const Settings = () => {
    const settings = getArrayOfSettingIds()
    console.log(settings)
    return (
        <div className="settingsContainer">
            <div className="settingsContent">
                <div className="settingsHeader">
                    Settings
                </div>
                <div className="settingsList">
                {settings.map((val, i) => <Setting id={val} key={i} int={i}/>)}
                </div>
            </div>
        </div>
    )
}