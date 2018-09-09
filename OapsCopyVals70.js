var Oaps_CopyFieldValue = new function() {
    var self = this;
	
    this.init = function (){
        this.setAllergyChildName();
	this.setAllergySignorName();
	this.setAllergyRelationship();
	    
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
	
    this.setAllergySignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181455);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setAllergyRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181458);
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
