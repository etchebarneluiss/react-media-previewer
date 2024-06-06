<p align="center">
  <img src="images/logo.png" align="center" width="150px" height="150px" />
</p>
<h1 align="center">React Media Previewer</h1>
<p align="center">
  <a href="https://drone.yuancode.co/ruilisi/react-media-previewer" title="Build Status">
    <img src="https://drone.yuancode.co/api/badges/ruilisi/react-media-previewer/status.svg?ref=refs/heads/master">
  </a>
</p>

<p align="center">
  <a href="README-CN.md">简体中文</a> | English
</p>

## Purpose

`react-media-previewer` is to create a previewer that is compatible with viewing various media files by one click. It is a component built with React and Typescript. In order to preview media files such as image, video, audio and PDF, we made it.

## Installation

```
npm install @etchebarneluiss/react-media-previewer

```

or

```
yarn add @etchebarneluiss/react-media-previewer

```

## Usage

```js
import { render } from "react-dom";
import PreviewModal from "react-media-previewer";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div id="app">
      <button onClick={() => setVisible(true)}>open</button>
      <PreviewModal
        visible={visible}
        setVisible={setVisible}
        urls={["YOUR IMAGE URL", "YOUR IMAGE URL"]}
        urlsTypes={["YOUR FILE MIME TYPE", "YOUR FILE MIME TYPE"]}
      />
    </div>
  );
}

render(<App />, document.getElementById("app"));
```

## Preview Files

<img src="images/example.gif" />

## Live Demo

[Try Demo on CodeSandbox](https://codesandbox.io/s/react-media-previewer-9teg9p)

## Props

| Property   | Type     | Description                                                     |
| :--------- | :------- | :-------------------------------------------------------------- |
| visible    | bollean  | whether the previewer is visible or not                         |
| setVisible | function | function called to close the previewer when previewer is opened |
| urls       | string[] | media file urls                                                 |
| urlsTypes  | string[] | media file mime types                                           |

## Roadmap

- ✅ Image preview
  - ✅ Image rotate
  - Image scale
  - ✅ Multiple images preview
- ✅ Audio and video preview
- ✅ PDF preview
  - PDF pagination
- ✅ Word preview
- ✅ Excel preview
- ✅ PPT preview
- More features
  - Keyboard support
  - ...

## Credits

This project is forked from the original repository by Ruilisi. I would like to extend my gratitude to them for their excellent work. You can find the original repository [here](https://github.com/ruilisi/react-media-previewer).

## License

[MIT](https://github.com/ruilisi/react-media-previewer/blob/master/LICENSE.md)
