import "../scss/setting.scss"
import {FormCheck} from "react-bootstrap"
import { useSettingsStore } from "../context/data"
export const Setting = (props) => {
    const id = props.id
    const setting = useSettingsStore((state) => state.settings[id])
    const updateSettingCurrentValue = useSettingsStore((state) => state.updateSettingCurrentValue)
    return (
        <div className="settingContainer">

            <div className="name">
                {setting.name}
            </div>
            <div className="description">
                {setting.desc}
            </div>
                <FormCheck className="input" name={setting.name} type={setting.inputType} value={setting.currentValue} checked={setting.currentValue}  onChange={(e) => updateSettingCurrentValue(props.id, !setting.currentValue)}></FormCheck>
        </div>
    )
}