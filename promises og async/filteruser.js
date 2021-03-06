const { filterDir, filterDirP, filterDirMyPromise } = require("./filterdir");

async function tester() {
  try {
    const f1 = await filterDirMyPromise("Folder1", ".js");
    const f2 = await filterDirMyPromise("Folder2", ".js");
    const f3 = await filterDirMyPromise("Folder3", ".js");
    const f4 = await filterDirMyPromise("Folder4", ".js");
    const f5 = await filterDirMyPromise("Folder5", ".js");
    Promise.all([f1, f2, f3, f4, f5]).then((values) => {
        console.log(values);
      });
  } catch (err) {
    console.log(err);
  }
}
tester();

