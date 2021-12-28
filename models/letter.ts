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


import { Address } from './address';
import { LetterCustomEnvelope } from './letter-custom-envelope';
import { MailType } from './mail-type';
import { ReturnAddress } from './return-address';
import { SendDate } from './send-date';
import { Thumbnail } from './thumbnail';
import { TrackingEventNormal } from './tracking-event-normal';

/**
 * 
 * @export
 * @interface Letter
 */
export interface Letter {
    /**
     * 
     * @type {Address}
     * @memberof Letter
     */
    'to'?: Address;
    /**
     * 
     * @type {Address}
     * @memberof Letter
     */
    'from'?: Address;
    /**
     * 
     * @type {string}
     * @memberof Letter
     */
    'carrier'?: LetterCarrierEnum;
    /**
     * 
     * @type {Array<Thumbnail>}
     * @memberof Letter
     */
    'thumbnails'?: Array<Thumbnail>;
    /**
     * A date in YYYY-MM-DD format of the mailpiece\'s expected delivery date based on its `send_date`.
     * @type {string}
     * @memberof Letter
     */
    'expected_delivery_date'?: string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was created.
     * @type {string}
     * @memberof Letter
     */
    'date_created'?: string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was last modified.
     * @type {string}
     * @memberof Letter
     */
    'date_modified'?: string;
    /**
     * Only returned if the resource has been successfully deleted.
     * @type {boolean}
     * @memberof Letter
     */
    'deleted'?: boolean;
    /**
     * Unique identifier prefixed with `ltr_`.
     * @type {string}
     * @memberof Letter
     */
    'id'?: string;
    /**
     * Unique identifier prefixed with `tmpl_`. ID of a saved [HTML template](#section/HTML-Templates).
     * @type {string}
     * @memberof Letter
     */
    'template_id'?: string;
    /**
     * Unique identifier prefixed with `vrsn_`.
     * @type {string}
     * @memberof Letter
     */
    'template_version_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Letter
     */
    'object'?: LetterObjectEnum;
    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof Letter
     */
    'description'?: string | null;
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof Letter
     */
    'metadata'?: { [key: string]: string; };
    /**
     * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
     * @type {object}
     * @memberof Letter
     */
    'merge_variables'?: object | null;
    /**
     * 
     * @type {SendDate}
     * @memberof Letter
     */
    'send_date'?: SendDate;
    /**
     * Add an extra service to your letter. See [pricing](https://www.lob.com/pricing/print-mail#compare) for extra costs incurred.   * registered - provides tracking and confirmation for international addresses   * `certified` - track and confirm delivery for domestic destinations. An extra sheet (1 PDF page single-sided or 2 PDF pages double-sided) is added to the beginning of your letter for address and barcode information. See here for templates: [#10 envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_template.pdf) and [flat envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_flat_template.pdf) (used for letters over 6 pages single-sided or 12 pages double-sided). You will not be charged for this extra sheet.   * `certified_return_receipt` - request an electronic copy of the recipient\'s signature to prove delivery of your certified letter 
     * @type {string}
     * @memberof Letter
     */
    'extra_service'?: string;
    /**
     * The tracking number, if applicable, will appear here when it becomes available. Dummy tracking numbers are not created in test mode.
     * @type {string}
     * @memberof Letter
     */
    'tracking_number'?: string | null;
    /**
     * Tracking events are not populated for registered or regular (no extra service) letters.
     * @type {Array<TrackingEventNormal>}
     * @memberof Letter
     */
    'tracking_events'?: Array<TrackingEventNormal>;
    /**
     * 
     * @type {ReturnAddress}
     * @memberof Letter
     */
    'return_address'?: ReturnAddress;
    /**
     * 
     * @type {MailType}
     * @memberof Letter
     */
    'mail_type'?: MailType;
    /**
     * Set this key to `true` if you would like to print in color. Set to `false` if you would like to print in black and white.
     * @type {boolean}
     * @memberof Letter
     */
    'color'?: boolean;
    /**
     * Set this attribute to `true` for double sided printing, or `false` for for single sided printing. Defaults to `true`.
     * @type {boolean}
     * @memberof Letter
     */
    'double_sided'?: boolean;
    /**
     * Specifies the location of the address information that will show through the double-window envelope. To see how this will impact your letter design, view our letter template.   * `top_first_page` - (default) print address information at the top of your provided first page   * `insert_blank_page` - insert a blank address page at the beginning of your file (you will be charged for the extra page)   * `bottom_first_page_center` - **(deprecation planned within a few months)** print address information at the bottom center of your provided first page   * `bottom_first_page` - print address information at the bottom of your provided first page 
     * @type {string}
     * @memberof Letter
     */
    'address_placement'?: LetterAddressPlacementEnum;
    /**
     * Indicates if a return envelope is requested for the letter. The value corresponding to this field is by default a boolean. But if the account is signed up for custom return envelopes, the value is of type string and is `no_9_single_window` for a standard return envelope and a custom `return_envelope_id` for non-standard return envelopes.  To include a return envelope with your letter, set to `true` and specify the `perforated_page`. See [pricing](https://www.lob.com/pricing/print-mail#compare) for extra costs incurred.
     * @type {boolean | string}
     * @memberof Letter
     */
    'return_envelope'?: boolean | string;
    /**
     * Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our [perforation guide](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf).
     * @type {number}
     * @memberof Letter
     */
    'perforated_page'?: number | null;
    /**
     * 
     * @type {LetterCustomEnvelope}
     * @memberof Letter
     */
    'custom_envelope'?: LetterCustomEnvelope | null;
}

/**
    * @export
    * @enum {string}
    */
export enum LetterCarrierEnum {
    Usps = 'USPS'
}
/**
    * @export
    * @enum {string}
    */
export enum LetterObjectEnum {
    Letter = 'letter'
}
/**
    * @export
    * @enum {string}
    */
export enum LetterAddressPlacementEnum {
    TopFirstPage = 'top_first_page',
    InsertBlankPage = 'insert_blank_page',
    BottomFirstPageCenter = 'bottom_first_page_center',
    BottomFirstPage = 'bottom_first_page'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
