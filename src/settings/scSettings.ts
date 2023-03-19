import {ArraySetting, Settings, StringSetting} from "./settings";
import {JSONObject} from "../commonTypes";
import {AlgorithmName} from "../algorithms/loader";

export class SCSettings extends Settings {
    algorithm: StringSetting = {
        settingName: "algorithm",
        settingValue: undefined,
        placeholder: "",
        description: "The algorithm to run",
        defaultValue: AlgorithmName.OpenAI.toString(),
    };

    fileExclusions: ArraySetting = {
        settingName: "file exclusions",
        settingValue: undefined,
        placeholder: "drawings,prompts/logs",
        description: "Comma-separated matchers for excluded files and folders.",
        defaultValue: [],
    };

    init(settingsData: JSONObject) {
        this.setSettingWithJSON(this.algorithm, settingsData);
    }

    renderSettings(containerEl: HTMLElement) {
        containerEl.createEl(
            "h2",
            {
                text: "Smart Connections Settings"
            }
        );
    }
}
