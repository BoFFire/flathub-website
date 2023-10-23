/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { PaymentCardInfo } from "./payment-card-info"
// May contain unused imports in some cases
// @ts-ignore
import { TransactionRow } from "./transaction-row"
// May contain unused imports in some cases
// @ts-ignore
import { TransactionSummary } from "./transaction-summary"

/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
  /**
   *
   * @type {TransactionSummary}
   * @memberof Transaction
   */
  summary: TransactionSummary
  /**
   *
   * @type {PaymentCardInfo}
   * @memberof Transaction
   */
  card: PaymentCardInfo | null
  /**
   *
   * @type {Array<TransactionRow>}
   * @memberof Transaction
   */
  details: Array<TransactionRow>
  /**
   *
   * @type {string}
   * @memberof Transaction
   */
  receipt: string | null
}
