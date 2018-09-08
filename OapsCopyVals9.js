var oaps_CopyFieldValue = new function() {

    

    this.setOnChange = function(source, target){
 
	document.getElementById(source).value = document.getElementById(target).value;

   }
}

$( document ).ready(function() {
 
    oaps_CopyFieldValue.setOnChange();
});
