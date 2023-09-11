import { isValidURL } from '../client/js/urlValidation'

describe('Testing if isValidURL returns a valid URL', () => {
    test('Return true if URL is valid', () => {
      const valid = 'https://www.google.com/';
      expect(isValidURL(valid)).toBe(true);
    });
  
    test('Return false if URL is invalid', () => {
      const invalid = 'This is a invalid URL';
      expect(isValidURL(invalid)).toBe(false);
    });
})