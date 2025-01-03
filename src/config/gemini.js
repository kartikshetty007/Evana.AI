// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai"

// const apiKey = "AIzaSyA8gOqcYZiXwUkw7EotDJPiT6_6soej4fE";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash-exp",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//     ],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   console.log(result.response.text());
// }

// export default run();



// node -v # Should be >= 18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
}  from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyDvm965ffU39TN2OLRni-gvG8tClvKtL_0";

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens:2048,
    };
    const safetySettings = [
      {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
  ];
  
  const chat = model.startChat({
      generationConfig,
      safetySettings,
      history:[

      ],
  });

  const result = await chat.sendMessage(prompt)
  const response = result.response;
  console.log(response.text());
  return response.text();
}
export default runChat;