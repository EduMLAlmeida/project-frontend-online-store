export async function getCategories() {
  try {
    const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const categories = await fetchAPI.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/categories=${categoryId}&q=${query}`);
    const categoryAndQuery = await fetchAPI.json();
    return categoryAndQuery;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromQuery(query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const categoryAndQuery = await fetchAPI.json();
    return categoryAndQuery;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetails(query) {
  try {
    const fetchAPI = await fetch(`https://api.mercadolibre.com/items/$PRODUCT_ID${query}`);
    const details = await fetchAPI.json();
    return details;
  } catch (error) {
    console.log(error);
  }
}
