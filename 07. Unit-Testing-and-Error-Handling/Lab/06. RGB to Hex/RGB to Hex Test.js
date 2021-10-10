const { expect } = require('chai');
let rgbToHexColor = require('./RGBtoHEX');

describe('rgbToHexColor', () => {
    it('coverts black to HEX', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });
    it('coverts white to HEX', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    });

    it('coverts red to HEX', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
    });
    it('coverts blue to HEX', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
    });
    it('coverts green to HEX', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
    });

    it('returns undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined for values higher than 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('returns undefined for values higher than 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    })

    it('returns undefined for negative values', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('returns undefined for values higher than 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    })

    it('converts {151, 104, 172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });
})