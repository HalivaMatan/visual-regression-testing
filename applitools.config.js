module.exports = {
  puppeteerOptions: {
    args: ["--no-sandbox"],
  },
  browser: [
    { width: 320, height: 1200, name: "chrome" },
    { width: 600, height: 1200, name: "chrome" },
    { width: 960, height: 1200, name: "chrome" },
    { width: 1280, height: 1200, name: "chrome" },
    { width: 1800, height: 1200, name: "chrome" },
  ],
};
