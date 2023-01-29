import {SCSettings} from "../../settings/scSettings";

export type OpenAISettings = {
    apiKey: string,
    fileExclusions: string[],
    folderExclusions: string[],
    headerExclusions: string[],
    pathOnlyMatchers: string[],
    showFullPath: boolean,
    logRender: boolean,
    logRenderFiles: boolean,
    skipSections: boolean,
} & SCSettings;