# `draft-js-prism-plugin`

A DraftJS plugin to add syntax highlighting support to your code blocks. Use in combination with [`draft-js-plugins`](https://github.com/draft-js-plugins/draft-js-plugins).

## Usage

First, create the plugin and add it to the `plugins` array of your PluginsEditor:

```JS
import Prism from 'prismjs';
import createPrismPlugin from 'draft-js-prism-plugin';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

    const prismPlugin = createPrismPlugin({
      // It's required to provide your own instance of Prism
      prism: Prism
    });

    this.state = {
      plugins: [prismPlugin]
    }
  }

  render() {
    return (
      <PluginsEditor
        plugins={this.state.plugins}
      />
    )
  }
}
```

Now add a `language` key to the data of the code block you want to highlight:

```JS
// TODO: Somehow get a code block and its key, this is up to you
const { block, key } = getCurrentBlock();
if (block.getType() !== "code-block") return;

// Replace the code block with a new one with the data.language changed to "javascript"
const data = block.getData().merge({ language: 'javascript' });
const newBlock = block.merge({ data });
const newContentState = currentContent.merge({
  blockMap: blockMap.set(key, newBlock),
  selectionAfter: currentSelection
})

// Now that code block will be highlighted as JavaScript!
this.setState({
  editorState: EditorState.push(editorState, newContentState, "change-block-data")
})
```

## License

This code uses the [`draft-js-prism` decorator](https://github.com/SamyPesse/draft-js-prism) by [@SamyPesse](https://github.com/SamyPesse) and is based on code extracted from the [`draft-js-markdown-shortcuts-plugin`](https://github.com/ngs/draft-js-markdown-shortcuts-plugin) by [@ngs](https://github.com/ngs).

Licensed under the MIT License, Copyright ©️  2017 Space Program Inc. See [LICENSE.md](LICENSE.md) for more information.
