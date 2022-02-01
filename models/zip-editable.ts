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

/**
 *
 * @export
 * @class ZipEditable
 */
export class ZipEditable {
  constructor(input?: any) {
    if (typeof input?.zip_code !== "undefined") {
      this.zip_code = input.zip_code;
    }
  }

  /**
   * A 5-digit ZIP code.
   * @type {string}
   * @memberof ZipEditable
   */
  private "_zip_code"?: string;
  public get zip_code() {
    return (this._zip_code || undefined) as string;
  }
  public set zip_code(newValue: string) {
    if (newValue && !/^\d{5}$/.test(newValue)) {
      throw new Error("Invalid zip_code provided");
    }
    this._zip_code = newValue;
  }
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */