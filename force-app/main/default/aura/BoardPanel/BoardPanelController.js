({
    startGame : function(component, event, helper) {
        let gameModeCombobox =  component.find("gameMode");
        let selectedValue = gameModeCombobox.get("v.value");
        console.log('start method called+++++++');
        console.log("++++++selectedValue+++++ ", selectedValue);
    },
    reshuffleBoard : function(component, event, helper){
        console.log('reshuffleBoard method called+++++++');

    }
})
