const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");
const messages = ["好心情已送达，Justin。", "今天的好运，正在路上。", "你值得被世界温柔对待。"];
let index = 0;

button.addEventListener("click", () => {
  message.textContent = messages[index % messages.length];
  index += 1;
  button.querySelector("span:first-child").textContent = "再收下一句";
});
