# ChatBot
An Artificial Intelligence (AI) ChatBot that uses OpenAI API packed with many features.

View the app demo here: http://brandon-react-cicd.s3-website-us-east-1.amazonaws.com
## Tech Stack:
- React
- TypeScript
- Tailwind

## Technical requirements:
- Results should come from OpenAI’s completions API ✅
- Each result should include at least the original prompt you entered and the response from the API. ✅
- Responses should be stored in order of newest to oldest. ✅
- The HTML that ends up being served client-side should be accessible and semantic ✅ 

The following extra features were also implemented:
- Save responses if the user leaves or reloads the page ✅
- Let the user choose the AI engine from a select box ✅
- Add some presets for the user to quickly send a good prompt ✅
- Make the app more specific to a single purpose. ✅
  - The app can be used for chatting (based on the [Chat example](https://beta.openai.com/examples/default-chat))
  
## Features
- React router to navigate between pages
- Data saving in local storage
- Collection card can be bookmarked and added to the Favorites page
- Provided multiple AI model options
- Unit tests for all components
- Accessible and semantic
- Toast notifications 
- React tooltip when hovering over a preset question
- Theme options with light and dark mode
- Localization options (English and French)
- CI/CD pipeline integrates with circleCI and deployed to AWS

## Screenshots

![](https://user-images.githubusercontent.com/16887712/168495690-9715e0a5-c2d2-4711-9f1b-ae93217a83cb.png)

<details>
  <summary>Adding a collection card to Favorites</summary>

  ![](https://user-images.githubusercontent.com/16887712/168495692-f7125e71-e85e-49aa-9231-c45995ffb06a.png)
</details>

<details>
  <summary>Home page - preset questions with tooltip</summary>

  ![](https://user-images.githubusercontent.com/16887712/168495682-ea7b1163-bc7b-44f8-8972-5bf2590d14ae.png)
</details>

<details>
  <summary>Home page - small screen</summary>

  ![](https://user-images.githubusercontent.com/16887712/168495686-73b94ebd-9894-40f0-a08f-011d739e666e.png)
</details>

<details>
  <summary>Favorites page in dark mode with French locale selected</summary>

  ![](https://user-images.githubusercontent.com/16887712/168495678-a2a66063-06b4-4377-a86b-3a88d077d2d7.png)
</details>

<details>
  <summary>About page & dark mode</summary>

  ![](https://user-images.githubusercontent.com/16887712/168495677-0ff00ea1-21f1-4b44-bff5-a6030393d83a.png)
</details>

## Dependencies:
- axios
- eslint
- i18next
- react-router-dom
- react-toastify
- react-tooltip
- sass
- tailwindcss
- typescript
- uuidv4

## Setup
- clone the repo: `git@github.com:niubrandon/chatbot.git`
- install dependencies: `npm install`
- setup environment variables: create a .env file in root level with your own API key `REACT_APP_API_KEY=**********************`
- run app in the development mode: `npm start`
- open http://localhost:3000 to view it in the browser
- build the app for production to the build folder: `npm run build`