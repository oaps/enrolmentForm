var demo123CF_CopyFieldValue = new function() {
    var self = this;
	this.inField = new Number();

	this.errorMessage = '';
	this.id123cf = '#id123-control';
	this.fieldOrigin1 = '36040704';
   	this.fieldDestination1 = '44541819';


    this.setFieldOriginID1 = function ( fieldId1 ) {
        this.fieldOrigin1 = fieldId1;
    }
    
    this.setFieldDestinationID1 = function ( fieldId1) {
        this.fieldDestination1 = fieldId1;
    }

    this.init = function () {
        this.setOnChange();
    }
    
    this.updateDestinationValue1 = function (){
	$(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
    }

    this.setOnChange = function(){
 
    window.addEventListener('load', function(){
	console.log('**START**');
	    this.inField = 123;
	    console.log(this.inField);
	    
        var sourceControlId = 36040704, /** THE ID OF THE SENDER CONTROL */
            targetControlId = 44541819, /** THE ID OF THE RECEIVER CONTROL **/
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

    demo123CF_CopyFieldValue.init();
	
});
