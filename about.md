---
layout: page
title: About
permalink: /about/
---

![Learning PWA Cover Image](/images/learning-pwa-256.png)

When building apps targeting desktops, laptops, smartphones, and tablets, developers have generally two options to use when building their apps: native apps built specifically for the target platform, or web apps which ultimately can run on most any system due to the abstraction layer provided by web browsers. Building native apps for any target platform is a time-consuming and expensive proposition, especially when your app targets multiple types of systems (desktop computers, smartphones, televisions, etc.).

Web apps were challenging because a user’s experience could vary dramatically depending on which type of system the user accessed the app from. Desktop browsers are fully capable, but mobile device browsers have limitations due to reduce screen real estate, processor speed, network bandwidth, and more. Many of these limitations have disappeared, but there’s still considerable disparity between native app and web app capabilities.

Web developers have a lot of tools and technologies at their disposal to help them build rich, engaging apps. Over the years, different technologies like Sun Microsystems Java  and Adobe Flash  appeared with the expectation that they’d change the world for web apps – delivering a more engaging experiences for users. Both did that, but ultimately disappeared from the browser for good reason.

What developers and users need is a way to enable web apps to work more like native apps. If we had that, our web apps would soar and enable us to more easily deliver cross platform apps through the browser rather than hand-crafting native apps for each supported platform.

Over the years, web browsers, especially those running on mobile devices like smartphones and tablets, started exposing more native capabilities to web apps. For example, modern web apps can access the device’s file system and let a browser-based app know the device’s geolocation. This enables web apps to work more like native apps, but there were still limitations. Service Workers are a relatively new technology that make it easier for web apps to bridge the gap between native and web capabilities, removing many limitations from web apps.

This is a book about service workers.

Yes, I know, the title says the book is about Progressive Web Apps (PWAs), and it is, but the book focuses on how to use service workers to enhance the capabilities of a web app and create PWAs.

There are several books out there that focus on the engagement impact of PWAs; how to build PWAs that delight and inspire users to do more in the app. This isn’t that kind of book.

This book is focused as much as possible on the technologies enabling PWAs, and how to use them to enhance your web apps to deliver a more native-like experience in your web apps.

The sample apps for this book were written specifically to be simple and easy to understand, so they’re not fancy. I could have built them as amazing, reactive, modern web apps, leveraging JavaScript frameworks like VueJS or React, but instead I built them using plain, vanilla HTML, CSS and JavaScript. Taking approach removes a lot of extraneous code from the apps and leaves just what you need to understand the topic at hand.

You can find all of the source code for the sample apps on GitHub at [https://github.com/johnwargo/learning-pwa-code](https://github.com/johnwargo/learning-pwa-code). Unlike the source code repositories for other books, the book’s source code doesn’t contain only before and after versions of the apps. Instead, as you complete a chapter section, you’ll find the source code modifications for just that section in a separate file. This enables you to more easily build the app along with the chapter content while having just that section’s code available in case you have an issue and want to compare the completed code with yours. This approach should streamline your following-along, especially if you create typos or bugs as you work.

If you have any questions or comments about the book or if you found an error in the manuscript or code, please submit them through the [Issues](https://github.com/johnwargo/learning-pwa-code/issues) area in the book’s GitHub repository. The code there is open source, so feel free to use it in your applications (it would be especially nice if you referenced the source for the code so others can learn about this book).

If you find a bug in the code and want to fix it yourself, do so, then submit a pull request against the repo and I’ll take a look. I’m usually very good about responding, so you should hear back from me in a day or so. Please be nice – GitHub is a very public forum and we should all treat people there as we expect to be treated by others.

Two of the three sample apps from the book are published online as well. The first is the [Tip Calculator](https://learningpwa.com/tipcalc/) from Chapter 2. The other is the [PWA News](https://pwa-news.com) site from chapters 3, 4, and 5. The PWA News site requires compute (it’s server-side is a node.js application) so I’ll leave the site up as long as there is interest in the book. Eventually I’ll shut it down, but the full source for the server is included with the book’s source code, so you’ll always be able to run a local copy of the server or host the site somewhere else yourself.

**Note:** This site is not a PWA because it doesn’t need to be a PWA. It’s just a marketing landing page for the book and there are no browser notifications I want to send to visitors nor is there a need to cache the site’s content for increased performance or offline use. Just because I can make the site into a PWA doesn’t mean that I should. Use the power of PWAs only for those sites that really need them.

I believe in progressive web apps and think they are the future of mobile app development, so that’s why I worked to put this book into your hands. I really enjoyed writing it, and I hope you enjoy reading it as much or more.
