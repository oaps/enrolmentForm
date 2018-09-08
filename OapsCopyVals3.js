var Oaps_CopyFieldValue = new function() {
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

var Oaps_CopyFieldValue = new function() {
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

        var sourceControlId = this.fieldOrigin1, /** THE ID OF THE SENDER CONTROL */
            targetControlId = this.fieldDestination1, /** THE ID OF THE RECEIVER CONTROL **/
            sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
            targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });

        targetControlInstance.setValue( sourceControlInstance.getValue() );

    });

}



$( document ).ready(function() {
    Oaps_CopyFieldValue.setFieldOriginID1('36040704');
    Oaps_CopyFieldValue.setFieldDestinationID1('44541693');

    Oaps_CopyFieldValue.init();
});


$( document ).ready(function() {
    Oaps_CopyFieldValue.setFieldOriginID1('36040704');
    Oaps_CopyFieldValue.setFieldDestinationID1('44541819');

    Oaps_CopyFieldValue.init();
});
