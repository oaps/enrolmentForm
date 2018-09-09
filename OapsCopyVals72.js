var Oaps_CopyFieldValue = new function() {
    var self = this;
	
    this.init = function (){
	    console.log("Starting Alergy fill");
        this.setAllergyChildName();
	this.setAllergySignorName();
	this.setAllergyRelationship();
	    
	    	    console.log("Starting Signature fill");
	    
	this.setSignatureSignorName();
	this.setSignatureRelationship();
	
	    	    console.log("Starting Field Trip fill");
	    
	this.setFieldTripChildName();
	this.setFieldTripSignorName();
	this.setFieldTripRelationship();
	
	    console.log("Starting Photo fill");
	    
	this.setPhotographChildName();
	this.setPhotographSignorName();
	this.setPhotographRelationship();
	    
	    console.log("Starting Sun screen fill");
	    
	this.setSunScreenChildName();
	this.setSunScreenSignorName();
	this.setSunScreenRelationship();

	    	    console.log("Starting Agreement fill");
	    
	this.setAgreementChildName();
	this.setAgreementSignorName();
	this.setAgreementRelationship();
    }

	
	
/** ALLERGY **/	 
    this.setAllergyChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181440);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }
	
    this.setAllergySignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181455);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setAllergyRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181458);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }


/** SIGNATURES **/	
    this.setSignatureSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936282);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setSignatureRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936258);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }
	
	
/** FIELD TRIP **/	 
    this.setFieldTripChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198052);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setFieldTripSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936025);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setFieldTripRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936060);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }
	
/** PHOTOGRAPH **/	 
    this.setPhotographChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198259);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setPhotographSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936103);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setPhotographRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936123);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }
	
/** SUN SCREEN **/	 
    this.setSunScreenChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198489);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setSunScreenSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936159);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setSunScreenRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936154);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }
	
	
	
/** AGREEMENT **/	 
    this.setAgreementChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198607);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setAgreementSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198606);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
     }

    this.setAgreementRelationship = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36936048),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936517);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
    }	
	
	
}

$( document ).ready(function() {
	Oaps_CopyFieldValue.init();
});
