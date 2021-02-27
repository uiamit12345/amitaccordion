export const filterByCategory = (items, category) => {
    return items.filter(item => item.categories.includes(category))
}