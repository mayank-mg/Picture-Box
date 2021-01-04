# Picture Box

A vanila js library to show Crousal on image click

## Installations

`npm install pictureBox`

## Getting started

Add class `picture-box` to the img tag that you want to include in the crousal

```html
<img class="picture-box" src="image1.jpg" />
```

Add a js file in your project add add

```js
import { pictureBox } from "picture-box/pictureBox";
import "picture-box/pictureBox.css";
pictureBox.render();
```

Bundle it with webpack,parcel or any other bundler
