import {Configurable, Settings} from "./settings/settings";
import {SCSettings} from "./settings/scSettings";
import {Algorithm} from "./algorithms/algorithms";
import {AlgorithmName, loadFromSettings} from "./algorithms/loader";

export interface PluginConcrete {
    createConcreteSettingsTab(): PluginSettingTabConcrete;

    // exposed obsidian.Plugin interface
    loadData(): Promise<any>;

    saveData(data: any): Promise<any>;

    addSettingTab(settingTab: PluginSettingTabConcrete): void;
}

export class SmartConnectionsPluginBase implements Configurable {
    /**
     * This class is an adapter (? todo: check if trullly an adapter) to facilitate unit-testing with Obsidian.
     * @private
     */
    private readonly pluginConcrete: PluginConcrete;
    scSettingsKey: string = "scSettings";
    algorithmSettingsKey: string = "algorithmSettings";
    scSettings: SCSettings;
    algorithm: Algorithm;

    constructor(pluginConcrete: PluginConcrete) {
        this.pluginConcrete = pluginConcrete;
    }

    get algorithmName(): string {
        return AlgorithmName[this.scSettings.algorithm];
    }

    async onLoad() {
        const settingsJSON = await this.pluginConcrete.loadData();
        const scSettingsJSON = (
            this.scSettingsKey in settingsJSON ? settingsJSON[this.scSettingsKey]: {}
        );
        this.scSettings = new SCSettings(scSettingsJSON);
        const algorithmSettingsJSON = (
            this.algorithmSettingsKey in settingsJSON
                ? settingsJSON[this.algorithmSettingsKey]: {}
        );
        this.algorithm = loadFromSettings(this.scSettings.algorithm, algorithmSettingsJSON);
        this.addSettingTab();
    }

    async saveSettings() {
        await this.pluginConcrete.saveData(this.scSettings);
    }

    addSettingTab() {
        const concreteSettingsTab = this.pluginConcrete.createConcreteSettingsTab();
        return this.pluginConcrete.addSettingTab(concreteSettingsTab);
    }
}

export interface PluginSettingTabConcrete {
    containerEl: HTMLElement;
}

export class SmartConnectionsSettingsTabBase {
    private readonly pluginConcrete: PluginConcrete;
    private readonly settingsTabConcrete: PluginSettingTabConcrete;

    constructor(
        settingsTabConcrete: PluginSettingTabConcrete,
        pluginConcrete: PluginConcrete,
    ) {
        this.settingsTabConcrete = settingsTabConcrete;
        this.pluginConcrete = pluginConcrete;
    }

    displaySettings() {
        const {
            containerEl
        } = this.settingsTabConcrete;
        containerEl.empty();
    }
}
