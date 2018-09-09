var demo123CF_CopyFieldValue = new function() {
    var self = this;
	this.inField = new Number();
	this.outField = new Number();


    this.init = function (in,out) {
        this.setOnChange(in,out);
    }
    

    this.setOnChange = function(in,out){
 
    window.addEventListener('load', function(in, out){

	    this.inChildName = 36040704;
	    this.inSignor = 36935922;
	    this.relation = 36936048;
	    console.log("****HERE****");
	    console.log(out);

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

    demo123CF_CopyFieldValue.init();
	
});
