/* tslint:disable */
/* eslint-disable */
/**
 * Lob
 * The Lob API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and uses HTTP response codes to indicate any API errors. <p> Looking for our [previous documentation](https://lob.github.io/legacy-docs/)?
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: lob-openapi@lob.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as Models from "./index";

import { CountryExtended } from "./country-extended";

/**
 *
 * @export
 * @class IntlSuggestions
 */
export class IntlSuggestions {
  constructor(input?: any) {
    if (typeof input?.primary_number_range !== "undefined") {
      this.primary_number_range = input.primary_number_range;
    }
    if (typeof input?.primary_line !== "undefined") {
      this.primary_line = input.primary_line;
    }
    if (typeof input?.city !== "undefined") {
      this.city = input.city;
    }
    if (typeof input?.state !== "undefined") {
      this.state = input.state;
    }
    if (typeof input?.country !== "undefined") {
      this.country = input.country;
    }
    if (typeof input?.zip_code !== "undefined") {
      this.zip_code = input.zip_code;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * The primary number range of the address that identifies a building at street level.
   * @type {string}
   * @memberof IntlSuggestions
   */
  "primary_number_range": string;

  /**
   * The primary delivery line (usually the street address) of the address. Combination of the following applicable `components` (primary number & secondary information may be missing or inaccurate): * `primary_number` * `street_predirection` * `street_name` * `street_suffix` * `street_postdirection` * `secondary_designator` * `secondary_number` * `pmb_designator` * `pmb_number`
   * @type {string}
   * @memberof IntlSuggestions
   */
  "primary_line": string;

  /**
   *
   * @type {string}
   * @memberof IntlSuggestions
   */
  "city": string;

  /**
   * The [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) two letter code for the state.
   * @type {string}
   * @memberof IntlSuggestions
   */
  "state": string;

  /**
   *
   * @type {CountryExtended}
   * @memberof IntlSuggestions
   */
  "country": CountryExtended;

  /**
   * A 5-digit zip code. Left empty if a test key is used.
   * @type {string}
   * @memberof IntlSuggestions
   */
  "zip_code": string;

  /**
   * Value is resource type.
   * @type {string}
   * @memberof IntlSuggestions
   */
  "object"?: IntlSuggestionsObjectEnum;

  public toJSON() {
    let out = {};
    for (const [key, value] of Object.entries(this)) {
      out = Object.assign({}, out, {
        [key[0] === "_" ? key.substr(1, key.length) : key]: value,
      });
    }
    return out;
  }
}

/**
 * @export
 * @enum {string}
 */
export enum IntlSuggestionsObjectEnum {
  IntlAutocompletion = "intl_autocompletion",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
