// script.js
$( document ).ready(function() {


	function validate() {
		if (this.elements["username"].value === "")
			{
				//alert("no name");
				$('#inputs').addClass('has-error');
				return false;
			}

		var res = validateEmail(this.elements["email"].value);

		if (!(res))
		{
			//alert("email invalid");
			$('#inputs').addClass('has-error');
			return false;
		}
	}

	function validateEmail (email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}



// $( document ).ready(function() {

//     // Add your JQuery Code here
//     // This will manipulate the DOM when the document loads

// 	});

var form = document.getElementById("contact");
form.onsubmit = validate;

});