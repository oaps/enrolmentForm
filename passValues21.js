var demo123CF_CopyFieldValue = new function() {
    var self = this;

    this.errorMessage = '';

    this.id123cf = '#id123-control';
    this.fieldOrigin1 = '';
    this.fieldOrigin2 = '';
    this.fieldOrigin3 = '';
    this.fieldOrigin4 = '';
    this.fieldOrigin5 = '';
    this.fieldOrigin6 = '';
    this.fieldDestination1 = '';
    this.fieldDestination2 = '';
    this.fieldDestination3 = '';
    this.fieldDestination4 = '';
    this.fieldDestination5 = '';
    this.fieldDestination6 = '';
    this.fieldDestination7 = '';
    this.fieldDestination8 = '';
    this.fieldDestination9 = '';
    this.fieldDestination10 = '';
	
    this.fieldDestination11 = '';
    this.fieldDestination12 = '';
    this.fieldDestination13 = '';
    this.fieldDestination14 = '';
    this.fieldDestination15 = '';
    this.fieldDestination16 = '';
    this.fieldDestination17 = '';
    this.fieldDestination18 = '';
    this.fieldDestination19 = '';
    this.fieldDestination20 = '';
    this.fieldDestination21 = '';
    this.fieldDestination22 = '';
    this.fieldDestination23 = '';
    this.fieldDestination24 = '';
    this.fieldDestination25 = '';
    this.fieldDestination26 = '';
    this.fieldDestination27 = '';
    this.fieldDestination28 = '';
    this.fieldDestination29 = '';
    this.fieldDestination30 = '';
    this.fieldDestination31 = '';
    this.fieldDestination32 = '';
    this.fieldDestination33 = '';
    this.fieldDestination34 = '';
	

    this.setFieldOriginID1 = function ( fieldId1,fieldId2 ) {
        this.fieldOrigin1 = fieldId1;
        this.fieldOrigin2 = fieldId2;
    }
    
    this.setFieldOriginID2 = function ( fieldId3,fieldId4,fieldId5,fieldId6 ) {
        this.fieldOrigin3 = fieldId3;
        this.fieldOrigin4 = fieldId4;
        this.fieldOrigin5 = fieldId5;
        this.fieldOrigin6 = fieldId6;
	   
    }
    
    this.setFieldDestinationID1 = function ( fieldId1, fieldId2, fieldId3, fieldId4,
					      fieldId5, fieldId6, fieldId7, fieldId8,
					      fieldId9, fieldId10 ) {
        this.fieldDestination1 = fieldId1;
        this.fieldDestination2 = fieldId2;
        this.fieldDestination3 = fieldId3;
        this.fieldDestination4 = fieldId4;
        this.fieldDestination5 = fieldId5;
        this.fieldDestination6 = fieldId6;
        this.fieldDestination7 = fieldId7;
        this.fieldDestination8 = fieldId8;
        this.fieldDestination9 = fieldId9;
        this.fieldDestination10 = fieldId10;
    }

        this.setFieldDestinationID2 = function ( fieldId1, fieldId2, fieldId3, fieldId4,
						  fieldId5, fieldId6, fieldId7, fieldId8,
						  fieldId9,fieldId10, fieldId11, fieldId12,
						  fieldId13, fieldId14,fieldId15,fieldId16, 
						  fieldId17, fieldId18,fieldId19, fieldId20,
						  fieldId21,fieldId22, fieldId23, fieldId24) {
        this.fieldDestination11 = fieldId1;
        this.fieldDestination12 = fieldId2;
        this.fieldDestination13 = fieldId3;
        this.fieldDestination14 = fieldId4;
        this.fieldDestination15 = fieldId5;
        this.fieldDestination16 = fieldId6;
        this.fieldDestination17 = fieldId7;
        this.fieldDestination18 = fieldId8;
        this.fieldDestination19 = fieldId9;
        this.fieldDestination20 = fieldId10;
        this.fieldDestination21 = fieldId11;
        this.fieldDestination22 = fieldId12;
        this.fieldDestination23 = fieldId13;
        this.fieldDestination24 = fieldId14;
        this.fieldDestination25 = fieldId15;
        this.fieldDestination26 = fieldId16;
        this.fieldDestination27 = fieldId17;
        this.fieldDestination28 = fieldId18;
        this.fieldDestination29 = fieldId19;
        this.fieldDestination30 = fieldId20;
        this.fieldDestination31 = fieldId21;
        this.fieldDestination32 = fieldId22;
        this.fieldDestination33 = fieldId23;
        this.fieldDestination34 = fieldId24;
    }

    this.init = function () {
        this.setOnChange();
    }
    
    this.updateDestinationValue1 = function (){
	$(this.id123cf+this.fieldDestination1).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination2).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination3).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination4).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination5).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination6).val($(this.id123cf+this.fieldOrigin2).val());
        $(this.id123cf+this.fieldDestination7).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination8).val($(this.id123cf+this.fieldOrigin2).val());
	$(this.id123cf+this.fieldDestination9).val($(this.id123cf+this.fieldOrigin1).val());
	$(this.id123cf+this.fieldDestination10).val($(this.id123cf+this.fieldOrigin2).val());
    }

        this.updateDestinationValue2 = function (){
	$(this.id123cf+this.fieldDestination11).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination12).val($(this.id123cf+this.fieldOrigin4).val());
        $(this.id123cf+this.fieldDestination13).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination14).val($(this.id123cf+this.fieldOrigin6).val());
		
        $(this.id123cf+this.fieldDestination15).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination16).val($(this.id123cf+this.fieldOrigin4).val());
        $(this.id123cf+this.fieldDestination17).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination18).val($(this.id123cf+this.fieldOrigin6).val());
		
	$(this.id123cf+this.fieldDestination19).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination20).val($(this.id123cf+this.fieldOrigin4).val());
	$(this.id123cf+this.fieldDestination21).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination22).val($(this.id123cf+this.fieldOrigin6).val());

				
	$(this.id123cf+this.fieldDestination23).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination24).val($(this.id123cf+this.fieldOrigin4).val());
	$(this.id123cf+this.fieldDestination25).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination26).val($(this.id123cf+this.fieldOrigin6).val());

				
	$(this.id123cf+this.fieldDestination27).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination28).val($(this.id123cf+this.fieldOrigin4).val());
	$(this.id123cf+this.fieldDestination29).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination30).val($(this.id123cf+this.fieldOrigin6).val());
		
				
	$(this.id123cf+this.fieldDestination31).val($(this.id123cf+this.fieldOrigin3).val());
	$(this.id123cf+this.fieldDestination32).val($(this.id123cf+this.fieldOrigin4).val());
	$(this.id123cf+this.fieldDestination33).val($(this.id123cf+this.fieldOrigin5).val());
	$(this.id123cf+this.fieldDestination34).val($(this.id123cf+this.fieldOrigin6).val());
		
	}
    this.setOnChange = function () {

        //change event from start date to be copied to end date
        $(this.id123cf+this.fieldOrigin1).change(function() {
            self.updateDestinationValue1();
        });
	$(this.id123cf+this.fieldOrigin2).change(function() {
            self.updateDestinationValue1();
        });
	    
	$(this.id123cf+this.fieldOrigin3).change(function() {
            self.updateDestinationValue2();
        });
	$(this.id123cf+this.fieldOrigin4).change(function() {
            self.updateDestinationValue2();
        }); 
	    
	$(this.id123cf+this.fieldOrigin5).change(function() {
            self.updateDestinationValue2();
        });
	$(this.id123cf+this.fieldOrigin6).change(function() {
            self.updateDestinationValue2();
        });
    }
}

$( document ).ready(function() {
    demo123CF_CopyFieldValue.setFieldOriginID1('36040704-1', '36040704-2');
    demo123CF_CopyFieldValue.setFieldOriginID2('36935922-3', '36935922-1', '36935922-2','36936048');
    demo123CF_CopyFieldValue.setFieldDestinationID1('36198052-1','36198052-2',
						   '36198259-1', '36198259-2',
						   '36198489-1', '36198489-2',
						   '36198607-1', '36198607-2',
						   '36181440-1', '36181440-2');

    demo123CF_CopyFieldValue.setFieldDestinationID2('36181455-3','36181455-1', '36181455-2', '36181458'
						   '36936282-3', '36936282-1', '36936282-2', '36936258',
						   '36936025-3', '36936025-1', '36936025-2', '36936060',
						   '36936103-3', '36936103-1', '36936103-2', '36936123',
						   '36936159-3', '36936159-1', '36936159-3', '36936154',
						   '36198606-3', '36198606-1', '36198606-3', '36936517');

    demo123CF_CopyFieldValue.init();
});
