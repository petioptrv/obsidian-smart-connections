import {App, Plugin, Plugin_2, PluginManifest, PluginSettingTab} from "obsidian";
import {
    PluginConcrete,
    PluginSettingTabConcrete,
    SmartConnectionsPluginBase,
    SmartConnectionsSettingsTabBase
} from "./src/plugin";

export default class SmartConnectionsPlugin extends Plugin implements PluginConcrete {
    base: SmartConnectionsPluginBase;

    constructor(app: App, manifest: PluginManifest) {
        super(app, manifest);
        this.base = new SmartConnectionsPluginBase(this);
    }

    async onload() {
        await this.base.onLoad();
    }

    createConcreteSettingsTab(): PluginSettingTabConcrete {
        return new SmartConnectionsSettingsTab(this.app, this);
    }
}

export class SmartConnectionsSettingsTab
    extends PluginSettingTab implements PluginSettingTabConcrete {
    base: SmartConnectionsSettingsTabBase;

  constructor(app: App, plugin: Plugin_2) {
    super(app, plugin);
    this.base = new SmartConnectionsSettingsTabBase(this, plugin);
  }

  display() {
      this.base.display();
  }
}
