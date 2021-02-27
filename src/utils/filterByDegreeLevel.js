export const filterByDegreeLevel = (items, degreeLevel) => {
    if (degreeLevel === "All degree levels") {
        return items
    } else {
        return items.filter(item => item.degreeLevel === degreeLevel)
    }
}