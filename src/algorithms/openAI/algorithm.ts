import {Algorithm} from "../algorithms";
import {JSONObject} from "../../commonTypes";
import {OpenAISettings} from "./settings";
import {Settings} from "../../settings/settings";

export class OpenAIAlgorithm extends Algorithm {
    initSettings(settingsData: JSONObject): Settings {
        return new OpenAISettings(settingsData);
    }
}
