import { productGenerator } from './productGenerator';

function init(): void {
    console.time('ProductGenerator');
    const result = productGenerator(1000);
    console.table(result);
    console.timeEnd('ProductGenerator');
}

init();
