var Oaps_CopyFieldValue = new function() {
    var self = this;
	
    this.init = function (){
	    console.log("Starting Alergy fill");
        this.setAllergyChildName();
	this.setAllergySignorName();
	this.setAllergyRelationship();
	    console.log("Stopped Filling Alergy fill");
	
	    
	    console.log("Starting Signature fill");
	this.setSignatureSignorName();
	this.setSignatureRelationship();
	    console.log("Stopping Signature fill");

	    
	    console.log("Starting Field Trip fill");
	this.setFieldTripChildName();
	this.setFieldTripSignorName();
	this.setFieldTripRelationship();
	    console.log("Stopping Field Trip fill");
	
	    console.log("Starting Photo fill");	    
	this.setPhotographChildName();
	this.setPhotographSignorName();
	this.setPhotographRelationship();
	    	    console.log("Stopping Photo fill");	    

	    console.log("Starting Sunscreen fill");	    	    
	this.setSunScreenChildName();
	this.setSunScreenSignorName();
	this.setSunScreenRelationship();
	    console.log("Stopping Sunscreen fill");	    	    
	

	    	    console.log("Starting Agreement fill");	    	    
	
	    
	    console.log("Stopping Agreement fill");	    	    

    }

	
	
    this.setAllergyChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36181440);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    console.log("HERE 1");
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
	    	    console.log("HERE 2");
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
	    	    console.log("HERE 3");
    }

		
    this.setSignatureSignorName = function(){
      window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36935922),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36936282);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    	    	    console.log("HERE 4");
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
	    	    	    console.log("HERE 5");
    }
	

	
    this.setFieldTripChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198052);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    	    	    	    console.log("HERE 6");
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
	    	    	    	    console.log("HERE 7");
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
	    	    	    	    console.log("HERE 8");
    }
	
	
    this.setPhotographChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198259);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    	    	    	    console.log("HERE 9");
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
	    	    	    	    console.log("HERE 10");
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
	    	    	    	    console.log("HERE 11");
    }
	
	
    this.setSunScreenChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198489);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    	    	    	    console.log("HERE 12");
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
	    	    	    	    console.log("HERE 13");
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
	    	    	    	    console.log("HERE 14");
    }
	
	
		 
    this.setAgreementChildName = function(){
     window.addEventListener('load', function(){
        var sourceControlInstance = loader.getEngine().getDocument().getElementById(36040704),
            targetControlInstance = loader.getEngine().getDocument().getElementById(36198607);
        sourceControlInstance.on('value-change', function(){
            targetControlInstance.setValue( sourceControlInstance.getValue() );
        });
        targetControlInstance.setValue( sourceControlInstance.getValue() );
    	});
	    	    	    	    console.log("HERE 15");
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
	    	    	    	    console.log("HERE 16");
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
	    	    	    	    console.log("HERE 17");
    }	

	
	
}

$( document ).ready(function() {
	Oaps_CopyFieldValue.init();
});
