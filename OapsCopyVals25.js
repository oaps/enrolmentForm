var demo123CF_CopyFieldValue = new function() {
    var self = this;

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

    this.setOnChange = function () {

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin1).change(function() {
            self.updateDestinationValue1();
        });
    }
}

$( document ).ready(function() {
    demo123CF_CopyFieldValue.setFieldOriginID1('36040704-1', '36040704-2');


    demo123CF_CopyFieldValue.init();
	
});
