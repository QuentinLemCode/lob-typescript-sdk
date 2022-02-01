"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterAddressPlacementEnum =
  exports.LetterObjectEnum =
  exports.LetterCarrierEnum =
  exports.Letter =
    void 0;
/**
 *
 * @export
 * @class Letter
 */
var Letter = /** @class */ (function () {
  function Letter(input) {
    if (
      typeof (input === null || input === void 0 ? void 0 : input.to) !==
      "undefined"
    ) {
      this.to = input.to;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.from) !==
      "undefined"
    ) {
      this.from = input.from;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.carrier) !==
      "undefined"
    ) {
      this.carrier = input.carrier;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.thumbnails) !== "undefined"
    ) {
      this.thumbnails = input.thumbnails;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.expected_delivery_date) !== "undefined"
    ) {
      this.expected_delivery_date = input.expected_delivery_date;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.date_created) !== "undefined"
    ) {
      this.date_created = input.date_created;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.date_modified) !== "undefined"
    ) {
      this.date_modified = input.date_modified;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.deleted) !==
      "undefined"
    ) {
      this.deleted = input.deleted;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.id) !==
      "undefined"
    ) {
      this.id = input.id;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.template_id) !== "undefined"
    ) {
      this.template_id = input.template_id;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.template_version_id) !== "undefined"
    ) {
      this.template_version_id = input.template_version_id;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.object) !==
      "undefined"
    ) {
      this.object = input.object;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.description) !== "undefined"
    ) {
      this.description = input.description;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.metadata) !==
      "undefined"
    ) {
      this.metadata = input.metadata;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.merge_variables) !== "undefined"
    ) {
      this.merge_variables = input.merge_variables;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.send_date) !==
      "undefined"
    ) {
      this.send_date = input.send_date;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.extra_service) !== "undefined"
    ) {
      this.extra_service = input.extra_service;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.tracking_number) !== "undefined"
    ) {
      this.tracking_number = input.tracking_number;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.tracking_events) !== "undefined"
    ) {
      this.tracking_events = input.tracking_events;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.return_address) !== "undefined"
    ) {
      this.return_address = input.return_address;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.mail_type) !==
      "undefined"
    ) {
      this.mail_type = input.mail_type;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.color) !==
      "undefined"
    ) {
      this.color = input.color;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.double_sided) !== "undefined"
    ) {
      this.double_sided = input.double_sided;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.address_placement) !== "undefined"
    ) {
      this.address_placement = input.address_placement;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.return_envelope) !== "undefined"
    ) {
      this.return_envelope = input.return_envelope;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.perforated_page) !== "undefined"
    ) {
      this.perforated_page = input.perforated_page;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.custom_envelope) !== "undefined"
    ) {
      this.custom_envelope = input.custom_envelope;
    }
  }
  Object.defineProperty(Letter.prototype, "id", {
    get: function () {
      return this._id || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^ltr_[a-zA-Z0-9]+$/.test(newValue)) {
        throw new Error("Invalid id provided");
      }
      this._id = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Letter.prototype, "template_id", {
    get: function () {
      return this._template_id || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^tmpl_[a-zA-Z0-9]+$/.test(newValue)) {
        throw new Error("Invalid template_id provided");
      }
      this._template_id = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Letter.prototype, "template_version_id", {
    get: function () {
      return this._template_version_id || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^vrsn_[a-zA-Z0-9]+$/.test(newValue)) {
        throw new Error("Invalid template_version_id provided");
      }
      this._template_version_id = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  return Letter;
})();
exports.Letter = Letter;
/**
 * @export
 * @enum {string}
 */
var LetterCarrierEnum;
(function (LetterCarrierEnum) {
  LetterCarrierEnum["Usps"] = "USPS";
})(
  (LetterCarrierEnum =
    exports.LetterCarrierEnum || (exports.LetterCarrierEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var LetterObjectEnum;
(function (LetterObjectEnum) {
  LetterObjectEnum["Letter"] = "letter";
})(
  (LetterObjectEnum =
    exports.LetterObjectEnum || (exports.LetterObjectEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var LetterAddressPlacementEnum;
(function (LetterAddressPlacementEnum) {
  LetterAddressPlacementEnum["TopFirstPage"] = "top_first_page";
  LetterAddressPlacementEnum["InsertBlankPage"] = "insert_blank_page";
  LetterAddressPlacementEnum["BottomFirstPageCenter"] =
    "bottom_first_page_center";
  LetterAddressPlacementEnum["BottomFirstPage"] = "bottom_first_page";
})(
  (LetterAddressPlacementEnum =
    exports.LetterAddressPlacementEnum ||
    (exports.LetterAddressPlacementEnum = {}))
);
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */