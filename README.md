# `draft-js-prism-plugin`

A DraftJS plugin to add syntax highlighting support to your code blocks. Use in combination with [`draft-js-plugins`](https://github.com/draft-js-plugins/draft-js-plugins).

## Usage

```JS
import Prism from 'prismjs';
import createPrismPlugin from 'draft-js-prism-plugin';

const prismPlugin = createPrismPlugin({
  // Provide your own instance of PrismJS
  prism: Prism
});
```

## License

This code uses the [`draft-js-prism` decorator](https://github.com/SamyPesse/draft-js-prism) by [@SamyPesse](https://github.com/SamyPesse) and is based on code extracted from the [`draft-js-markdown-shortcuts-plugin`](https://github.com/ngs/draft-js-markdown-shortcuts-plugin) by [@ngs](https://github.com/ngs).

Licensed under the MIT License, Copyright ©️  2017 Space Program Inc. See [LICENSE.md](LICENSE.md) for more information.
