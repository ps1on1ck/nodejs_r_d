import { productGenerator } from './productGenerator';

function init(): void {
    console.time('ProductGenerator');
    const result = productGenerator(1000);
    console.table(result);
    console.timeEnd('ProductGenerator');
    console.time('50thElement');
    const element = result[49];
    console.table(element);
    console.timeEnd('50thElement');
}

init();
