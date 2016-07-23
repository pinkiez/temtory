# temtory  [![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

JavaScript library for rendering template using underscore.

## Installation
The temtory is using [Grunt](https://github.com/gruntjs/grunt) for building.
if you want to build, it would be better to install [grunt-cli](https://github.com/gruntjs/grunt-cli) package as a global.
```sh
npm install -g grunt-cli
```
And run a build command after cloning a copy of the temtory.
```sh
git clone https://github.com/pinkiez/temtory.git
cd temtory
npm run build
```

## Example
This example code is simple rendering a template.
```html
<div id="contents"></div>
```

```html
<script type="text/template" id="template_contents">
  <div>
    <p><%= text %></p>
  </div>
</script>
```

```js
var contents = $('#contents');
temtory.render(contents, 'template_contents', {
  text: 'Hello Temtory !'
});
```

## License
[MIT licensed](./LICENSE)
