const db = require('./db/queries');

exports.groceryListGet = async (req, res) => {
    const categories = await db.getCategories();
    const items = await db.getItems();
    res.render("groceries", {categories: categories, items: items})
}

exports.addItemPost = async (req, res) => {
    const {item, category} = req.body
    await db.addItem(item, category)
    res.redirect('/');
}

exports.removeItemPost = async (req,res) => {
    await db.removeItems();
    res.redirect('/');
}

