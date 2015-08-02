//console.log("Starting...");

$(document).ready(function() {
	// $.getJSON("assess1.json",
	// 	function (data) {
	// 		$.each(data.philosophers, function(i,item) {
	// 			var id = item.id;
	// 			var name = item.name;
	// 			var img = item.img;
	// 			$("#myList").append('<li><a href="#' + id + '" data-transition="slideup">' +
	// 				'<img src="img/' + img + '" alt="" class="ui-li-icon">' +
	// 				name + 
	// 				'</a></li>'
	// 				);
	// 			insertPage(item); // Insert a page for each list item
	// 		});
		$("#myList").listview('refresh');	
	});

	$("#search-basic").change(function(){
		alert($("#search-basic").val());
		var tag = $("#search-basic").val();
		getFlickr(tag);
	});
	alert("xxxx");
});

function getFlickr(searchTerm) {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: searchTerm,
      tagmode: "any",
      format: "json"
    })
    .done(function(data) {
      $.each(data.items, function(i, item) {
        $("<img>").attr("src", item.media.m).appendTo("#images");
        if (i === 3) {
          return false;
        }
      });
    });
  };



function insertPage(data) {
	var id = data.id;
	var name = data.name;
	var place = data.place;
	var born = data.born;
	var died = data.died;
	var bio = data.bio;
	var img = data.img;
	
	$("#myPages").append(
		'<div data-role="page" id="' + id + '">' + 
		'<h2>' + name + '</h2>' +
		'<img src="img/' + img + '">' +
		'<p>' + bio + '</p>' +
		'<p>Born ' + born + ' in ' + place + '</p>' +
		'<p>Died ' + died + '</p>' +
		'<a href="#home" class="ui-btn ui-corner-all ui-icon-home ui-btn-icon-right" data-transition="slidedown">Home</a>'
		);
}
