# Folder Structure

reviewly-start      	The starter code for the Reviewly web app
reviewly-end            The solution code for the Reviewly web app

Current Scope:
The completed Reviewly web app summarizes each review, provides a star rating for each review, and uses each review to infer an overall rating for the product. Users can also expand each summarized review to see the original review.


Services used:

Cloud Firestore - Store the text of each review, which is then processed by an extension.
* NoSQL cloud database 
* Realtime updates - 
* * uses data synchronization to update data on any connected device. However, it's also designed to make simple, one-time fetch queries efficiently.
* Offline support
* * caches data that your app is actively using, so the app can write, read, listen to, and query data even if the device is offline. When the device comes back online, Cloud Firestore synchronizes any local changes back to Cloud Firestore.
* Designed to scale
* * automatic multi-region data replication, strong consistency guarantees, atomic batch operations

Firebase Security Rules - Deploy Security Rules to help secure access to your Firebase services.
* You can write simple or complex rules that protect your app's data to the level of granularity that your specific app requires.

Cloud Functions for Firebase - Add mock reviews to the web app.
* serverless framework that lets you automatically run backend code in response to events triggered by background events, HTTPS requests, the Admin SDK, or Cloud Scheduler jobs. Your JavaScript, TypeScript or Python code is stored on Google Cloud infrastructure and runs in a managed environment. There's no need to manage and scale your own servers.

Firebase Extensions - Install, configure, and trigger the Language Tasks with PaLM API extension to summarize each review added to Firestore
* code that performs a task whenever a specifically defined event occurs in your app or project.
* An extension's logic is written using Cloud Functions for Firebase. 
* note that this feature is currently in beta release!

Future plan:
Make it healthcare specific

chatbot-start           The starter code for the Chatbot web app
chatbot-end             The solution code for the Chatbot web app


Current Scope:
a conversational chatbot that's powered by a large language model (LLM) and can answer questions about general topics. The chatbot has historical context, so its responses can factor in previous questions that students asked in the same conversation.

Future plan:
Make it be able to answer questions about the patients upcoming appointment 
Patient should be able to chat with it while waiting in the lobby for their appointment 
Don't use firebase authentication - instead should be able to pull patient information based on them filling out form details that they recieve via text message (Twilio)

Services used:

Firebase Authentication - Use sign-in-with-Google to manage users.
* provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Local Emulator Suite - Use the Local Emulator Suite to locally run the app.
* consists of individual service emulators built to accurately mimic the behavior of Firebase services. This means you can connect your app directly to these emulators to perform integration testing or QA without touching production data.
* Local development with Local Emulator Suite can be a good fit for your evaluation, prototyping, development and continuous integration workflows.

Framework-aware Firebase Hosting - Use web frameworks with Hosting to serve the app.
* Firebase Hosting integrates with popular modern web frameworks, including Next.js. Using Firebase Hosting and Cloud Functions for Firebase with these frameworks, you can develop apps and microservices in your preferred framework environment, and then deploy them in a managed, secure server environment.
* as of February 16th, 2024 the latest supported Next.js version is 13.4.7.

Cloud Firestore - Store the text of each conversation; messages from users are processed by an extension.
Firebase Security Rules - Deploy Security Rules to help secure access to your Firebase services.
Firebase Extensions - Install, configure, and trigger the Chatbot with PaLM API extension to respond when a new message is added to Firestore





video-hint-start        The starter code for the Video Hint web app
video-hint-end          The solution code for the Video Hint web app

TODO: delete this one you don't need it


# Setup Steps

1. `npm install -g firebase-tools`
2. `firebase login`

* project is viewable within `https://console.firebase.google.com/`
* settings are here: `https://console.firebase.google.com/u/3/project/ai-extensions-codelab-dcf62/settings/general` 
* firestore: `https://console.firebase.google.com/u/3/project/ai-extensions-codelab-dcf62/firestore` 
* storage: `https://console.firebase.google.com/u/3/project/ai-extensions-codelab-dcf62/storage`