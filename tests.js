// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello(name)).toBe('string');
    });
    it('should return the string "Hello, Boryana" when executed', function () {
       expect(sayHello("Boryana")).toBe('Hello, Boryana');
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld(name)).not.toBe(undefined);
    });
});