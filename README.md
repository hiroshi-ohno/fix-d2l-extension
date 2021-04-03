# Chrome extension to fix D2L remote plug-in rendering area issue

**D2L fixed this issue in February 2021. This extension is not needed anymore, and the tool is withdrawn from the Chrome Web Store.**

----

This chrome extension adjusts the height of the iframe area of D2L remote plug-in. You may install it from [Chrome Web Store](https://chrome.google.com/webstore/detail/lblffcdcpmceadnpephfplpaifddeago).

I am a developer of a D2L remote plug-in and I have struggled with the fact that D2L provides the plug-in a certain size of iframe region but it does not render all of it. Rendering area is always roughly 50 pixels shorter than actual iframe size.
My plug-in adopts responsive web design, which means the plug-in recognizes the given iframe size and renders its UI as best for the given size. However, due to the mismatch of iframe size and actual rendering size, the end result becomes sub-optimal or even problematic.
Since the plug-in is hosted by iframe, it cannot do anything to resolve the problem. iframe cannot affect the parent window in any way.

This is a known issue on D2L, but it has been outstanding for more than 2 years. Therefore, I developed this extension to adjust that behavior so that the plug-in works well for the time being.

## Is this extension safe to install?
Absolutely.
This extension does the following things, but nothing else.
- Find the iframe with its ID ```remoteIframe```.
- When the contents of that iframe is loaded, adjust its height so that the iframe size matches to the rendering size.
- When the tool dialog window is resized by the end user, adjust the iframe's height so that the size matches to the rendering size.

The source code is simple enough where I believe any programmer can confirm the behavior above by code inspection.

## Doesn't this cause slow down?
Almost ignorable.

This extension loads only for the pages which matches URL pattern ```https://*/d2l/common/dialogs/isf/selectItem.d2l*```. This practically matches only the intended D2L remote plug-in pages.

When a page loads this extension, all it does is adjust the height of the plug-in area on specific events.

## Can I get any support for this extension?
This is provided as-is. I will try my best to answer any questions which are posted in issues section of this GitHub repo.

Please understand that this is a hack to the service which I do not have any control. D2L may introduce any breaking changes at any time. I will try my best to catch up, but I cannot provide any explicit ETA.

## What is the problem to be solved?
As you see in this screenshot and browser tool information, the iframe which hosts remote plug-in has a size taller than actually rendered. This situation continues even when this dialog window is resized. This seems to suggest that D2L calculates the hosting iframe size dynamically for the best experience, but unfortunately it does not take into account the area of D2L buttons (Next/Prev/Cancel) correctly.

![](images/d2l-issue-screencap.png?raw=true)

## License
Copyright 2020 Hiroshi Ohno

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
