const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const customMarkdown = require('./util/gulp-plugin/customMarkdown')
const rename = require("gulp-rename")
const dirTree = require('directory-tree')
const htmlToText = require('html-to-text')
const moment = require('moment')


const testPath = path.resolve(__dirname, './data/blog/src/**/*.md')
const outputPath = path.resolve(__dirname, './data/blog/dist')
const outputFilesPath = path.resolve(__dirname, './data/blog/dist/**/*.html')
const blogDataPath = path.resolve(__dirname, './data/blog/index.js')

// transform markdown files to html
gulp.src(testPath)
  .pipe(customMarkdown())
  .pipe(rename(path => { path.extname = '.html' }))
  .pipe(gulp.dest(outputPath))

// check config file in output folders
console.log(gulp.src(outputFilesPath))



// build blog data
const data = getBlogData()
fs.writeFile(blogDataPath, `export default ${
  JSON.stringify(data)
  }`, function (err) {
    if (err) {
      return console.log(err);
    }
  });


function getBlogData() {
  return {
    blogs: getBlogs(),
    catalog: getCatalog(),
    tags: {

    }
  }
}

function getBlogs() {
  const tree = dirTree(outputPath)
  let blogs = []
  let catagory = 'default'
  // get default blogs
  tree.children
    .filter(info => info.type === 'file')
    .map(fileInfo => {
      _resolveFileInfo(fileInfo, blogs, catagory)
    })
  // get blogs in catagory folder
  tree.children
    .filter(info => info.type === 'directory')
    .map(info => {
      const { name: catagory } = info
      info.children.map(fileInfo => {
        _resolveFileInfo(fileInfo, blogs, catagory)
      })
    })
  return blogs
}

function _resolveFileInfo(fileInfo, blogs, catagory) {
  const {
    path,
    name
  } = fileInfo
  const htmlTxt = fs.readFileSync(path, { encoding: 'utf8' })
  const resolvedPath = path.replace(__dirname, '')

  // get abstract
  const abstract = `${htmlToText.fromString(htmlTxt).substring(0, 100)}...`

  // get create time
  const stat = fs.statSync(path)
  const { ctime } = stat
  const createTime = moment(ctime).format("YYYY-MM-DD")

  // get tag

  blogs.push({
    title: name,
    path: resolvedPath,
    abstract,
    createTime,
    tag: null,
    catagory
  })
}

function getCatalog() {
  const tree = dirTree(outputPath)
  return tree.children
    .filter(info => info.type === 'directory')
    .map(info => info.name)
}

function getTags() {

}