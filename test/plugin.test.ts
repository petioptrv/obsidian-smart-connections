import {jest} from "@jest/globals";
import {PluginConcrete, PluginSettingTabConcrete, SmartConnectionsPluginBase} from "../src/plugin";
import {Settings} from "../src/algorithms/openAI/settings";
import {AlgorithmName} from "../src/algorithms/algorithms";

class PluginMock implements PluginConcrete {
    createConcreteSettingsTab(): PluginSettingTabConcrete {
        return {containerEl: document.createElement("div")}; // todo: check if actually div
    }

    async loadData(): Promise<any> {
        throw Error("Not implemented");
    }

    async saveData(data: any): Promise<any> {
        throw Error("Not implemented");
    }

    addSettingTab(settingTab: PluginSettingTabConcrete): void {
    }
}

describe(
    "SmartConnectionsPlugin loads and stores settings",
    () => {
        it(
            "loads the default settings when settings data is missing on onload",
            async () => {
                const loadDataMock = jest.fn(
                    async (): Promise<any> => {
                        return null;
                    }
                );

                let pluginConcrete = new PluginMock();
                const scPlugin = new SmartConnectionsPluginBase(pluginConcrete);
                pluginConcrete.loadData = loadDataMock;

                await scPlugin.onLoad();

                expect(scPlugin.scSettings).toStrictEqual(new Settings())
            }
        );

        it(
            "loads the custom settings when settings data is provided on onload",
            async () => {
                const expected = {
                    algorithm: AlgorithmName.OpenAI.toString(),
                    fileExclusions: ["foo", "bar"],
                }
                const loadDataMock = jest.fn(
                    async (): Promise<any> => {
                        return expected;
                    }
                );

                let pluginConcrete = new PluginMock();
                const scPlugin = new SmartConnectionsPluginBase(pluginConcrete);
                pluginConcrete.loadData = loadDataMock;

                await scPlugin.onLoad();

                expect(scPlugin.scSettings.algorithm.settingValue).toStrictEqual(
                    expected.algorithm
                );
                expect(scPlugin.scSettings.fileExclusions.settingValue).toStrictEqual(
                    expected.fileExclusions
                );
            }
        );
    }
)

