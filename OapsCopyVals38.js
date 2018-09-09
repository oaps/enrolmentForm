var demo123CF_CopyFieldValue = new function() {
    var self = this;
	this.inField = new Number();
	this.outField = new Number();


    this.init = function () {
        this.setOnChange();
    }
    

    this.setOnChange = function(){
 
    window.addEventListener('load', function(){
	
	    console.log('**START4**');
	    
	    this.inField = 36040704;
	    this.outField = 44541819;
	    console.log(this.inField);
	    console.log(this.outField);

	    var /** sourceControlId = this.inField,  THE ID OF THE SENDER CONTROL */
         /**    targetControlId = this.outField, THE ID OF THE RECEIVER CONTROL **/
            sourceControlInstance = loader.getEngine().getDocument().getElementById(this.inField),
            targetControlInstance = loader.getEngine().getDocument().getElementById(this.outField);

        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );

    });

  }
}

$( document ).ready(function() {

    demo123CF_CopyFieldValue.init();
	
});
