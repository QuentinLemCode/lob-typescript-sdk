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

import { OptionalAddressColumnMapping } from "./optional-address-column-mapping";
import { RequiredAddressColumnMapping } from "./required-address-column-mapping";
import { UploadsMetadata } from "./uploads-metadata";

/**
 *
 * @export
 * @class UploadWritable
 */
export class UploadWritable {
  constructor(input?: any) {
    if (typeof input?.campaignId !== "undefined") {
      this.campaignId = input.campaignId;
    }
    if (typeof input?.requiredAddressColumnMapping !== "undefined") {
      this.requiredAddressColumnMapping = input.requiredAddressColumnMapping;
    }
    if (typeof input?.optionalAddressColumnMapping !== "undefined") {
      this.optionalAddressColumnMapping = input.optionalAddressColumnMapping;
    }
    if (typeof input?.metadata !== "undefined") {
      this.metadata = input.metadata;
    }
    if (typeof input?.mergeVariableColumnMapping !== "undefined") {
      this.mergeVariableColumnMapping = input.mergeVariableColumnMapping;
    }
  }

  /**
   *
   * @type {string}
   * @memberof UploadWritable
   */
  "campaignId": string;

  /**
   *
   * @type {RequiredAddressColumnMapping}
   * @memberof UploadWritable
   */
  "requiredAddressColumnMapping"?: RequiredAddressColumnMapping;

  /**
   *
   * @type {OptionalAddressColumnMapping}
   * @memberof UploadWritable
   */
  "optionalAddressColumnMapping"?: OptionalAddressColumnMapping;

  /**
   *
   * @type {UploadsMetadata}
   * @memberof UploadWritable
   */
  "metadata"?: UploadsMetadata;

  /**
   * The mapping of column headers in your file to the merge variables present in your creative. See our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/campaign-or-triggered-sends/campaign-audience-guide#step-3-map-merge-variable-data-if-applicable-7\" target=\"_blank\">Campaign Audience Guide</a> for additional details. <br />If a merge variable has the same \"name\" as a \"key\" in the `requiredAddressColumnMapping` or `optionalAddressColumnMapping` objects, then they **CANNOT** have a different value in this object. If a different value is provided, then when the campaign is processing it will get overwritten with the mapped value present in the `requiredAddressColumnMapping` or `optionalAddressColumnMapping` objects.
   * @type {object}
   * @memberof UploadWritable
   */
  "mergeVariableColumnMapping"?: object | null;

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
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
