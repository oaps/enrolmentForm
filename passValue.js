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
	
    this.setFieldOriginID = function ( fieldId1, fieldId2 ) {
        this.fieldOrigin1 = fieldId1;
        this.fieldOrigin2 = fieldId2;
    }

    this.setFieldDestinationID = function ( fieldId1, fieldId2, fieldId3, fieldId4, fieldId5 ) {
        this.fieldDestination1 = fieldId1;
        this.fieldDestination2 = fieldId2;
        this.fieldDestination2 = fieldId3;
        this.fieldDestination2 = fieldId4;
        this.fieldDestination2 = fieldId5;	
    }


    this.init = function () {
        this.setOnChange();
    }

    this.validateData = function () {
        if(!$(this.id123cf+this.fieldOrigin1).length)
            this.errorMessage = 'Invalid origin field';
        if(!$(this.id123cf+this.fieldOrigin2).length)
            this.errorMessage = 'Invalid origin field';
        if(!$(this.id123cf+this.fieldDestination1).length)
            this.errorMessage = 'Invalid destination field1';
        if(!$(this.id123cf+this.fieldDestination2).length)
            this.errorMessage = 'Invalid destination field2';
        if(!$(this.id123cf+this.fieldDestination3).length)
            this.errorMessage = 'Invalid destination field3';
        if(!$(this.id123cf+this.fieldDestination4).length)
            this.errorMessage = 'Invalid destination field4';
        if(!$(this.id123cf+this.fieldDestination5).length)
            this.errorMessage = 'Invalid destination field5';

        return this.errorMessage == '';
    }

    this.updateDestinationValue = function (){
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        $(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
        $(this.id123cf+this.fieldDestination2).val($(this.id123cf+this.fieldOrigin2).val());
	$(this.id123cf+this.fieldDestination3).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination4).val($(this.id123cf+this.fieldOrigin4).val());
	$(this.id123cf+this.fieldDestination5).val($(this.id123cf+this.fieldOrigin5).val());
    }

    this.setOnChange = function () {
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin).change(function() {
            self.updateDestinationValue();
        });

    }
}

$( document ).ready(function() {
    demo123CF_CopyFieldValue.setFieldOriginID('36040704-1', '36040704-2') ;
    demo123CF_CopyFieldValue.setFieldDestinationID('36181440-1', '36181440-2');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198052-1', '36198052-2');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198259-1', '36198259-2');	
    demo123CF_CopyFieldValue.setFieldDestinationID('36198489-1', '36198489-2');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198607-1', '36198607-2');
	
	
    demo123CF_CopyFieldValue.init();
});
