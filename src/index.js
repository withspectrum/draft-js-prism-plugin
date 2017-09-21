// @flow
import React from 'react';
import PrismDecorator from 'draft-js-prism';

type Options = {
  prism: Object 
};

const prismPlugin = (options: Options) => {
  if (!options || !options.prism) throw new Error('You must provide an instance of the prism.js library to draft-js-prism-plugin. See the documentation at https://github.com/withspectrum/draft-js-prism-plugin for more information!')
  const { prism } = options;
  return {
    decorators: [
      new PrismDecorator({
        prism: prism,
        getSyntax(block) {
          const language = block.getData().get('language');
          console.log(language);
          if (typeof prism.languages[language] === 'object') {
            return language;
          }
          return null;
        },
        render({ type, children  }) {
          return <span className={`prism-token token ${type}`}>{children}</span>;
        }
      })
    ]
  };
}

export default prismPlugin;
