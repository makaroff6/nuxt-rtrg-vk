# Nuxt VK retargeting plugin

## Install

```bash
$ npm install --save nuxt-rtrg-vk
// or
$ yarn add nuxt-rtrg-vk
```

## Getting Started

Add `nuxt-rtrg-vk` to `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    ['nuxt-rtrg-vk', {
      /* module options */
      id: 'VK_RETARGETING_ID', 
      priceListId: 'VK_PRICE_LIST_ID', 
      debug: false
    }],
 ]
}
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| id  | null     | true     | The unique retargeting identifier provided by VK.                                         |
| priceListId  | null     | false     | The unique price list identifier provided by VK. Set it if you want to push custom events                                        |
| debug    | false | false    | By default, tracking in development mode is disabled. By specifying `true`, you manually allow tracking in development mode.                                                               |

## Module instance
The tracking instance is available on all vue component instances as $vkRtrg. 
It has one method - productEvent(event, payload)

| Option   | Type     | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| event    | String   | true     | Custom event name 
| payload  | Object   | false    | Custom event payload 