import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('check converter', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.toString()).toBe(expected);
});
