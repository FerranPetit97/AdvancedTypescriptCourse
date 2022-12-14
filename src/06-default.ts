export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
};

// Con este idetificador '||' puede generar problemas
// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);
const p2 = createProduct(2, false);
console.log(p2);
const p3 = createProduct(3);
console.log(p3);
const p4 = createProduct(4, true, 100);
console.log(p4);
const p5 = createProduct(5, false);
console.log(p5);
