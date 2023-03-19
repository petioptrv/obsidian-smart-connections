import {JSONObject} from "../commonTypes";
import {Algorithm} from "./algorithms";
import {OpenAIAlgorithm} from "./openAI/algorithm";

export enum AlgorithmName {
    OpenAI = "OpenAI"
}

export function loadFromSettings(algorithmName: AlgorithmName, settingsData: JSONObject): Algorithm {
    let algorithm: Algorithm;
    switch (algorithmName) {
        case AlgorithmName.OpenAI.toString(): {
            algorithm = new OpenAIAlgorithm(settingsData);
            break;
        }
        default: {
            throw Error(`Unknown algorithm ${algorithmName}`);
        }
    }
    return algorithm;
}