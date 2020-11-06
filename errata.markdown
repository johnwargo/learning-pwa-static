---
layout: page
title: Errata
permalink: /errata/
---

# Updated Server Code for Chapters 3 through 5

The sample applications used in the chapters three through 5 use a server application that leverages the Bing News Search API. On October 29, 2020, Microsoft announced that "Bing Search APIs will transition from Azure Cognitive Services to Azure Marketplace on 31 October 2023."  In the announcement, they said:

> "The existing instances of the following Bing Search APIs under Azure Cognitive Services will no longer be supported after 31 October 2023. You can continue to create new instances of Bing Search APIs under the Azure Marketplace."

Existing Bing Search API keys will continue to work until the 2023 deadline, but Microsoft removed the ability to create new API keys for the service I used in the book and server code. This means that the content and server source code used in Chapter 3 is no longer valid for new readers. Existing readers who already created their Bing Search API keys to use with the book's code can continue to do so, and all of the existing code in other folders in this repository will continue to operate as expected (until October 31, 2023). After that date, readers must switch to the new API and updated server code which I will publish soon to a separate folder in the book's [GitHub Repository](https://github.com/johnwargo/learning-pwa-code).

In Chapter 3, where the book tells readers to create a new API key using the following link: [https://portal.azure.com/#create/Microsoft.CognitiveServicesBingSearch-v7](https://portal.azure.com/#create/Microsoft.CognitiveServicesBingSearch-v7); that will no longer work. Readers must use the following link instead: [https://portal.azure.com/#create/Microsoft.BingSearch](https://portal.azure.com/#create/Microsoft.BingSearch).

## Chapter 8

On page 191, I reference a simplified version of the tip calculator app I have hosted at [Netlify](https://netlify.com). In the book, I list the app URL as https://tip-calc-test.netlify.com/, but after the book went to press, Netlify announced that any hosted app that doesn't have a custom domain associated with it will use netlify.app. Going forward, the URL for the test app is [https://tip-calc-test.netlify.app/](https://tip-calc-test.netlify.app/).
