var oaps_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.fieldOrigin1 = '';
   
    this.fieldDestination1 = '';
   	

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

        var sourceControlInstance = loader.getEngine().getDocument().getElementById(this.fieldOrigin1),
            targetControlInstance = loader.getEngine().getDocument().getElementById(this.fieldDestination1);

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
