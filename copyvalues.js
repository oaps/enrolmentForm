(function(){
 
    window.addEventListener('load', function(){

        var sourceControlId = 36040704, /** THE ID OF THE SENDER CONTROL */
            targetControlId = 36073643, /** THE ID OF THE RECEIVER CONTROL **/
            sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
            targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });

        targetControlInstance.setValue( sourceControlInstance.getValue() );

    });

}
)
();
