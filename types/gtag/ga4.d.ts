declare global {
    interface Window {
        gtag: any;
        dataLayer: any;
    }
}
export interface IfieldObject {
    hitType: string;
    eventCategory: string;
    eventAction: string;
    eventValue?: string | number;
    eventLabel?: string;
    nonInteraction?: boolean;
    transport?: string;
    hitCallback?: () => void;
}
/**
 * @typedef GaOptions
 * @type {Object}
 * @property {boolean} [cookieUpdate=true]
 * @property {number} [cookieExpires=63072000] Default two years
 * @property {string} [cookieDomain="auto"]
 * @property {string} [cookieFlags]
 * @property {string} [userId]
 * @property {string} [clientId]
 * @property {boolean} [anonymizeIp]
 * @property {string} [contentGroup1]
 * @property {string} [contentGroup2]
 * @property {string} [contentGroup3]
 * @property {string} [contentGroup4]
 * @property {string} [contentGroup5]
 * @property {boolean} [allowAdFeatures=true]
 * @property {boolean} [allowAdPersonalizationSignals]
 * @property {boolean} [nonInteraction]
 * @property {string} [page]
 */
/**
 * @typedef UaEventOptions
 * @type {Object}
 * @property {string} action
 * @property {string} category
 * @property {string} [label]
 * @property {number} [value]
 * @property {boolean} [nonInteraction]
 * @property {('beacon'|'xhr'|'image')} [transport]
 */
/**
 * @typedef InitOptions
 * @type {Object}
 * @property {string} trackingId
 * @property {GaOptions|any} [gaOptions]
 * @property {Object} [gtagOptions] New parameter
 */
export declare class GA4 {
    isInitialized: any;
    _testMode: any;
    _currentMeasurementId: any;
    _hasLoadedGA: any;
    _isQueuing: any;
    _queueGtag: any;
    gaOptions: any;
    gtagOptions: any;
    legacyDimensionMetric: any;
    nonce: any;
    testMode: any;
    eventCategory: any;
    eventAction: any;
    eventLabel: any;
    eventValue: any;
    hitType: any;
    rest: any;
    title: any;
    location: any;
    page: any;
    action: any;
    category: any;
    label: any;
    value: any;
    nonInteraction: any;
    transport: any;
    constructor();
    reset: () => void;
    _gtag: (...args: any[]) => void;
    gtag(...args: any[]): void;
    _loadGA: (GA_MEASUREMENT_ID: any, nonce: any) => void;
    _toGtagOptions: (gaOptions: any) => any;
    /**
     *
     * @param {InitOptions[]|string} GA_MEASUREMENT_ID
     * @param {Object} [options]
     * @param {boolean} [options.legacyDimensionMetric=true]
     * @param {string} [options.nonce]
     * @param {boolean} [options.testMode=false]
     * @param {GaOptions|any} [options.gaOptions]
     * @param {Object} [options.gtagOptions] New parameter
     */
    initialize: (GA_MEASUREMENT_ID: any, options?: any) => void;
    set: (fieldsObject: any) => void;
    _gaCommandSendEvent: (eventCategory: any, eventAction: any, eventLabel: any, eventValue: any, fieldsObject: any) => void;
    _gaCommandSendEventParameters: (...args: any[]) => void;
    _gaCommandSendTiming: (timingCategory: any, timingVar: any, timingValue: any, timingLabel: any) => void;
    _gaCommandSendPageview: (page: any, fieldsObject: any) => void;
    _gaCommandSendPageviewParameters: (...args: any[]) => void;
    _gaCommandSend: (...args: any[]) => void;
    _gaCommandSet: (...args: any[]) => void;
    _gaCommand: (command: any, ...args: any[]) => void;
    ga: (...args: any[]) => any;
    /**
     * @param {UaEventOptions|string} optionsOrName
     * @param {Object} [params]
     */
    event: (optionsOrName: any, params: any) => void;
    send: (fieldObject: any) => void;
    _appendCustomMap(options: any, legacyDimensionMetric?: boolean): any;
    /**
     * @since v1.0.2
     * @param {string} [path="location.href"]
     * @param {string[]} [_] unsupported
     * @param {string} [title="location.pathname"]
     * @deprecated Use `.send("pageview")` instead
     */
    pageview: (path: any, _: any, title: any) => void;
    /**
     * @since v1.0.6
     * @param {Object} options
     * @param {string} options.label
     * @param {function} hitCallback
     * @deprecated Use `enhanced measurement` feature in Google Analytics.
     */
    outboundLink({ label }: {
        label: any;
    }, hitCallback: any): void;
}
declare const _default: GA4;
export default _default;
