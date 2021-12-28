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
 * Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob\'s end.
 * @export
 * @interface LobError
 */
export interface LobError {
    /**
     * A human-readable message with more details about the error
     * @type {string}
     * @memberof LobError
     */
    'message'?: string;
    /**
     * A conventional HTTP status code:   * `401` - Authorization error with your API key or account   * `403` - Forbidden error with your API key or account   * `404` - The requested item does not exist   * `413` - Payload too large   * `422` - The query or body parameters did not pass validation   * `429` - Too many requests have been sent with an API key in a given amount of time   * `500` - An internal server error occurred, please contact support@lob.com 
     * @type {number}
     * @memberof LobError
     */
    'status_code'?: LobErrorStatusCodeEnum;
    /**
     * A pre-defined string identifying an error. 
     * @type {string}
     * @memberof LobError
     */
    'code'?: LobErrorCodeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum LobErrorStatusCodeEnum {
    NUMBER_401 = 401,
    NUMBER_403 = 403,
    NUMBER_404 = 404,
    NUMBER_413 = 413,
    NUMBER_422 = 422,
    NUMBER_429 = 429,
    NUMBER_500 = 500
}
/**
    * @export
    * @enum {string}
    */
export enum LobErrorCodeEnum {
    BadRequest = 'bad_request',
    Conflict = 'conflict',
    FeatureLimitReached = 'feature_limit_reached',
    InternalServerError = 'internal_server_error',
    Invalid = 'invalid',
    NotDeletable = 'not_deletable',
    NotFound = 'not_found',
    RequestTimeout = 'request_timeout',
    ServiceUnavailable = 'service_unavailable',
    UnrecognizedEndpoint = 'unrecognized_endpoint',
    UnsupportedLobVersion = 'unsupported_lob_version',
    AddressLengthExceedsLimit = 'address_length_exceeds_limit',
    BankAccountAlreadyVerified = 'bank_account_already_verified',
    BankError = 'bank_error',
    CustomEnvelopeInventoryDepleted = 'custom_envelope_inventory_depleted',
    DeletedBankAccount = 'deleted_bank_account',
    FailedDeliverabilityStrictness = 'failed_deliverability_strictness',
    FilePagesBelowMin = 'file_pages_below_min',
    FilePagesExceedMax = 'file_pages_exceed_max',
    FileSizeExceedsLimit = 'file_size_exceeds_limit',
    ForeignReturnAddress = 'foreign_return_address',
    InconsistentPageDimensions = 'inconsistent_page_dimensions',
    InvalidBankAccount = 'invalid_bank_account',
    InvalidBankAccountVerification = 'invalid_bank_account_verification',
    InvalidCheckInternational = 'invalid_check_international',
    InvalidCountryCovid = 'invalid_country_covid',
    InvalidFile = 'invalid_file',
    InvalidFileDimensions = 'invalid_file_dimensions',
    InvalidFileDownloadTime = 'invalid_file_download_time',
    InvalidFileUrl = 'invalid_file_url',
    InvalidImageDpi = 'invalid_image_dpi',
    InvalidInternationalFeature = 'invalid_international_feature',
    InvalidPerforationReturnEnvelope = 'invalid_perforation_return_envelope',
    InvalidTemplateHtml = 'invalid_template_html',
    MergeVariableRequired = 'merge_variable_required',
    MergeVariableWhitespace = 'merge_variable_whitespace',
    PaymentMethodUnverified = 'payment_method_unverified',
    PdfEncrypted = 'pdf_encrypted',
    SpecialCharactersRestricted = 'special_characters_restricted',
    UnembeddedFonts = 'unembedded_fonts',
    EmailRequired = 'email_required',
    InvalidApiKey = 'invalid_api_key',
    PublishableKeyNotAllowed = 'publishable_key_not_allowed',
    RateLimitExceeded = 'rate_limit_exceeded',
    Unauthorized = 'unauthorized',
    UnauthorizedToken = 'unauthorized_token'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
