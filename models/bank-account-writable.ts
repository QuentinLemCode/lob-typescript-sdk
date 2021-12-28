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


import { BankTypeEnum } from './bank-type-enum';

/**
 * 
 * @export
 * @interface BankAccountWritable
 */
export interface BankAccountWritable {
    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof BankAccountWritable
     */
    'description'?: string | null;
    /**
     * Must be a [valid US routing number](https://www.frbservices.org/index.html).
     * @type {string}
     * @memberof BankAccountWritable
     */
    'routing_number': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountWritable
     */
    'account_number': string;
    /**
     * 
     * @type {BankTypeEnum}
     * @memberof BankAccountWritable
     */
    'account_type': BankTypeEnum;
    /**
     * The signatory associated with your account. This name will be printed on checks created with this bank account. If you prefer to use a custom signature image on your checks instead, please create your bank account from the [Dashboard](https://dashboard.lob.com/#/login).
     * @type {string}
     * @memberof BankAccountWritable
     */
    'signatory': string;
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof BankAccountWritable
     */
    'metadata'?: { [key: string]: string; };
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
