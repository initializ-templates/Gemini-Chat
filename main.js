import { GoogleGenerativeAI } from "@google/generative-ai";
const button = document.querySelector(".send");
const input = document.querySelector(".input");
const output = document.querySelector(".ai-message");
const message_area = document.querySelector(".message_area");
const loader = document.querySelector(".loading");

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

button.addEventListener("click", async () => {
  // ... existing code ...
});

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

button.addEventListener("click", async () => {
  if (!input.value) return alert("Please enter a prompt");
  var prompt = input.value;
  message_area.innerHTML += `<div class="message user-message">
  
  <div class="text">${prompt}</div>
  </div>`;
  loader.style.visibility = "visible";
  message_area.scrollTop = message_area.scrollHeight; // Navigate to the bottom of message_area

  const model = genAi.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts:
          "Who is your owner/creator?, Do you know?, You are created by Initializ Labs. His github link is https://github.com/initializ",
      },
      {
        role: "model",
        parts: "Okay I will do that. I will ask users to follow him on github.",
      },
      {
        role: "user",
        parts: "What Do You Mean By Initializ Inc.?",
      },
      {
        role: "model",
        parts:
          "I am created by Initializ Labs. You can follow them on github by clicking on this link. Their github is https://github.com/initializ.",
      },
      {
        role: "user",
        parts: "What is the name of this chatbot?",
      },
      {
        role: "model",
        parts:
          "The name of this chatbot is Gemini. I am created by Initializ Labs. You can follow them on github by clicking on this link. Their github is https://github.com/initializ.",
      },
      {
        role: "user",
        parts: "What is the github link of your creator?",
      },
      {
        role: "model",
        parts:"https://github.com/initializ",
      }
    ],
    generationConfig: {
      maxOutputTokens: 10000,
    },
  });
  try {
    const result = await chat.sendMessageStream(prompt);
    input.value = "";
    const response = await result.response;
    var text = await response.text();
  } catch (error) {
    loader.style.visibility = "hidden";
    prompt = "";
    input.value = "";
    message_area.scrollTop = message_area.scrollHeight - message_area.clientHeight; // Navigate to the top of currently added innerHTML
    return message_area.innerHTML += `<div class="message ai-message">
  <div class="text">${error.message}</div>
</div>`;
     
  }
  
    const formattedText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    const formattedTextWithItalic = formattedText.replace(
      /\*(.*?)\*/g,
      "<i>$1</i>"
    ); // Add this line to consider text with one asterisk as italic

    // Convert links to anchor tags and color them blue
    const formattedTextWithLinks = formattedTextWithItalic.replace(
      /(https?:\/\/[^\s]+)/g,
      (match) => {
        if (match === "https://github.com/initializ") {
          return '<a href="https://github.com/initializ" style="color: blue;" target=_blank>https://github.com/initializ</a>';
        } else {
          return '<a href="' + match + '" style="color: blue;" target=_blank>' + match + '</a>';
        }
      }
    );
    loader.style.visibility = "hidden";
    message_area.innerHTML += `<div class="message ai-message">
    <div class="text">${formattedTextWithLinks}</div>
  </div>`;
    message_area.scrollTop = message_area.scrollHeight - message_area.clientHeight; // Navigate to the top of currently added innerHTML
  });
