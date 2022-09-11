const dependFiles = require('./depend-files');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');

const desPath = 'build';

const mainFile = 'dist/**/*';
const packageInfo = JSON.parse(fs.readFileSync('package.json'));

const saveMainFilePath = path.join(desPath, packageInfo.name);

/**
 * convert will card path to parsed path array
 *
 * @param {string} patternPath input pattern path
 * @return output matched array
 */
function parseWillCardPath(patternPath) {
  return glob.sync(patternPath, {nodir: true});
}

/**
 * split path to array
 *
 * @param {string} inputPath input path
 * @return output path array
 */
function parsePathArray(inputPath) {
  return path.normalize(inputPath).split(path.sep);
}

/**
 * convert will card path array to parsed path array
 *
 * @param {Array} pathArray input will card path array
 * @return parsed path array
 */
function extendPathArray(pathArray) {
  const resultPathArray = [];

  pathArray.map(pathItem => parseWillCardPath(pathItem))
    .forEach(pathItem => resultPathArray.push(...pathItem));
  return resultPathArray;
}

function handleFolder(inputPath) {
  const pathArray = parsePathArray(inputPath);
  let outputPath;

  if (pathArray[0] === 'dist') {
    outputPath = path.join(saveMainFilePath, ...pathArray);
  } else if (pathArray[0] === 'node_modules') {
    let slicePos = 0;
    const indexOfDist = pathArray.indexOf('dist');

    if (indexOfDist !== -1) {
      slicePos = indexOfDist - 1;
    }
    outputPath = path.join(desPath, ...pathArray.slice(slicePos));
  }
  // console.log('copy:', inputPath, '->', outputPath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.copyFileSync(inputPath, outputPath);
}

function genExampleFile() {
  let exampleHtml = fs.readFileSync('index.html', 'utf8');
  // node_modules/(+)/dist

  exampleHtml = exampleHtml.replace(/"node_modules\/([^\/]+\/dist\/)/g, '"$1');
  // node_modules/(+)/(+)/dist
  exampleHtml = exampleHtml.replace(/"node_modules\/[^\/]+\/([^\/]+\/dist\/)/g, '"$1');
  // dist
  exampleHtml = exampleHtml.replace(/"(dist\/)/g, `"${packageInfo.name}/$1`);

  fs.writeFileSync(path.join(desPath, 'index.html'), exampleHtml);
}

(() => {
  const fileList = [
    ...parseWillCardPath(mainFile),
    ...extendPathArray(dependFiles)
  ];

  fs.removeSync(desPath);

  fileList.forEach((file) => {
    handleFolder(file);
  });

  genExampleFile();
})();
