var oaps_CopyFieldValue = new function() {
    var self = this;

   	

    this.setFieldOriginID1 = function ( fieldId1 ) {
        this.fieldOrigin1 = fieldId1;
    }
    
    
    this.setFieldDestinationID1 = function ( fieldId1 ) {
        this.fieldDestination1 = fieldId1;
    }

    this.init = function () {
        this.setOnChange('36040704', '44541819');
    }
    

    this.setOnChange = function(o,i){
 
    window.addEventListener('load', function(){

        var sourceControlId = o,
            targetControlId = i,
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
