({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        if(!open){
            component.set("v.open", true);
            //fethc the label value
            const labelValue = component.get("v.label");
            // fire the block click event
            let compEvent  = component.getEvent("onclick");
            compEvent.setParams({value : labelValue});
            compEvent.fire();
        }
    },

    scriptsLoaded : function(component, event, helper){
        const divElement = component.getElement(".board-block")
        fitText(divElement);
    }
})
