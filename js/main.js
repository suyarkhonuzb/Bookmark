const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsLinks = document.querySelectorAll('.tabs__link');
const elTabsPanels = document.querySelectorAll('.tabs__panel');


// functions

function deactivationElTabsItem(){
        // Remove active class tabs__item elements
        elsTabsItem.forEach(function(elTabsItem){
            elTabsItem.classList.remove('tabs__item--active')
        })
}
// Remove active class tab__panel elements
function deactivationElTabPanel(){
    elTabsPanels.forEach(function(elTabsPanel){
        elTabsPanel.classList.remove('tabs__panel--active')
    })
}


elsTabsLinks.forEach(function(elTabsLink){
    elTabsLink.addEventListener('click', function(evt){ 
        evt.preventDefault;
    // Remove active class tabs__item elements
    deactivationElTabsItem();


    // Add active class to tabs__item elements
    elTabsLink.parentElement.classList.add('tabs__item--active')
        deactivationElTabPanel();

    // Add active class tab__panel elements
    const elTargetPanel = document.querySelector(`#${elTabsLink.href.split('#')[1]}`);
    elTargetPanel.classList.add(`tab__panel--active`)
    })

    // Remove tabs__panel active class

})