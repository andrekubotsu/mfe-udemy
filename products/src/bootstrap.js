import faker from 'faker'

const mount = (element) => {
    let products = ''

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }
    
    element.innerHTML = products
}

// Context/Situation #1
// We are running this file in development in isolation
// we are using our local index.html file
// which defnitely has an element with and id of 'dev-products'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === 'development'){
    const element = document.querySelector('#dev-products');

    // assuming our container doesn't have an element
    // with id 'dev-products'
    if (element) {
        // we are probably running in isolation
        mount(element);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the Container app
// no guarantee that an element with an id of 'dev-products' exists
// we do not want try to immediately render the app
export { mount }