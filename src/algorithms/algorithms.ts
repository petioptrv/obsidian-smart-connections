import {JSONObject} from "../commonTypes";
import {Settings} from "../settings/settings";

export abstract class Algorithm {
    settings: Settings;

    constructor(settingsData: JSONObject) {
        this.settings = this.initSettings(settingsData);
    }

    abstract initSettings(settingsData: JSONObject): Settings;
}
