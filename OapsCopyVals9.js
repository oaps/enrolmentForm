var oaps_CopyFieldValue = new function() {
    var self = this;

    
    this.init = function () {
        this.setOnChange('36040704', '44541819');
    }
    

    this.setOnChange = function( source, dest){
 
     window.addEventListener('load', function(){

        var sourceControlId = source,
            targetControlId = dest,
            sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
            targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });

        targetControlInstance.setValue( sourceControlInstance.getValue() );

     });

   }
}

$( document ).ready(function() {

    oaps_CopyFieldValue.init();
});
