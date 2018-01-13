var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
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

    this.setFieldOriginID = function ( fieldId1,fieldId2 ) {
        this.fieldOrigin1 = fieldId1;
        this.fieldOrigin2 = fieldId2;
    }

    this.setFieldDestinationID = function ( fieldId1, fieldId2, fieldId3, fieldId4, fieldId5, fieldId6, fieldId7, fieldId8 ) {
        this.fieldDestination1 = fieldId1;
        this.fieldDestination2 = fieldId2;
        this.fieldDestination3 = fieldId3;
        this.fieldDestination4 = fieldId4;
        this.fieldDestination5 = fieldId5;
        this.fieldDestination6 = fieldId6;
        this.fieldDestination7 = fieldId7;
        this.fieldDestination8 = fieldId8;
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
    demo123CF_CopyFieldValue.setFieldOriginID('36040704-1', '36040704-2');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198052-1','36198052-2',
						   '36198259-1', '36198259-2',
						   '36198489-1', '36198489-2',
						   '36198607-1', '36198607-2',
						   '36181440-1', '36181440-2');
	
    demo123CF_CopyFieldValue.init();
});
