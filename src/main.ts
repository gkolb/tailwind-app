const app = document.getElementById("app");
if (app) {
  const msg = document.createElement("p");
  msg.textContent = "Hello from TypeScript!";
  msg.className = "text-center text-lg text-cyan-400";
  app.appendChild(msg);
}
