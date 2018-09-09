var demo123CF_CopyFieldValue = new function() {
    var self = this;
	this.inField = new Number();
	this.outField = new Number();
	

    this.setFieldOriginID1 = function ( fieldId1 ) {
        this.fieldOrigin1 = fieldId1;
    }
    
    this.setFieldDestinationID1 = function ( fieldId1) {
        this.fieldDestination1 = fieldId1;
    }

    this.init = function () {
        this.setOnChange(36040704, 44541819);
    }
    
    this.updateDestinationValue1 = function (){
	$(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
    }

    this.setOnChange = function(in, out){
 
    window.addEventListener('load', function(){
	console.log('**START3**');
	    this.inField = in;
	    this.outField = out;
	    /**
	    this.inField = 36040704;
	    this.outField = 44541819;
	    console.log(this.inField);
	  **/  
        var /** sourceControlId = this.inField,  THE ID OF THE SENDER CONTROL */
         /**    targetControlId = this.outField, THE ID OF THE RECEIVER CONTROL **/
            sourceControlInstance = loader.getEngine().getDocument().getElementById(this.inField),
            targetControlInstance = loader.getEngine().getDocument().getElementById(this.outField);

        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );

    });

  }
}

$( document ).ready(function() {

    demo123CF_CopyFieldValue.init();
	
});
