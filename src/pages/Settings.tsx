import SettingsForm from "../components/SettingsForm/SettingsForm"
import { ISwitch } from "../types/types";

const Settings = ({toggleTheme}:ISwitch)=> {
	return (
        <SettingsForm toggleTheme= {toggleTheme}/>
	);
}

export default Settings;