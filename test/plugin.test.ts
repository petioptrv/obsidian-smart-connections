import {jest} from "@jest/globals";
import {DEFAULT_SETTINGS} from "../data/defaultSettings.json";
import SmartConnectionsPluginBase from "../src/plugin";

describe(
    "SmartConnectionsPlugin loads and stores settings",
    () => {
      it(
          "loads the default settings when settings data is missing on onload",
          async () => {
            const loadDataMock = jest.fn(
                async (): Promise<any> => {
                  return {};
                }
            );

            const scPlugin = new SmartConnectionsPluginBase();
            console.log(DEFAULT_SETTINGS);
            scPlugin.loadData = loadDataMock;

            await scPlugin.onload();

            expect(scPlugin.settings).toStrictEqual(DEFAULT_SETTINGS)
          }
      );
    }
)

