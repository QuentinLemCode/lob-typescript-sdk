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


import { AddressEditable } from './address-editable';
import { MailType } from './mail-type';
import { SelfMailerSize } from './self-mailer-size';
import { SendDate } from './send-date';

/**
 * 
 * @export
 * @interface SelfMailerEditable
 */
export class SelfMailerEditable {
    /**
     * Must either be an address ID or an inline object with correct address parameters.
     * @type {string | AddressEditable}
     * @memberof SelfMailerEditable
     */
    'to'?: string | AddressEditable;
    /**
     * Must either be an address ID or an inline object with correct address parameters.
     * @type {string | AddressEditable}
     * @memberof SelfMailerEditable
     */
    'from'?: string | AddressEditable;
    /**
     * 
     * @type {SelfMailerSize}
     * @memberof SelfMailerEditable
     */
    'size'?: SelfMailerSize;
    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof SelfMailerEditable
     */
    'description'?: string | null;
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof SelfMailerEditable
     */
    'metadata'?: { [key: string]: string; };
    /**
     * 
     * @type {MailType}
     * @memberof SelfMailerEditable
     */
    'mail_type'?: MailType;
    /**
     * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
     * @type {object}
     * @memberof SelfMailerEditable
     */
    'merge_variables'?: object | null;
    /**
     * 
     * @type {SendDate}
     * @memberof SelfMailerEditable
     */
    'send_date'?: SendDate;
    /**
     * The artwork to use as the inside of your self mailer. 
     * @type {string}
     * @memberof SelfMailerEditable
     */
    'inside'?: string;
    /**
     * The artwork to use as the outside of your self mailer. 
     * @type {string}
     * @memberof SelfMailerEditable
     */
    'outside'?: string;
    /**
     * An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See [Billing Group API](https://lob.github.io/lob-openapi/#tag/Billing-Groups) for more information.
     * @type {string}
     * @memberof SelfMailerEditable
     */
    'billing_group_id'?: string;
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
