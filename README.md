# ChatBot:
An Artificial Intelligence (AI) ChatBot that uses OpenAI API packed with many features.

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
![UI](https://github.com/niubrandon/)
## Dependencies:
- axios
- i18next
- react-router-dom
- react-toastify
- react-tooltip
- tailwindcss
- sass
- typescript
- uuidv4
- eslint

## Setup
- clone the repo: `git@github.com:niubrandon/chatbot.git`
- install dependencies: `npm install`
- setup environment variables: create a .env file in root level with your own API key `REACT_APP_API_KEY=**********************`
- run app in the development mode: `npm start`
- open http://localhost:3000 to view it in the browser
- build the app for production to the build folder: `npm run build`