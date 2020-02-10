const app = require("./app");
const port = 5050;

app.listen(port, () => {
  console.log(`server started on :${port}`);
});

module.exports = app;
