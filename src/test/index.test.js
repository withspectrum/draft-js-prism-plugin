// @flow
import createPrismPlugin from '../';

it('should return an object', () => {
  const plugin = createPrismPlugin({
    prism: {},
  });
  expect(plugin).toBeInstanceOf(Object);
})

it('should throw an error if no instance of Prism is supplied', () => {
  // $FlowIgnore the next line is supposed to be incorrect
  expect(() => createPrismPlugin()).toThrow();
})
