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


import { LobError } from './lob-error';
import { UsVerification } from './us-verification';

/**
 * 
 * @export
 * @interface UsVerifications
 */
export class UsVerifications {
    /**
     * 
     * @type {Array<UsVerification | LobError>}
     * @memberof UsVerifications
     */
    'addresses'?: Array<UsVerification | LobError>;
    /**
     * Indicates whether any errors occurred during the verification process.
     * @type {boolean}
     * @memberof UsVerifications
     */
    'errors'?: boolean;
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
