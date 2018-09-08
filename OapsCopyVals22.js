var oaps_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.fieldOrigin1 = '36040704';
   
    this.fieldDestination1 = '44541819';
   	

    this.setFieldOriginID1 = function ( fieldId1 ) {
        this.fieldOrigin1 = fieldId1;
    }
    
    
    this.setFieldDestinationID1 = function ( fieldId1 ) {
        this.fieldDestination1 = fieldId1;
    }

    this.init = function () {
        this.setOnChange();
    }
    

    this.setOnChange = function(){
 
    window.addEventListener('load', function(){

        var sourceControlId = 36040704,
            targetControlId = 44541819,
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

    oaps_CopyFieldValue.init();
});
