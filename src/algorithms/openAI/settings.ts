import {JSONObject} from "../../commonTypes";
import {Settings, StringSetting} from "../../settings/settings";
import Obsidian from "obsidian";

export class OpenAISettings extends Settings {
    apiKey: StringSetting = {
        settingName: "API key",
        settingValue: "",
        placeholder: "Enter your API key",
        description: "Your OpenAI API key.",
        defaultValue: "",
    };

    init(settingsData: JSONObject) {
        this.setSettingWithJSON(this.apiKey, settingsData);
    }

    renderSettings(containerEl: HTMLElement) {
        containerEl.createEl(
            "h3",
            {
                text: "OpenAI Settings"
            }
        );
        new Obsidian.Setting(containerEl)
            .setName("api_key")
            .setDesc("api_key")
            .addText(
                (text) =>
                    text.setPlaceholder("Enter your api_key")
                        .setValue(this.plugin.settings.api_key)
                        .onChange(
                            async (value) => {
                                this.plugin.settings.api_key = value.trim();
                                await this.plugin.saveSettings(true);
                            }
                        )
            );
    }
}
