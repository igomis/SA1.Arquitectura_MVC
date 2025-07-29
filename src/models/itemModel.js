let items = [];
exports.getAll = () => items;
exports.add = (item) => { items.push(item); return item; };
