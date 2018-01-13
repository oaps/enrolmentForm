var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.one = '-1';
    this.two = '-2';
    this.fieldOrigin1 = '';
    this.fieldOrigin2 = '';
    this.fieldDestination1 = '';
    this.fieldDestination2 = '';
    this.fieldDestination3 = '';
    this.fieldDestination4 = '';
    this.fieldDestination5 = '';
    this.fieldDestination6 = '';
    this.fieldDestination7 = '';
    this.fieldDestination8 = '';

    this.setFieldOriginID = function ( fieldId1 ) {
        this.fieldOrigin1 = fieldId1+this.one;
        this.fieldOrigin2 = fieldId1+this.two;
    }

    this.setFieldDestinationID = function ( fieldId1, fieldId2, fieldId3, fieldId4 ) {
        this.fieldDestination1 = fieldId1+this.one;
        this.fieldDestination2 = fieldId1+this.two;
        this.fieldDestination3 = fieldId2+this.one;
        this.fieldDestination4 = fieldId2+this.two;
        this.fieldDestination5 = fieldId3+this.one;
        this.fieldDestination6 = fieldId3+this.two;
        this.fieldDestination7 = fieldId4+this.one;
        this.fieldDestination8 = fieldId4+this.two;
    }


    this.init = function () {
        this.setOnChange();
    }
    
    this.updateDestinationValue = function (){
	$(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination2).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination3).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination4).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination5).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination6).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination7).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination8).val($(this.id123cf+this.fieldOrigin2).val());
    }

    this.setOnChange = function () {
        if(!this.validateData()) {
            //alert(this.errorMessage);
            return;
        }

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin1).change(function() {
            self.updateDestinationValue();
        });
	$(this.id123cf+this.fieldOrigin2).change(function() {
            self.updateDestinationValue();
        });
    }
}

$( document ).ready(function() {
    demo123CF_CopyFieldValue.setFieldOriginID('36040704');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198052', '36198259', '36198489', '36198607');
	
    demo123CF_CopyFieldValue.init();
});
