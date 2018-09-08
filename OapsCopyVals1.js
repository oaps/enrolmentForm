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

    this.setOnChange = function () {

        $(this.fieldOrigin1).change(function() {
            self.updateDestinationValue1();
        });
    }
}


$( document ).ready(function() {
    Oaps_CopyFieldValue.setFieldOriginID1('36040704');
    Oaps_CopyFieldValue.setFieldDestinationID1('44541819');

    Oaps_CopyFieldValue.init();
});
