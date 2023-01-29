import {Configurable, loadSettings} from "./settings/settings";
import {SCSettings} from "./settings/scSettings";
import {DEFAULT_SETTINGS} from "../data/defaultSettings.json";

export default class SmartConnectionsPluginBase implements Configurable {
    settings: SCSettings;

    async onload() {
        // Configure resources needed by the plugin.

        this.settings = await loadSettings(this, DEFAULT_SETTINGS , this.loadData) as SCSettings;
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    // we mock the Plugin interface to allow unit-testing (see https://github.com/obsidianmd/obsidian-api/issues/13)
    async loadData(): Promise<any> {
        throw  Error("Not implemented");
    }

    async saveData(data: any): Promise<any> {
        throw  Error("Not implemented");
    }
}
