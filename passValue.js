var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.fieldOrigin = '';
    this.fieldDestination = '';

    this.setFieldOriginID = function ( fieldId1, fieldId2 ) {
        this.fieldOrigin1 = fieldId1;
        this.fieldOrigin2 = fieldId2;
    }

    this.setFieldDestinationID = function ( fieldId1, fieldId2 ) {
        this.fieldDestination1 = fieldId1;
        this.fieldDestination2 = fieldId2;	
    }


    this.init = function () {
        this.setOnChange();
    }

    this.validateData = function () {
        if(!$(this.id123cf+this.fieldOrigin).length)
            this.errorMessage = 'Invalid origin field';
        if(!$(this.id123cf+this.fieldDestination).length)
            this.errorMessage = 'Invalid destination field';

        return this.errorMessage == '';
    }

    this.updateDestinationValue = function (){
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        $(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
        $(this.id123cf+this.fieldDestination2).val($(this.id123cf+this.fieldOrigin2).val());
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
