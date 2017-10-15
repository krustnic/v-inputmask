# Vue 2.* Input mask directive

It's wrapper for [jquery.inputmask](https://github.com/RobinHerbots/Inputmask) library. Allow to use directive on components (not only on INPUT tag elements)

## Example

Install:

```sh
npm install v-inputmask --save
```

Exmaple for [Elements UI](http://element.eleme.io/#/en-US):

```javascript
import VInputmask from 'v-inputmask';

Vue.use(VInputmask);
```

```html
<el-form-item label="Date">
    <el-input v-inputmask="'99.99.9999'"></el-input>
</el-form-item>
```

For components by default it search for first `input` element. If there are multiple 
elements it is possible to specify it by css selector:

```html
<my-component v-inputmask="'999-999'" data-inputmask-target="#code"></my-component>
```