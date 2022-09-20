# Micro Frontends

## Introduction

The current Microservices approach to the backend of dividing the application into several independently deployed projects fixes the monolith problem, but there is still a bottleneck: the Frontend requires a new release of the whole application with the new changes. Micro Frontends (MFEs) solve that problem, by implementing the same strategy.

This article aims to provide a basic sense of Micro Frontends by answering the basic questions (what, why and how) and why Module Federation might be the best way to implement them, so that you can start using this architecture in your projects.

## What Are They ?

MFEs are essentially portions of a web application, independently deployed and managed. They are hosted by a **Shell** (host page) and imported in the same way a normal application would import its own components. In the Shell's perspective, the MFEs are **Remotes**, because they are not intrinsic to the project. 

By separating the Frontend into Shell and Remotes, the host takes on a specific set of responsibilities, such as **Authentication**, **Navigation**, **Notifications**, **Error Handling** and **Metric Tracking**. These are the global concerns, that must be synchronized throughout the application and for that reason must be maintained by the host. 

Components which are good candidates to be turned into MFEs are self contained components that don't have dependencies to the page and small components that are shared between pages, like headers and footers.

Which leads us to the question: should you use MicroFrontends? It depends on what you need. If you need:

1) Independent builds and deployments
2) Source code isolation
3) Mixed tech stacks

then MicroFrontends are probably a good choice.

## How Do They Work ?

Micro Frontends are in of themselves a way to to solve a bigger problem, which is reliably and easily sharing code between projects.

There are several solutions to this problem, one of them being Micro Frontends using any tool like OpenComponents, Tailor, Single SPA, etc. The component is extracted, bundled, registered and consumed and once they are updated, they are updated everywhere. A problem with this solution is that the shared components are external to the projects.

Other ways to solve this problem are extracting code into a Node Package Manager (NPM) library or using Edge Side Includes (ESI), but these approaches have problems of their own like not being updated at runtime (NPM) or having compatibility issues with other frameworks, like React (ESI).

As of Webpack 5, released in 2020, there is another solution to this problem: **Module Federation**. This technology allows a Webpack build to dynamically load code from another build. Module Federation can be used for any JavaScript code, from plain functions to constants to components built with another framework, which makes it very valuable for MFEs, especially since it also allows lazy loading of the remotes.

This solution is better than the ones listed above because the shared components are not external to their projects, they are just externalized in the webpack config; as long as the project is deployed, the component is available for use everywhere and it has the most recent changes.

By combining the ease of externalization, the singleton behaviour of libraries and the ability to host components built with different frameworks, Webpack's Module Federation is a great way to build a MFE application.

## Pros

- Strategic and Tactical Focus: using MFEs the host page team can focus on general problems and leave the small interface tweaks and fixes to the MFE team; each team deals with 1 MFE so there is a lot more focus on the scope

- Reusability: MFEs can be resued as long as the host conforms to the MFE standart

- Tech Agnosticism: as long as the framework uses the MFE standart, a host page can have several MFEs written in different languages/built with different frameworks because of Module Federation

- Focused Unit Testing: by separating the code bases the tests take a shorter time because they aren't all run at once

- Streamlined Development: MFEs can be deployed whenever new changes are added without requiring an entirely new deployment of the Frontend

- Fewer Lines Of Code In Each Solution

## Cons

- Higher Complexity: an application transforms into a bigger codebase with several projects with 

- Lack of standart: there are several openSource frameworks out there but none of them are standartized 

- Framework Upgrades: if every MFE has a different repo, some projects might run different versions of the frameworks used

## Wrapping Up

In this article we've analyzed how MicroFrontends are similar to Microservices and that their purpose is solving the same problem, which is adopting a modular approach to software development. 

We've also seen how MFEs can be implemented through several tools and how Module Federation (available since Webpack 5) is a good choice because of its ease of use and compatiblity with multiple tech stacks and lazy loading.

I guess now all that's left is trying it for yourself.

Good luck :)

## Sources

JackHerrington. (2022, February 25). *Micro-Frontends: What, why and how* [Video]. YouTube. Retrieved June 6, 2022, from https://www.youtube.com/watch?v=w58aZjACETQ

JackHerrington. (2021, October 14). *Micro-FrontendsIn Just 10 Minutes* [Video]. YouTube. Retrieved June 7, 2022, from https://www.youtube.com/watch?v=s_Fs4AXsTnA

JackHerrington. (2020, March 7). *Introducing Module Federation in Webpack 5* [Video]. YouTube. Retrieved June 14, 2022, from https://www.youtube.com/watch?v=D3XYAx30CNc

Jackson, Z. (2020, March 2). Webpack 5 Module Federation: A game-changer in Javascript architecture. | The Startup. Medium. Retrieved June 14, 2022, from https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669

Module Federation. (n.d.). Webpack. Retrieved August 23rd, 2022, from https://webpack.js.org/concepts/module-federation/

freeCodeCamp.org. (2021, November 10). *Micro-Frontends Course - Beginner to Expert* [Video]. YouTube. Retrieved August 23, 2022, from https://www.youtube.com/watch?v=lKKsjpH09dU&ab_channel=freeCodeCamp.org

Mecham, O. (n.d). *Workshop: Advanced Application Architecture with MicroFrontends Part 1*. Pluralsight. https://app.pluralsight.com/library/courses/ng-conf-2021-session-38-part-1/table-of-contents


