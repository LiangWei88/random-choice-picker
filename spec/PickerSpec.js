describe('Picker', () => {
    const {Picker} = require('../dist/index');
    
    beforeEach(() => {
        picker = new Picker();
    });

    it('picker should be an object', () => {
        expect(picker).toEqual(jasmine.any(Object));
    });

    it('getSliceArea should return a Array', () => {
        expect(picker.getSliceArea()).toEqual(jasmine.any(Array));
    });
});