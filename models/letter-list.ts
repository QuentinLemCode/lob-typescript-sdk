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


import { Letter } from './letter';

/**
 * 
 * @export
 * @interface LetterList
 */
export class LetterList {
    /**
     * list of letters
     * @type {Array<Letter>}
     * @memberof LetterList
     */
    'data'?: Array<Letter>;
    /**
     * Value is type of resource.
     * @type {string}
     * @memberof LetterList
     */
    'object'?: string;
    /**
     * Url of next page of items in list.
     * @type {string}
     * @memberof LetterList
     */
    'next_url'?: string | null;
    /**
     * Url of previous page of items in list.
     * @type {string}
     * @memberof LetterList
     */
    'previous_url'?: string | null;
    /**
     * number of resources in a set
     * @type {number}
     * @memberof LetterList
     */
    'count'?: number;
    /**
     * Indicates the total number of records. Provided when the request specifies an \"include\" query parameter
     * @type {number}
     * @memberof LetterList
     */
    'total_count'?: number;
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

