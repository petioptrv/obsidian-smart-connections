export type JSONValue =
    | string
    | number
    | boolean
//     | JSONObject
    | JSONArray;

export interface JSONArray extends Array<JSONValue> { }

export interface JSONObject {
    [x: string]: JSONValue;
}
