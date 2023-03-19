import {JSONArray, JSONObject, JSONValue} from "../commonTypes";

export interface Configurable {
    scSettings: Settings
}

export abstract class Settings {
    constructor(settingsData: JSONObject) {
        this.init(settingsData);
    };

    abstract init(settingsData: JSONObject);

    abstract renderSettings(containerEl: HTMLElement);

    setSettingWithJSON(setting: SettingBase, settingsData: JSONObject) {
        if (setting.settingName in settingsData) {
            setting.settingValue = settingsData[setting.settingName];
        } else if (setting.defaultValue !== undefined) {
            setting.settingValue = setting.defaultValue;
        } else {
            throw Error(
                `Object ${settingsData} does not contain ${setting.settingName}.`
            );
        }
    }
}

interface SettingBase {
    settingName: string;
    settingValue: JSONValue | undefined;
    placeholder: string | boolean;

    description: string;
    defaultValue: any;
}

export interface StringSetting extends SettingBase {
    settingValue: string | undefined;
}

export interface NumberSetting extends SettingBase {
    settingValue: number | undefined;
}

export interface BooleanSetting extends SettingBase {
    settingValue: boolean | undefined;
}

export interface ArraySetting extends SettingBase {
    settingValue: JSONArray | undefined;
}

export type Setting = StringSetting | NumberSetting | BooleanSetting | ArraySetting;
