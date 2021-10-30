import { IProduct, productGenerator } from '../../src/productGenerator';

describe('Check ProductGenerator function', () => {
    let products: IProduct[];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Should return valid input products count', async () => {
        expect.assertions(1);
        const expectedResponse: number = 10;
        products = productGenerator(expectedResponse);
        expect(products.length).toEqual(expectedResponse);
    });
});
