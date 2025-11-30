
const SINGLE_PAGE_PRODUCTS = `
*[_type == "product" && slug.current == $slug ] | order(name asc) [0] 
`
export {SINGLE_PAGE_PRODUCTS}