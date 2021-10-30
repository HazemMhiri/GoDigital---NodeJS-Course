const fs = require("fs");
const path = require("path");

async function createJSON(Obj) {
  try {
    fs.writeFile("hello.txt", "Hello GoDigital students", (err) => {
      if (err) throw new Error(err);

      console.log("success in writing file  hello.txt");
    });

    await fs.promises.writeFile("myJson.json", JSON.stringify(Obj));
    console.log("success in writing file  myJson.json");

    await fs.promises.unlink("hello.txt");
    console.log("success in deleting file  hello.txt");

    return true;
  } catch (error) {
    return Promise.reject(error);
  }
}

function createBigFile() {
  const file = fs.createWriteStream("bigFile.txt");

  for (let i = 0; i < 1e7; i++) {
    file.write("hello");
  }

  file.end();
}

function readFile(path) {
  fs.readFile(path, (err, data) => {
    console.log(data);
  });
}

function readBigFile() {
  const readStream = fs.createReadStream("bigFile.txt", { highWaterMark: 256 });

  readStream.on("data", (chunk) => {
    console.log("\n\n####################\n\nreceived chunk: " + chunk);
  });
}

function getAbsolutePath() {
  const projectDir = path.dirname(__dirname);
  const absolutePath = ath.join(projectDir, "modules", "fileManager.js");
}

module.exports.createJSON = createJSON;
module.exports.createBigFile = createBigFile;
module.exports.readFile = readFile;
module.exports.readBigFile = readBigFile;
