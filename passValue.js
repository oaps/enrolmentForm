var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.fieldOrigin = '';
    this.fieldDestination = '';

    this.setFieldOriginID = function ( fieldId ) {
        this.fieldOrigin = fieldId;
    }

    this.setFieldDestinationID = function ( fieldId ) {
        this.fieldDestination = fieldId;
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

        $(this.id123cf+this.fieldDestination).val($(this.id123cf+this.fieldOrigin).val());
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
    demo123CF_CopyFieldValue.setFieldOriginID('field-id-1');
    demo123CF_CopyFieldValue.setFieldDestinationID('field-id-2');
	
    demo123CF_CopyFieldValue.init();
});
