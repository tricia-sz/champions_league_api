import createApp from "./app.js";

const app = createApp()
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`🔥 Server running at port localhost:${port}`);
  
}) 