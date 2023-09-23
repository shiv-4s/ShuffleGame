({
    doInit : function(component, event, helper) {

        const gameMode =  component.get("v.mode");
        let colom = 0;
        if(gameMode && gameMode === 'hard'){
            colom = 6;
        }
        else if(gameMode === 'medium'){
            colom = 4;
        }
        else colom = 3;
        let blockSize = 12 / colom;
        component.set("v.blockSize", blockSize);
        const words = helper.getWords(colom * colom);

        console.log("++++++words++++ ", words);
        component.set("v.words", words);
        const winWord = helper.getWinWords(words);        
        component.set("v.winWord", winWord);
        console.log("++++++winWord++++ ", winWord);
        helper.resetBoard(component);

    },

    blockClickHandler : function(component, event, helper) {

        let clickCount = component.get("v.clickCount") + 1;
        const value = event.getParam("value");

        if(value === component.get("v.winWord")){
            //user has won
            component.set("v.result", "YOU WIN");
            console.log("winner");
            helper.disableBoard(component);
            helper.fireResultEvent("win");
        }
        else if(clickCount === 3){
            //user lose
            component.set("v.result", "YOU LOSE");
            console.log("loser");
            helper.disableBoard(component);
            helper.fireResultEvent("lose");

        }
        component.set("v.clickCount", clickCount);

    },

    reshuffleBoard : function(component, event, helper) {
        const words = component.get("v.words");
        const randomizeWord = helper.randomArray(words);
        component.set("v.words", randomizeWord);
        helper.resetBoard(component);
    },

    doRender : function(component, event, helper) {
        console.log("render method called+++++++");

    },
})
