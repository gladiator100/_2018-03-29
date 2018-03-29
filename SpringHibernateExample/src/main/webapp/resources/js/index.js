 
	  var placeSearch, autocomplete;
      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        country: 'long_name',
        postal_code: 'short_name'
      };

function initAutocomplete() {
        
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});
			// autocomplete = new google.maps.places.Autocomplete(
        //  /** @type {!HTMLInputElement} */(document.getElementById('autocomplete1')),
          //  {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress);
      }

function fillInAddress() {
        
        var place = autocomplete.getPlace();

        for (var component in componentForm) {
          document.getElementById(component).value = '';
          document.getElementById(component).disabled = false;
        }

        
        for (var i = 0; i < place.address_components.length; i++) {
          var addressType = place.address_components[i].types[0];
          if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
          }
        }
      }

      
function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }
	  
	 
	/*function mydate() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    
 var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

var d = new Date();
    var n= month[d.getMonth()];
     var m = d.getDate();
    var l= weekday[d.getDay()];
   
    document.getElementById("demo").innerHTML = l+" "+m+" "+n;
}*/




function clearfields() {
	
            $("#check0").removeAttr('checked');
			$("#check1").removeAttr('checked');
			$("#check2").removeAttr('checked');
			$("#radio0").removeAttr('checked');
			$("#radio1").removeAttr('checked');
			$("#radio2").removeAttr('checked');
            $("#textarea1").val("");
            $("#qty").val("1");
			$("#qty2").val("1");
			$("#display4").val("");
			
        }
		
function calculate(){
    theTotal = 0;
  
    $("#cartTable #tid td:nth-child(3)").each(function () {
        var val1 = $(this).text().replace("$", "");
		//var price = $("#display2").text().replace("$", "");
		var val2 = JSON.parse(val1);
        theTotal += (val2);
    });
    $("#subtotal").html("$"+ theTotal);
}

function backrest(){
	
	  var time;
      time = document.getElementById('time').value;
	  var date;
      date = document.getElementById('date').value;

	   $('#restaurants').css("display", "block");
	  
				$("#table_menus").css("display", "none");
				$("#backto_rest").css("display", "none");
	  $('#select_rest').val('');
	  $('#table_menus').val('');
	  var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
	var zipcode = $("#postal_code").val();
	  $.ajax({
       url: "http://localhost:8080/delivery/rests/restaurants",
       type: "GET",
       data: {"zipcode": zipcode,"time":time,"date":date,"city":city,"state":state},
       success: function(data) {
	$("#choose_restaurant").css("display", "block");
	 $('#select_rest').show();
      
					var html = '';		
						
						$.each(data, function(key, value) { 
							
			html += '<tr id="tryme_rest" style="width:350px" class="btn" valueid="'+value['id']+
			'" style="white-space:pre-line;text-align:left;border: 1px solid #dadada;">'+
			'<td rowspan=2><label><img style="width:70px;height:70px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
			'<td value=' + value['rest_code']+'>'+ '<h4><label style="margin-bottom:0px;">' + value['name'] +
			'</label></h4><label style="font-weight:lighter;">' + value['city']  + 
			'</label></td></tr><br/>';
				});
							//$("#select_rest").css("display", "block");
							$('#select_rest').last().empty().append(html);
						//	$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
}

function showrest(){
	  var time;
      time = document.getElementById('time').value;
	  var date;
      date = document.getElementById('date').value;


	  if((time=='1:30 noon') ||( date=='Saturday'))
	  {
	   $('#restaurants').css("display", "block");
	  $('#choose_rest').css("display", "block");
				$("#table_menus").css("display", "none");
				$("#backto_rest").css("display", "none");
	  $('#select_rest').val('');
	  $('#table_menus').val('');
	  var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
	
	  $.ajax({
       url: "http://localhost:8080/delivery/rests/restaurants",
       type: "GET",
       data: {"zipcode": zipcode, "orderType":data1,"time":time,"date":date,"city":city,"state":state},
       success: function(data) {
	$("#choose_restaurant").css("display", "block");
	 $('#select_rest').show();
      
					var html = '';		
						
						$.each(data, function(key, value) { 
							
			html += '<tr id="tryme_rest" style="width:350px" class="btn" valueid="'+value['id']+
			'" style="white-space:pre-line;text-align:left;border: 1px solid #dadada;">'+
			'<td rowspan=2><label><img style="width:70px;height:70px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
			'<td value=' + value['rest_code']+'>'+ '<h4><label style="margin-bottom:0px;">' + value['name'] +
			'</label></h4><label style="font-weight:lighter;">' + value['city']  + 
			'</label></td></tr><br/>';
				});
							//$("#select_rest").css("display", "block");
							$('#select_rest').last().empty().append(html);
						//	$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
    }
	else{
	
var select_rest = $(this).text();
				var ID =$(this).closest('tr').attr('valueid');
		
	$('#select_rest').css("display", "none");
				$("#table_menus").css("display", "block");
		$.ajax({
      		url: "http://localhost:8080/delivery/rests/menus",
      		type: "GET",
      	    data: { "id" : ID},
      		success: function(data){
            	// var d = JSON.parse(data);
				//alert(data);
				//console.log(data);
            	var array =  data;
        		//$('#table_menus tr').not(':first').not(':last').remove();
				
				$("#choose_rest").css("display", "none");
				$("#backto_rest").css("display", "block");
				 
				$("#backto_rest").html('&nbsp;&nbsp;<i class="left"></i><b>'+select_rest+'</b>');
				
				//$("#backto_rest").html('<a href="http://localhost:8080/delivery/rests/restaurants?zipcode=19425&orderType=CORP">&nbsp;&nbsp;<i class="left"></i><b >'+select_rest+'</b></a>');
						var html = '';		
						$.each(data, function(key, value) { 
							
							html += '<tr class="btn" onclick="enter_address()" data-toggle="modal" id="dataTable1" valueid="'+value['id']+
							'" style="white-space:pre-line;text-align:left;border: 1px solid #dadada;margin-bottom:5px;">'+
							'<td><label><img style="width:100px;height:70px;" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
							'&nbsp();&nbsp();<td style="padding-left: 20px;" id="tryme" value=' + value['id']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
							'<label></td>&nbsp();&nbsp();<td style="padding-left: 10px;padding-right:10px; padding-bottom:40px;"><h4>'+
							'<label>$' + value['price']+ '</label></h4></td></tr><br/>';
							});
							
								
				$('#table_menus').last().empty().append(html);
				$('#restaurants').hide();
            	//$('#menus').show();
            		// code here
      		},
      		/*error: function(passParams){
           			alert("inside error " + passParams);
      		}*/
			//clearfields();
		});
	}
}
function set_date(){
		showrest();
    }

	function set_time(){
		showrest();
    }
	
	function enter_address(){
		street_number=$("#street_number").val();
		locality=$("#locality").val();
		administrative_area_level_1=$("#administrative_area_level_1").val();
		country=$("#country").val();
	if(street_number==0)
		{
			alert("Please enter complete address");
		}
		else{
			if(("#locality")==0)
			{
				alert("Please enter complete address");
			}
			if(("#administrative_area_level_1")==0)
			{
				alert("Please enter complete address");
			}
			if(("#postal_code")==0)
			{
				alert("Please enter complete address");
			}
			if(("#country")==0)
			{
				alert("Please enter complete address");
			}
			else
			{
			$('#myModal1').modal('show');
			}
		}
	}
function dynamic_chkbox()
{
	$.ajax({
      		url: 'http://localhost:8080/delivery/rests/sections',
      		type: "GET",
      	    data: { "id" : 1},
      		success: function(data){
            	
        			var html = '';
						var j=0;
						$.each(data, function(key, value) { 
						if(value['type']=="C")
						{
							var j=0;
						    html = "<br/><label id='labelc"+j+"'>"+ value['name'] +'</label>';
							 $('#section_chk').append(html);
							  var array =  value['items'];
							for(i=0;i<array.length;i++)
								{ 
									var tblRow2 = "<td><input type='checkbox' id='check"+i+"' value='"+array[i]['value']+"'" + array[i]['name'] + "/>&nbsp;&nbsp;" + array[i]['name']+"&nbsp;&nbsp;&nbsp;&nbsp;</td>"
									  $(tblRow2).appendTo("#section_chk");  
								}
								j++;
						}
						if(value['type']=="R")
						{
							var j=0;
						    html = "<br/><label id='labelr"+j+"'>"+ value['name'] +'</label>';
							 $('#section_chk').append(html);
							  var array =  value['items'];
							for(i=0;i<array.length;i++)
								{ 
									var tblRow2 = "<td><input type='radio' name='radbutton' id='radio"+i+"' value='"+array[i]['value']+"'" + array[i]['name'] + "/>&nbsp;&nbsp;" + array[i]['name']+"&nbsp;&nbsp;&nbsp;&nbsp;</td>"
									  $(tblRow2).appendTo("#section_chk");  
								}
								j++;
						}
				});
					
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
		});
}	
	/*var username = $("#input_zipcode").val();

 $.ajax({
       url: "http://localhost:8080/delivery/rests/all",
       type: "GET",
       data: { username: username },
       success: function() {
           alert('Successfully connected to the server');
		   setdate();
		   if(date=='Saturday')
		   {
			   alert("invalid");
		   }
       }, 
       error: function() {
           alert('Something went wrong');
       }
   });*/
   
$(document).ready(function() {
	
	dynamic_chkbox();
	
$("#home").html('<a href="http://localhost:8080/delivery/rests/all" style="text-decoration:none; color:black"><b>Home</b></a>');

$('#home').on('click', function(e) {
					
					if(theTotal==0)
					{
					$('#home').prop('disabled', false);
					}
	
					else
					{
			var r = confirm("Your cart will be dismissed. Are you sure you want to go to the home page?");
			if (r == true) 
			{
			 $('#home').prop('disabled', false);
			} 
			else 
			{
			e.preventDefault();
			}
					}					
	});

	$('#find_btn').on('click', function(e) {
		
		var addressbar = $("#autocomplete").val();
		if(addressbar==0)
		{
			alert("Please enter your address");
		}
		else
		{
			
		var zipcode = $("#postal_code").val();
		var city = $("#locality").val();
		var state = $("#administrative_area_level_1").val();
		var username= $("#input_zipcode").val();
    user_address=$("#autocomplete").val();
  $("#autocomplete1").val(user_address);
       
   $.ajax({
       url: "http://localhost:8080/delivery/rests/ordertypes",
       type: "GET",
       data: {"city":city,"state":state,"zipcode": zipcode},
       success: function(data) {

			document.getElementById("corporate_lunch").disabled = false;
			document.getElementById("restaurant_delivery").disabled = false;
			data1=data;
		 // alert(data1);
		  
       }, 
       error: function() {
           alert('Something went wrong');
       }
   });
   

   
	//}
	}
	});
	
	$('#corporate_lunch').on('click', function(e) {
//$("#div_address").css("display", "none");
		$("#corporate_lunch").css("display", "none");
			$("#restaurant_delivery").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time").css("display", "block");
			$("#when").css("display", "block");
	 zipcode=$("#postal_code").val();
   var username= $("#input_zipcode").val();
   state=$("#administrative_area_level_1").val();
   city=$("#locality").val();
   
    $('#table_menus').val('');
	
   $.ajax({
       url: "http://localhost:8080/delivery/rests/restaurants",
       type: "GET",
       data: {"zipcode": zipcode, "orderType":data1,"state":state,"city":city},
       success: function(data) {
	$("#choose_restaurant").css("display", "block");
      
					var html = '';		
						
						$.each(data, function(key, value) { 
							
			html += '<tr id="tryme_rest" class="btn" valueid="'+value['id']+
			'" style="float:left;width:360px;white-space:pre-line;text-align:left;border: 1px solid #dadada;margin-left:15px;">'+
							'<td><label><img style="width:70px;height:70px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
							'<td rest_code=' + value['rest_code']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value['name'] +
							  
							'</label></td></tr><br/>';
							});
							$('#select_rest').last().empty().append(html);
							$("#show_empty_cart").css("display", "block");
		}, 
       error: function() {
           alert('Something went wrong');
       }
   });
	});
	
	$('#restaurant_delivery').on('click', function(e) {
			
			$("#corporate_lunch").css("display", "none");
			$("#restaurant_delivery").css("display", "none");
			$("#div_carousel").css("display", "none");
			$("#date_time").css("display", "block");
		 zipcode=$("#postal_code").val();
   var username= $("#input_zipcode").val();
   
   $.ajax({
       url: "http://localhost:8080/delivery/rests/restaurants",
       type: "GET",
       data: {"zipcode": zipcode, "orderType":data1,"state":state,"city":city},
       success: function(data) {
	$("#choose_restaurant").css("display", "block");
	
					var html = '';		
						
						$.each(data, function(key, value) { 
							
							html += '<tr style="float:left;width:50%" class="btn" valueid="'+value['id']+'" style="white-space:pre-line;text-align:left;border: 1px solid #dadada;">'+
							'<td><label><img style="width:70px;height:70px;" src= "/delivery/resources/images/'+value['image']+'"/></label></td>'+
							'<td id="tryme_rest" rest_code=' + value['rest_code']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value['name'] +
							'</label></h4><label style="font-weight:lighter;">' + value['city']  + 
							'</label></td></tr><br/>';
							});
							$('#select_rest').last().append(html);
								$("#show_empty_cart").css("display", "block");
       }, 
       error: function() {
           alert('Something went wrong');
       }
   });
	});
		
	
	sum=0;
	
/*$("input#address").suggest();

	$('#menus').hide();*/
		
	$('#select_rest').on('click', '#tryme_rest',function(e) {
	
		
				var select_rest = $(this).text();
				var ID =$(this).closest('tr').attr('valueid');
		
				$('#select_rest').css("display", "none");
				$("#table_menus").css("display", "block");
		$.ajax({
      		url: "http://localhost:8080/delivery/rests/menus",
      		type: "GET",
      	    data: { "id" : ID},
      		success: function(data){
            	// var d = JSON.parse(data);
				//alert(data);
				//console.log(data);
            	var array =  data;
        		//$('#table_menus tr').not(':first').not(':last').remove();
				
				$("#choose_rest").css("display", "none");
				$("#backto_rest").css("display", "block");
				 
				$("#backto_rest").html('&nbsp;&nbsp;<i class="left"></i>&nbsp;<b>'+select_rest+'</b>');
				
				//$("#backto_rest").html('<a href="http://localhost:8080/delivery/rests/restaurants?zipcode=19425&orderType=CORP">&nbsp;&nbsp;<i class="left"></i><b >'+select_rest+'</b></a>');
						var html = '';		
						$.each(data, function(key, value) { 
							
							html += '<tr class="btn" onclick="enter_address()" data-toggle="modal" id="dataTable1" valueid="'+value['id']+
							'" style="white-space:pre-line;text-align:left;border:1px solid #dadada;">'+
							'<td><label><img style="width:100px;height:90px;" src= "/delivery/resources/images/'+value['menuImage']+'"/></label></td>'+
							'&nbsp();&nbsp();<td style="padding-left: 20px;" id="tryme" value=' + value['id']+'>'+ 
							'<h4><label style="margin-bottom:0px;">' + value['name'] + '</label></h4><label style="font-weight:lighter;">' + value['description']  + 
							'<label></td>&nbsp();&nbsp();<td style="padding-left: 10px;padding-right:10px; padding-bottom:40px;"><h4>'+
							'<label>$' + value['price']+ '</label></h4></td></tr><br/>';
							});
							
								
				$('#table_menus').last().empty().append(html);
				$('#restaurants').hide();
            	//$('#menus').show();
            		// code here
      		},
      		error: function(passParams){
           			alert("inside error " + passParams);
      		}
			//clearfields();
		});
		
	
		
	
	
/*	$("input#address").suggest({
  label : "Formatted address", 
  street_number_input : {
    id : "number",
    label : "Street number"
  },
  street_name_input : {
    id : "street",
    label : "Street"
  },
  zip_input : {
    id : "zip",
    label : "Zip code"
  },
  town_input : {
    id : "town",
    label : "Town"
  },
  department_input : {
    id : "department",
    label : "Department"
  },

    region_input : {
    id : "region",
    label : "Region"
  },

  country_input : {
    id : "country",
    label : "Country"
  }
});
*/
	
	 
	  //  e.preventDefault();
	
	

		
		theTotal= $("#subtotal").text();
		
if(theTotal==0)
{
	$("#show_empty_cart").css("display", "block");
	$("#showcart").css("display", "none");
}
    
	});
	
	$('#backto_rest').on('click', function(e) {
		backrest();
	});
   
	
	$("#table_menus").on('click', '#dataTable1', function () {
			
				$("#addcart").css("display", "block");
				$("#updatecart").css("display", "none");
				
             
				var image=$(this).find('label:eq(0)').html();
				var dishname=$(this).find('label:eq(1)').text();
				var description=$(this).find('label:eq(2)').text();
				var dishprice=$(this).find('label:eq(4)').text();

				var img=$(image).attr('src');
				
				
				$("#display1").text(dishname);
                $("#display2").text(dishprice);
			    $("#display3").text(description);
				$("#display4").empty().append('<img style="height:200px;width:300px" src='+img+'/>');
				var price = $("#display2").text().replace("$", "");
				
			    $("#qtycart").text("Add to cart-$" + price);
		
		
		});		
	
	$("#qtyplus").click(function (e) {
    
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal)) {
                $('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                $('input[name=' + fieldName + ']').val(0);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#display2").text().replace("$", "");
            cost = (quantity * price);
            $("#qtycart").text("Add to cart - $" + cost);

        });
	
	$("#qtyminus").click(function (e) {
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal) && currentVal > 0) {
                $('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $('input[name=' + fieldName + ']').val(0);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#display2").text().replace("$", "");
            cost = (quantity * price);
            $("#qtycart").text("Add to cart - $" + cost);
        });
	
		var arr = new Array();
        var count = 1;
        
	 $("#qtycart").click(function () {
		  
            var data1 = ($("#display1").text());
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#display2").text().replace("$", "");
            cost = (quantity * price);
			var description= $("#display3").text();
			var image=$("#display4").html();
			var instructions=$("#textarea1").val();
			
			var check0=$("#check0").is(":checked");
			if(check0==true)
			{  
		  check0= $('#check0:checked').val();
			}
			else{
			check0="";
			}
			var check1=$("#check1").is(":checked");
			if(check1==true)
			{ 
		 check1=$('#check1:checked').val();
			}
			else{
			check1="";
			}
			var check2=$("#check2").is(":checked");
			if(check2==true)
			{  
		  check2= $('#check2:checked').val();
			}
			else{
			check2="";
			}
			
			var radio0=$("#radio0").is(":checked");
			if(radio0==true)
			{ 
		 radio0=$('#radio0:checked').val();
			}
			else{
			radio0="";
			}
			var radio1=$("#radio1").is(":checked");
			if(radio1==true)
			{ 
		 radio1=$('#radio1:checked').val();
			}
			else{
			radio1="";
			}
			
			var radio2=$("#radio2").is(":checked");
			if(radio2==true)
			{ 
		 radio2=$('#radio2:checked').val();
			}
			else{
			radio2="";
			}
			
			
            $("#showcart").css("display", "block");
            $("#show_empty_cart").css("display", "none");
			
             
			/*	 $('#cartTable tbody').append("<tr class='btn' id='changerow' "+count+">" + "<td id='change'>" + quantity + "</td>" +
                 "<td style='background-color:#ffffff' id='change'>&nbsp;&nbsp;" + data1 + "</td>" +
                 "<td id='change'>" + cost + "</td><td>" +
				 
				 "<td class='btn delete-item($index)', id='cancel'>"+
	"<div class='icon-trash' style='float:right'>"+
    "<div class='trash-lid' style='background-color: #C5BFB6'></div>"+
    " <div class='trash-container' style='background-color: #C5BFB6'></div>"+
    "<div class='trash-line-1'></div>"+
    "<div class='trash-line-2'></div>"+
    "<div class='trash-line-3'></div></div></td>"+
				// "<button class='btn delete-item($index)', id='cancel'> X </button>" + "</td>" +
				 "<td style='display: none' id='change'>" + price + "</td>" +
				 "<td style='display: none' id='change'>" + description + "</td>" +
				 "<td style='display: none' id='change'>" + image + "</td>" +
				 "<td style='display: none' id='change'>" + instructions + "</td>" +
				 "<td style='display: none' id='change'>" + check0 + "</td>" +
				 "<td style='display: none' id='change'>" + check1 + "</td>" +
				 "<td style='display: none' id='change'>" + check2 + "</td>" +
				 "<td style='display: none' id='change'>" + radio0 + "</td>" +
				 "<td style='display: none' id='change'>" + radio1 + "</td>" +
				 "<td style='display: none' id='change'>" + radio2 + "</td>" +"</tr>");	*/			
				 
				 
			   $('#cartTable tbody').append("<tr id=changerow"+count+">" + "<td><button class='change btn', id='change'>" + quantity + "</button></td>" +
                 "<td><button class='change btn',style='background-color:#ffffff' id='change'>" + data1 + "</button></td>" +
                 "<td><button class='change btn', id='change'>$" + cost + "</button></td>" +
				 
				 "<td><button class='btn delete-item($index)', id='cancel'>"+
	"<div class='icon-trash' style='float:right'>"+
    "<div class='trash-lid' style='background-color: #C5BFB6'></div>"+
    " <div class='trash-container' style='background-color: #C5BFB6'></div>"+
    "<div class='trash-line-1'></div>"+
    "<div class='trash-line-2'></div>"+
    "<div class='trash-line-3'></div></div></button></td>"+
				// "<button class='btn delete-item($index)', id='cancel'> X </button>" + "</td>" +
				 "<td style='display: none' id='change'>" + price + "</td>" +
				 "<td style='display: none' id='change'>" + description + "</td>" +
				 "<td style='display: none' id='change'>" + image + "</td>" +
				 "<td style='display: none' id='change'>" + instructions + "</td>" +
				 "<td style='display: none' id='change'>" + check0 + "</td>" +
				 "<td style='display: none' id='change'>" + check1 + "</td>" +
				 "<td style='display: none' id='change'>" + check2 + "</td>" +
				 "<td style='display: none' id='change'>" + radio0 + "</td>" +
				 "<td style='display: none' id='change'>" + radio1 + "</td>" +
				 "<td style='display: none' id='change'>" + radio2 + "</td>" +"</tr>");
				 
          calculate();
	
if(theTotal==0)
	{   
		$("#showcart").css("display", "none");
		$("#show_empty_cart").css("display", "block");
	}
           
			
            clearfields();
			 count++;
        });
		amt="";
		ID="";
		// $('#showcart #cartTable tbody #changefullrow').on('click', '#changerow', function () {
			 $('#showcart').on('click', '#change', function () {
             clearfields();
			 
                $("#myModal1").modal('show');
				
				$("#addcart").css("display", "none");
				$("#updatecart").css("display", "block");
		var par = $(this).parent().parent();
				//var par = $(this).parent();
				ID =$(this).closest('tr').attr('id');
		
				var quantity = par.children("td:nth-child(1)");
                var ditem = par.children("td:nth-child(2)");
                var dcost = par.children("td:nth-child(3)");
				var price = par.children("td:nth-child(5)");
                var description = par.children("td:nth-child(6)");
                var image = par.children("td:nth-child(7)");
				var instructions = par.children("td:nth-child(8)");
				var check0 = par.children("td:nth-child(9)");
                var check1 = par.children("td:nth-child(10)");
                var check2 = par.children("td:nth-child(11)");
				var radio0 = par.children("td:nth-child(12)");
				var radio1 = par.children("td:nth-child(13)");
				var radio2 = par.children("td:nth-child(14)");

				
				 var item_name = $(ditem).text();
                 var item_qty = $(quantity).text();
                var amt = $(dcost).text();
				 var price = $(price).text();
               //var amount=(price*item_qty);
			    var description = $(description).text();
                var image = $(image).html();
				var instructions = $(instructions).text();
				
                var chk0 =$(check0).html();
				var chk1 =$(check1).html();
				var chk2 =$(check2).html();
				var rad0 =$(radio0).html();
				var rad1 =$(radio1).html();
				var rad2 =$(radio2).html();
			
				
				$("#display1").text(item_name);
                $("#qty2").val(item_qty);
                $("#display2").text('$'+price);
                $("#display3").text(description);
				$("#display4").empty().append(image);
				$("#textarea1").text(instructions);
				
				$('#check0').prop('checked', chk0);
				$('#check1').prop('checked', chk1);
				$('#check2').prop('checked', chk2);
				$('#radio0').prop('checked', rad0);
				$('#radio1').prop('checked', rad1);
				$('#radio2').prop('checked', rad2);
				$("#update_qtycart").text("Update to cart - $" + amt);
				
               $("#update_qtycart").click(function () {
				var cost= $("#update_qtycart").text().replace("Update to cart - $", "");
				  cost1=JSON.parse(cost);
				
				var item_qty1= $("#qty2").val();
				var item_name1= $("#display1").text();
				var price1 = $("#display2").text().replace("$", "");
				var price=JSON.parse(price1);
                var description1= $("#display3").text();
				var image1= $("#display4").html();
				var instructions1= $("#textarea1").val();
				var cost3=(price*item_qty1);
				var check0=$("#check0").is(":checked");
			if(check0==true)
			{  
		  check0= $('#check0:checked').val();
			}
			else{
			check0="";
			}
			var check1=$("#check1").is(":checked");
			if(check1==true)
			{ 
		 check1=$('#check1:checked').val();
			}
			else{
			check1="";
			}
			var check2=$("#check2").is(":checked");
			if(check2==true)
			{  
		  check2= $('#check2:checked').val();
			}
			else{
			check2="";
			}
			
			var radio0=$("#radio0").is(":checked");
			if(radio0==true)
			{ 
		 radio0=$('#radio0:checked').val();
			}
			else{
			radio0="";
			}
			var radio1=$("#radio1").is(":checked");
			if(radio1==true)
			{ 
		 radio1=$('#radio1:checked').val();
			}
			else{
			radio1="";
			}
			
			var radio2=$("#radio2").is(":checked");
			if(radio2==true)
			{ 
		 radio2=$('#radio2:checked').val();
			}
			else{
			radio2="";
			}
				$('#'+ID).html("<td><button class='change btn', id='change'>" + item_qty1 + "</button></td>" +
                 "<td><button class='change btn', id='change'>" + item_name1 + "</button></td>" +
                 "<td><button class='change btn', id='change'>$" + cost1 + "</button></td><td>" +
				 "<button class='btn delete-item($index)', id='cancel'>"+
	"<div class='icon-trash' style='float:right'>"+
    "<div class='trash-lid' style='background-color: #C5BFB6'></div>"+
    " <div class='trash-container' style='background-color: #C5BFB6'></div>"+
    "<div class='trash-line-1'></div>"+
    "<div class='trash-line-2'></div>"+
    "<div class='trash-line-3'></div></div></button>"+
				// "<button class='btn delete-item($index)', id='cancel'> X </button>" + "</td>" +
				 "<td style='display: none' id='change'>" + price + "</td>" +
				 "<td style='display: none' id='change'>" + description1 + "</td>" +
				 "<td style='display: none' id='change'>" + image1 + "</td>" +
				 "<td style='display: none' id='change'>" + instructions1 + "</td>"+
				 "<td style='display: none' id='change'>" + check0 + "</td>" +
				 "<td style='display: none' id='change'>" + check1 + "</td>" +
				 "<td style='display: none' id='change'>" + check2 + "</td>" +
				 "<td style='display: none' id='change'>" + radio0 + "</td>" +
				 "<td style='display: none' id='change'>" + radio1 + "</td>" +
				 "<td style='display: none' id='change'>" + radio2 + "</td>" );
			   
			 calculate();
				  });
		if(theTotal==0)
	{   
		$("#showcart").css("display", "none");
		$("#show_empty_cart").css("display", "block");
	}
	});
		
		 $('#showcart').on('click', '#cancel', function (i,d) {

                var par = $(this).parent().parent(); //tr
                var ditem = par.children("td:nth-child(1)");
                var dquantity = par.children("td:nth-child(2)");
                var dprice =par.children("td:nth-child(3)");

				var par = $(this).parent().parent();
				var ID =$(this).closest('tr').attr('id');
		
                var amount=$(dprice).text();
				//alert(amount);
               
				$('#'+ID).empty();
		 calculate();
   if(theTotal==0)
	{   
		$("#showcart").css("display", "none");
		$("#show_empty_cart").css("display", "block");
	}
            });
		 
$("#qtyplus2").click(function (e) {
    
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal)) {
                $('input[name=' + fieldName + ']').val(currentVal + 1);
            } else {
                $('input[name=' + fieldName + ']').val(0);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#display2").text().replace("$", "");
            cost = (quantity * price);
            $("#update_qtycart").text("Update to cart - $" + cost);

        });
	
	$("#qtyminus2").click(function (e) {
            e.preventDefault();

            fieldName = $(this).attr('field');
            var currentVal = parseInt($('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal) && currentVal > 0) {
                $('input[name=' + fieldName + ']').val(currentVal - 1);
            } else {
                $('input[name=' + fieldName + ']').val(0);
            }
            fieldName = $(this).attr('field');
            var quantity = parseInt($('input[name=' + fieldName + ']').val());
            var cost;
			var price = $("#display2").text().replace("$", "");
            cost = (quantity * price);
            $("#update_qtycart").text("Update to cart - $" + cost);
        });
		$("#review_order").click(function (e) {
			$("#address").css("display", "none");
			$("#date_time").css("display", "none");
			$("#restAndCartContainer").css("display", "none");
			$("#choose_menu").css("display", "none");
			$("#picture").css("display", "none");
			$("#review").css("display", "block");
			$("#showdiv2").css("display", "block");	
			});
		
		$("#register").click(function (e) {
			$("#address").css("display", "none");
			$("#date_time").css("display", "none");
			$("#restAndCartContainer").css("display", "none");
			$("#choose_menu").css("display", "none");
			$("#picture").css("display", "none");
			$("#review").css("display", "block");
			$("#account").css("display", "block");
			$("#account_login").css("display", "none");
			$("#showdiv2").css("display", "none");	
			$("#div_address").css("display", "none");
			$("#choose_rest").css("display", "none");
			$("#when").css("display", "none");
				$("#backto_rest").css("display", "none");
				$("#choose_restaurant").css("display", "none");
			});
			
			$("#login").click(function (e) {
			$("#address").css("display", "none");
			$("#date_time").css("display", "none");
			$("#restAndCartContainer").css("display", "none");
			$("#choose_menu").css("display", "none");
			$("#picture").css("display", "none");
			$("#review").css("display", "block");
			$("#account").css("display", "none");
			$("#account_login").css("display", "block");
			$("#showdiv2").css("display", "none");	
			$("#div_address").css("display", "none");
			$("#choose_rest").css("display", "none");
			$("#when").css("display", "none");
				$("#backto_rest").css("display", "none");
				$("#choose_restaurant").css("display", "none");
			});
		
		$("form[name='login']").validate({
                rules: {
                    login_user: "required",
                    login_pass: {
                        required: true,
                        minlength: 8
                    }
                },

                messages: {
                    login_user: "Please enter your User name",
                    login_pass: "Please enter correct Password",
                },

                submitHandler: function (form) {
                    form.submit();
                }
            });
		
		$("form[name='registration']").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    confirm_password: {
                        required: true,
                        minlength: 5,
                        equalTo: "#password"
                    }
                },

                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    phone: "Please enter your phone number",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    confirm_password: {
                        required: "Should be same as password"

                    },
                    email: "Please enter a valid email address"
                },

                submitHandler: function (form) {
                    form.submit();
                }
            });
			
Date.prototype.addDays = function(days) {
  var dat = new Date();
  dat.setDate(dat.getDate() + 0);
var a=dat.getDay();
if((a=='0')||(a=='6'))
{
	document.getElementById("demo1").remove();
}
else{
	
 document.getElementById("demo1").append(dat.toDateString());

}
 return dat;
}
var dat = new Date();
(dat.addDays(0))


Date.prototype.addDays = function(days) {
  var dat = new Date();
  dat.setDate(dat.getDate() + 1);
  var a=dat.getDay();
if((a=='0')||(a=='6'))
{
	document.getElementById("demo2").remove();
}
else{
 document.getElementById("demo2").append(dat.toDateString());
} 
 return dat;
}
var dat = new Date();
(dat.addDays(1))

Date.prototype.addDays = function(days) {
  var dat = new Date();
 
  dat.setDate(dat.getDate() + 2);
   var a=dat.getDay();
  
if((a=='0')||(a=='6'))
{
	document.getElementById("demo7").remove();
}
else{
 document.getElementById("demo7").append(dat.toDateString());
}
 return dat;
}
var dat = new Date();
(dat.addDays(2))

Date.prototype.addDays = function(days) {
  var dat = new Date();
   dat.setDate(dat.getDate() + 3);
    var a=dat.getDay();
if((a=='0')||(a=='6'))
{
	document.getElementById("demo3").remove();
}
else{
 document.getElementById("demo3").append(dat.toDateString());
}
return dat;
}
var dat = new Date();
(dat.addDays(3))


Date.prototype.addDays = function(days) {
  var dat = new Date();
  dat.setDate(dat.getDate() + 4);
  var a=dat.getDay();
if((a=='0')||(a=='6'))
{
	document.getElementById("demo4").remove();
}
else{
 document.getElementById("demo4").append(dat.toDateString());
} 
 return dat;
}
var dat = new Date();
(dat.addDays(4))


Date.prototype.addDays = function(days) {
  var dat = new Date();
 
  dat.setDate(dat.getDate() + 5);
   var a=dat.getDay();
  
if((a=='0')||(a=='6'))
{
	document.getElementById("demo5").remove();
}
else{
 document.getElementById("demo5").append(dat.toDateString());
}
 return dat;
}
var dat = new Date();
(dat.addDays(5))


Date.prototype.addDays = function(days) {
  var dat = new Date();
 
  dat.setDate(dat.getDate() + 6);
   var a=dat.getDay();
  
if((a=='0')||(a=='6'))
{
	document.getElementById("demo6").remove();
}
else{
 document.getElementById("demo6").append(dat.toDateString());
}
 return dat;
}
var dat = new Date();
(dat.addDays(6))





});
	
	


	