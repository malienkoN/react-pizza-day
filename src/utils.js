export const calcTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.qty, 0);

export const calcTotalPrice = (items) =>
    items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0);
