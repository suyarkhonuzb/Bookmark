const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');

function deactivateElTabItem(){
     elsTabsItem.forEach(function(elTabsItem)
        {elTabsItem.classList.remove('tabs__item--active');
    })
}

function deactivateElTabPanel(){
    elsTabsPanel.forEach(function(elTabsPanel)
       {elTabsPanel.classList.remove('tab__panel--active');
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

