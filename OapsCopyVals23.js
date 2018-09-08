var oaps_CopyFieldValue = new function() {
    var self = this;
    
    this.init = function () {
        this.setOnChange();
    }
    
   this.setOnChange = function () {
 
    window.addEventListener('load', function(){

         var sourceControlId = 36040704,
            targetControlId = 44541819, 
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
