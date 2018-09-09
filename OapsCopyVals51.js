var Oaps_CopyFieldValue = new function() {
    var self = this;
	
    this.init = function (){
        this.setOnChange();
    }
    
    this.setOnChange = function(){
 
    window.addEventListener('load', function(){

	    this.inChildName = 36040704;
	    this.inSignor = 36935922;
	    this.relation = 36936048;
	    
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(this.inChildName),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181440);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});

  }
}

$( document ).ready(function() {
    Oaps_CopyFieldValue.init(); 
});
