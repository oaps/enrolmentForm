
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(49376819),
            targetControlInstance = loader.getEngine().getDocument().getElementById(49470198);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
