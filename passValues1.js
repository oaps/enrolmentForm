var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.fieldOrigin1 = '';
    this.fieldDestination1 = '';
    this.fieldOrigin2 = '';
    this.fieldDestination2 = '';

    this.setFieldOriginID = function ( fieldId1, fieldId2 ) {
        this.fieldOrigin1 = fieldId1;
        this.fieldOrigin2 = fieldId1;
    }

    this.setFieldDestinationID = function ( fieldId1, fieldId2 ) {
        this.fieldDestination1 = fieldId1;
        this.fieldDestination2 = fieldId2;
    }


    this.init = function () {
        this.setOnChange();
    }

    this.validateData = function () {
        if(!$(this.id123cf+this.fieldOrigin1).length)
            this.errorMessage = 'Invalid origin field1';
	if(!$(this.id123cf+this.fieldOrigin2).length)
            this.errorMessage = 'Invalid origin field2';
        if(!$(this.id123cf+this.fieldDestination1).length)
            this.errorMessage = 'Invalid destination1 field';
        if(!$(this.id123cf+this.fieldDestination2).length)
            this.errorMessage = 'Invalid destination2 field';

        return this.errorMessage == '';
    }

    this.updateDestinationValue = function (){
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        $(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin2).val());
	$(this.id123cf+this.fieldDestination2).val($(this.id123cf+this.fieldOrigin2).val());
    }

    this.setOnChange = function () {
        if(!this.validateData()) {
            alert(this.errorMessage);
            return;
        }

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin1).change(function() {
            self.updateDestinationValue();
        });
    }
}

$( document ).ready(function() {
    demo123CF_CopyFieldValue.setFieldOriginID('36040704-1', '36040704-2');
    demo123CF_CopyFieldValue.setFieldDestinationID('36198052-2','36198052-2');
	
    demo123CF_CopyFieldValue.init();
});
