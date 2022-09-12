This is very first test Run 
Will be completing it within 1 month.


# React Google Analytics 4

## Migrate from old react-ga

```js

import GA4 from "google-analytics-ga4";
```

## Install

## Usage

```js
import GA4 from "google-analytics-ga4";

GA4.initialize("your GA measurement id");
GA4.send("pageview");
```

## Example
```js
// Multiple products (previously known as trackers)
GA4.initialize([
  {
    trackingId: "your GA measurement id",
    gaOptions: {...}, // optional
    gtagOptions: {...}, // optional
  },
  {
    trackingId: "your second GA measurement id",
  },
]);

// Send pageview with a custom path
GA4.send({ hitType: "pageview", page: "/my-path" });

// Send a custom event
GA4.event({
  category: "your category",
  action: "your action",
  label: "your label", // optional
  value: 99, // optional, must be a number
  nonInteraction: true, // optional, true/false
  transport: "xhr", // optional, beacon/xhr/image
});
```

## Reference

#### GA4.initialize(GA_MEASUREMENT_ID, options)

| Parameter                     | Notes                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GA_MEASUREMENT_ID             | `string` Required                                                                                                       |
| options.nonce                 | `string` Optional Used for Content Security Policy (CSP) [more](https://developers.google.com/tag-manager/web/csp)      |
| options.testMode              | `boolean` Default false                                                                                                 |
| options.gaOptions             | `object` Optional [Reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference) |
| options.gtagOptions           | `object` Optional                                                                                                       |
| options.legacyDimensionMetric | `boolean` Default true                                                                                                  |

#### GA4.set(fieldsObject)

| Parameter    | Notes             |
| ------------ | ----------------- |
| fieldsObject | `object` Required |

#### GA4.event(name, params)

This method signature are NOT for `UA-XXX`

| Parameter | Notes                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| name      | `string` Required A [recommended event](https://developers.google.com/tag-platform/gtagjs/reference/events) or a custom event |
| params    | `object` Optional                                                                                                             |

#### GA4.event(options)

| Parameter                    | Notes                               |
| ---------------------------- | ----------------------------------- |
| options                      | `object` Required                   |
| options.action               | `string` Required                   |
| options.category             | `string` Required                   |
| options.label                | `string` Optional                   |
| options.value                | `number` Optional                   |
| options.nonInteraction       | `boolean` Optional                  |
| options.transport            | `'beacon'\|'xhr'\|'image'` Optional |
| options.dimension`{1...200}` | `any` Optional                      |
| options.metric`{1...200}`    | `any` Optional                      |

#### GA4.send(fieldsObject)

| Parameter    | Notes             |
| ------------ | ----------------- |
| fieldsObject | `object` Required |

#### ReactGA&#46;gtag(...args)

#### ReactGA&#46;ga(...args)

#### ~~GA4.pageview(path, \_, title)~~

Deprecated Use `.send("pageview")` instead

#### ~~GA4.outboundLink({ label }, hitCallback)~~

Deprecated Use `enhanced measurement` feature in Google Analytics.

### Extending

```js
import { ReactGAImplementation } from "google-analytics-ga4";

class MyCustomOverriddenClass extends ReactGAImplementation {}

export default new MyCustomOverriddenClass();
```

## Debugging

Use [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en) to see logs

## Maintainer

[pcprashant99](https://github.com/pcprashant99)

## License

MIT