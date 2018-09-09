var demo123CF_CopyFieldValue = new function() {
    var self = this;
	this.inField = new Number();
	this.outField = new Number();

function greet(name) {
    console.log(`Hello, ${name}!`);
}
	
    this.init = function () {
        this.setOnChange();
    }
    

    this.setOnChange = function(){
 
    window.addEventListener('load', function(){

	    this.inChildName = 36040704;
	    this.inSignor = 36935922;
	    this.relation = 36936048;
	    console.log("****HERE****");

	var sourceControlInstance = loader.getEngine().getDocument().getElementById(this.inChildName),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181440);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        }); targetControlInstance.setValue( sourceControlInstance.getValue() );
	var sourceControlInstance = loader.getEngine().getDocument().getElementById(this.inSignor),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181455);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        }); targetControlInstance.setValue( sourceControlInstance.getValue() );
	var sourceControlInstance = loader.getEngine().getDocument().getElementById(this.relation),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181458);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        }); targetControlInstance.setValue( sourceControlInstance.getValue() );
	    
    });

  }
}

$( document ).ready(function() {

/**    demo123CF_CopyFieldValue.init(); **/
	demo123CF_CopyFieldValue.greet('Daljit');
	
});
