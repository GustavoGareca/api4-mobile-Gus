import { getProductList } from '../src/productService.js';
import fs from 'fs';

describe('Product List Display', () => {
  test('Debe mostrar información si hay productos', () => {
    const result = getProductList();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toContain('iPhone 13');
  });

  test('Debe indicar que no hay productos si la lista está vacía', async () => {
    jest.unstable_mockModule('../data/products.json', () => ({
      default: { products: [] }
    }));

    const { getProductList: getEmptyList } = await import('../src/productService.js');
    const result = getEmptyList();

    expect(result).toBe('No hay productos disponibles');
  });
});
