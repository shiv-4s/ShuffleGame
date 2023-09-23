({
    startGame : function(component, event, helper) {
        //access combobox
        let gameModeCombobox =  component.find("gameMode");
        //access the value of combobox
        let selectedValue = gameModeCombobox.get("v.value");
        console.log("+++++selectedValue+++++ " , selectedValue);

        const selectedMode = component.get("v.selectedMode");
       
        component.set("v.selectedMode", selectedValue);

        if(selectedMode){
            const boardComp = component.find("boardComp");
            //call aura method
            boardComp.startGame();
        }
    },
    reshuffleBoard : function(component, event, helper){
        console.log('reshuffleBoard method called+++++++');
        const boardComp = component.find("boardComp");
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisable", true)
    },

    onResultHandler : function(component, event, helper){
        const result = event.getParam("result");
        if(result === "win"){
            component.set("v.reshuffleDisable", true);
        }
        else{
            component.set("v.reshuffleDisable", false);

        }
        helper.addResultRecord(component, result);

    },
})
