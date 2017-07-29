var through = require('through2');    // npm install --save through2
const markdown = require( "markdown" ).markdown

module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    file = resolveFile(file, markdownIt)
    callback(null, file)
  });
};

function resolveFile(file, resolveFn) {
  let text = file.contents.toString('utf8')
  text = resolveFn(text)
  const buffer = Buffer.from(text, 'utf8')
  file.contents = buffer
  return file
}

function markdownIt(text) {
  return markdown.toHTML(text)
}