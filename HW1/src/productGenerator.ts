export function productGenerator(count: number = 1): IProduct[] {
    return Array.from({ length: count },
                      (_, i) => ({ name: `Product ${i + 1}`, price: Math.floor(Math.random() * 70) + i }));
}

export type IProduct = {
    name: string;
    price: number;
};
