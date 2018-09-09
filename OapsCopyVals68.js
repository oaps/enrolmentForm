var Oaps_CopyFieldValue = new function() {
    var self = this;
	
    this.init = function (){
        this.setAllergyChildName();
	    
    }

	
	
/** ALLERGY **/	 
    this.setAllergyChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
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
