const app = document.getElementById("app");
if (app) {
  const msg = document.createElement("p");
  msg.textContent = "Hello from TypeScript!";
  msg.className = "text-lg text-green-700";
  app.appendChild(msg);
}
