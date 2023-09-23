({
    addResultRecord : function(component, gameResult) {
        //call apex method call action
        const action = component.get("c.addResult");
        const gameMode = component.get("v.selectedMode");
        action.setParams({ 
            result : gameResult,
            mode : gameMode
        })

        action.setCallback(this, function(response){
            const state = response.getState();
            if(state !== 'SUCCESS'){
                console.log("Erorr in saving record");
            }

        })

        $A.enqueueAction(action);
    },
})
