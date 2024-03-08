const producto = {
    id: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor')

weakMap.has(producto);
weakMap.get(producto);
weakMap.delete(producto);

