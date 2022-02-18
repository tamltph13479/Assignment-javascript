export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
        if (component.afterRender) component.afterRender();
    }
};
export const $ = (element) => {
    const selectors = document.querySelectorAll(element);
    return selectors.length === 1 ? selectors[0] : selectors;
};