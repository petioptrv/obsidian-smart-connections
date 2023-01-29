import {JSONObject} from "../commonTypes";

export interface Settings extends JSONObject { }

export interface Configurable {
    settings: Settings
}

export const loadSettings = async (
    configurable: Configurable,
    defaultSettings: Settings,
    loadFunction: () => Promise<Settings>,
): Promise<Settings> => {
    const loaded = await loadFunction();
    return Object.assign({}, defaultSettings, loaded);
}
