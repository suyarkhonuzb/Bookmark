const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');

const modifier = {
    elActiveTabItem : 'tabs__item--active',
    elActiveTab : 'tab__panel--active',
    elAccordionOpen : `accordion__item--open`,
}

const elsAccordionItem = document.querySelectorAll(`.accordion__item`);
const elsAccordionItemToggler = document.querySelectorAll(`.accordion__item--toggler`);

function deactivateElTabItem(){
     elsTabsItem.forEach(function(elTabsItem)
        {elTabsItem.classList.remove(modifier.elActiveTabItem);
    })
}

function deactivateElTabPanel(){
    elsTabsPanel.forEach(function(elTabsPanel)
       {elTabsPanel.classList.remove(modifier.elActiveTab );
   })
}

function closeAccordionItem(){
    elsAccordionItem.forEach(function(elAccordionItem){
        elAccordionItem.classList.remove(modifier.elAccordionOpen)
    })
}

elsTabsLink.forEach(function(elTabLink){
    elTabLink.addEventListener('click', function(evt){
        evt.preventDefault;

    // Remove active class tab__item elements
   deactivateElTabItem();
        
    // Add active class to tab__item elements
    elTabLink.parentElement.classList.add('tabs__item--active');

    // Remove active class tab__panel elements
    deactivateElTabPanel();

    // Show active panel
    elTabPanel.classList.add(`tab__panel--active`)
    })
})

elsAccordionItemToggler.forEach(function(elAccordionItemToggler){
    elAccordionItemToggler.addEventListener('click',function(){
        closeAccordionItem();

        elAccordionItemToggler.closest(`.accordion__item`).classList.add(`accordion__item--open`)
    })
})