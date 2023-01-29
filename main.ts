import {Plugin} from "obsidian";
import SmartConnectionsPluginBase from "./src/plugin";

export default class SmartConnectionsPlugin extends Plugin {
    base: SmartConnectionsPluginBase;

    async onload() {
        this.base = new SmartConnectionsPluginBase();
        this.base.loadData = this.loadData;
        this.base.saveData = this.saveData;
        await this.base.onload();
    }
}
