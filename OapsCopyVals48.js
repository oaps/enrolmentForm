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

/**Allergies **/
	

        var sourceControlId = 36040704, /** THE ID OF THE SENDER CONTROL */
            targetControlId = 36181440, /** THE ID OF THE RECEIVER CONTROL **/
            sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
            targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

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
