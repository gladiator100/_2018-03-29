<html>
<head>
	<%@ taglib  prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
	<link href="${pageContext.request.contextPath}/resources/css/index.css" rel="stylesheet">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/index.js"></script>
	
	<!-- Address LookUp -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/address/css/jquery.address-suggest.css">
	<script src="//code.jquery.com/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/address/js/jquery.address-suggest.js"></script>

	 <link href="${pageContext.request.contextPath}/resources/Content/creditly.css" rel="stylesheet" />
     <link href="${pageContext.request.contextPath}/resources/Content/bootstrap.min.css" rel="stylesheet" />
    
    <script src="${pageContext.request.contextPath}/resources/Scripts/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/Scripts/jquery.validate.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/Scripts/creditly.js"></script>
    
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.eot"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.svg"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.ttf"></script>
	<script src="${pageContext.request.contextPath}/resources/fonts/glyphicons-halflings-regular.woff"></script>

	<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUTefqhrdeC-OBY_tZcXf-M9OghCh4Vx8&libraries=places&callback=initAutocomplete"
        async defer></script>

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
		
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
</head>
<body>
<div class="top_menu">   
 <table cellpadding=0 id="menu" style="font-weight:bold">
  
   
   <tr class="spaceUnder">
	
	<td width=4% id="home" style="text-decoration:none; color:black;float:bottom;"><b>Home</b></td>
	
	<td width=8%><a href="#" style="text-decoration:none; color:black"><b>1234567890</b></a></td>
	
	<td width=8%><img id="logo" src="${pageContext.request.contextPath}/resources/images/logodemo.png" 
	style="width:140px;margin-top:0px;padding-top:0px;margin-left:100px;padding-left:40px;"/></td>
	
	
	<td width=8%><h3 style="color:red;font-family:verdana;float:left;margin-right:40px;">Express Delivery</h3></td>
	<td width=6%></td>
	<td width=4% id="login" style="text-decoration:none; color:black"><b>Sign In</b></a></td>
	
	<td width=1%>|</td>
	<td width=6% id="register" style="text-decoration:none; color:black"><b>Sign Up</b></a></td>
	</tr>
   
  </table>    
 </div>
       <br/><br/>
<div class="picture" id="picture"></div>
<div id="div_address" class="div_address" style="display:block;margin-top:55px;background-image: url(${pageContext.request.contextPath}/resources/images/pic6.jpg);">
 

 <div id="locationField">
 <table>
      <tr><td width=75%><input id="autocomplete" placeholder=" Street address, city, state"
             onFocus="geolocate()" type="text" style="position:relative;width:400px;margin-left:300px;height:35px;
    font-size:14pt;"></input></td>
			 <td><button type="submit" id="find_btn" value="Find" class="btn btn-group-justified"
			 style="width:55px;height:auto;margin-left:30px;">
			Find</button></td></tr>
			
			 <!--<form autocomplete="off" action="/action_page.php">
        <div class="autocomplete" style="width:300px;">
            <input id="myInput" type="text" name="myCountry" placeholder="Country">
        </div>
        <input type="submit">
    </form>-->
			</table>
			
    </div>

    <table id="address" style="display:none">
      <tr>
        <td class="label">Street address</td>
        <td class="slimField"><input class="field" id="street_number"
              disabled="true"></input></td>
        <td class="wideField" colspan="2"><input class="field" id="route"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">City</td>
        <td class="wideField" colspan="3"><input class="field" id="locality"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">State</td>
        <td class="slimField"><input class="field"
              id="administrative_area_level_1" disabled="true"></input></td>
			  
        <td class="label">Zip code</td>
        <td class="wideField"><input class="field" id="postal_code"
              disabled="true"></input></td>
      </tr>
      <tr>
        <td class="label">Country</td>
        <td class="wideField" colspan="3"><input class="field"
              id="country" disabled="true"></input></td>
      </tr>
	  
    </table>
	
	
	
	<table>
	<tr id="select_btn"><td><span><button type="submit" disabled id="corporate_lunch" value="Corporate Lunch" 
				style="height:35px;width:140px;margin-top:30px;margin-left:320px" class="btn">Corporate Lunch</button></td>
				<td><button type="submit" disabled id="restaurant_delivery" value="Restaurant Pickup" 
				style="height:35px;width:140px;margin-top:30px;margin-left:50px" class="btn">Restaurant Delivery</button></span></td></tr>
	  
	  <tr id="date_time" style="display:none">
	  <td>
	    	  
					 <div class="dropdown" style="margin-left:350px;margin-top:30px;width:150px">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Select Date
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#" id="demo1"></a></li>
            <li><a href="#" id="demo2"></a></li>
            <li><a href="#" id="demo3"></a></li>
			<li><a href="#" id="demo4"></a></li>
            <li><a href="#" id="demo5"></a></li>
            <li><a href="#" id="demo6"></a></li>
			<li><a href="#" id="demo7"></a></li>
        </ul>
    </div>
				
	  	</td>
   				

   		<td>  
   			<!--<select id="time" onchange="set_time()" style="margin-left:50px;margin-top:30px;width:120px">
				<option>11:30am</option>
				<option>12:30pm</option>
				<option>1:30pm</option>
			</select-->
			<div class="dropdown" id="time" onchange="set_time()" style="margin-left:50px;margin-top:30px;width:120px">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Select Time
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">11:30 noon</a></li>
            <li><a href="#">12:30 noon</a></li>
            <li><a href="#">1:30 noon</a></li>
        </ul>
    </div>
  		</td></tr>
	  </table> </div>      
<!--<div id="div_carousel" class="container" style="display:block">
  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
	  
    </ol>

    
    <div class="carousel-inner">

      <div class="item active">
        <img src="${pageContext.request.contextPath}/resources/images/pic7.jpg" style="width:1800px;height:400px;">
      </div>
    
      <div class="item">
        <img src="${pageContext.request.contextPath}/resources/images/pic6.jpg" style="width:1800px;height:400px;">
      </div>
	  <div class="item">
        <img src="${pageContext.request.contextPath}/resources/images/pic5.jpg" style="width:1800px;height:400px;">
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>-->
	  
<div class="when" id="when" style="display:none">   
 	<table border=0 width=100% cellpadding=0 >
  	 <tr>
	 <td width=2%></td>
	 <td>  
	    		
				<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
            Select Corporate Center
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <li><a href="#">Whiteland Corporate Center, Exton</a></li>
        </ul>
    </div>
	  		</td>
			
  		  <td>
		  <input type="text" class="form-control" placeholder="Company name" style="width:250px;margin-left:10px;float:left;"/>
		  
		 
				</td>
				
				  		  <td>
						  <input type="text" class="form-control" placeholder="Suite number" style="width:120px;margin-left:10px;float:left;"/>
				</td>
				
			</tr>
			 
			
  </table>    
 </div>    



<div id="backto_rest" onclick="backrest();" style="display:none"></td>
<td width=40%></div>


 

 <div id="restAndCartContainer" class = "restAndCartContainer">

 <div id="restaurants" class = "restName">
 
	<table class="restName">
	
	<tr>
	
	<td>
   	<div class="href">
  	<table align="top" class="restName" id="select_rest" style="width:800px;display:block;">	
 		
  	</table>
  	</Div>
  	</td>
  	
  <!--  <td style="padding-right: 10px"> -->	
    	
  </tr>
   </table>
  </Div>
  
  <Div id="div_menus" class = "restName col-md-8">
	   <table class="restName">
	      <tr>
	         <td>
	            <div class="href">
	               <table id="table_menus" align="top" class="restName" style="width:750px;display:none;">
	               
	                    
	            
	               </table>
	            </Div>
	         </td>
	         <!--  <td style="padding-right: 10px"> -->	
	      </tr>
	  	</table>
	</Div>
  
  
  
  
  
	
	<div class = "cart" class="col-md-push-3" id="showcart" style="display:none;">

	
	<div class="col-md-12" style="font-family:'lucida sans'">
        <br />
        <div class="col-md-12">
		<table border=1 style="width:100%;" >
			<tr><img id="cartLogo" src="${pageContext.request.contextPath}/resources/images/icon_cart.png" />&nbsp;&nbsp;Your Cart</tr>
			<!--<tr><faintLine/></tr>
		
            <!--<h4><b>Your Cart</b></h4>-->
            <hr />

            <table id="cartTable" style="width:100%; align-items:left">
                
                <tbody id="tid" style="width:100%; align-items:left">
				
				</tbody>
            </table>
            <hr />
            <b>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtotal
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span id="subtotal"></span>
            </b>  <br />
            <button type="submit" name="Review Your Order" id="review_order"
                    class="btn btn-success btn-group-justified">
                Review Your Order
            </button></table>
        </div>
		 </div>
 		 
  	</div> 
	
	<div class = "cart" class="col-md-push-3" id="show_empty_cart" style="display:none;">
	<table border=1>
	
	<div class="col-md-12" style="font-family:'lucida sans'">
        
        <div class="col-md-12">
		<table border=1 style="width:100%;">
			<tr><img id="cartLogo" src="${pageContext.request.contextPath}/resources/images/icon_cart.png" 
			style="margin-left:1%"/>
			</tr>
			<br/>
			
            <button type="submit" name="Feed Me" id="feed_me"
                    class="btn btn-success btn-group-justified">
                Feed Me 
            </button></table>
        </div>
		 </div>
 		  </table>
  	</div> 
	
	
	 <div class="col-md-12" style="color:black;display:none;" id="review">
	  <div class="col-md-6" id="account_login" style="color:black;display:none;">
            <h4><b>Login</b></h4> <hr />
            <form action="" name="login" id="login">
                <div class="form-group">
                    <label for="Username">Username:</label>
                    <input type="text" class="form-control" name="login_user" id="login_user">
                </div>
                <div class="form-group">
                    <label for="Password">Password:</label>
                    <input type="password" class="form-control" name="login_pass" id="login_pass">
                </div>
                <div class="checkbox">
                    <label><input type="checkbox"> Remember me</label>
                </div>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
	  <div class="col-md-6" id="account" style="color:black;display:none;">
            <h4><b>Create Account</b></h4> <hr />
            <form action="" name="registration">

                <div class="form-group col-md-6">
                    <label>First name</label>
                    <input type="text" class="form-control" name="firstname" id="firstname">
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Last name</label>
                    <input type="text" class="form-control" name="lastname" id="lastname">
                </div>
               
                <div class="form-group col-md-6">
                    <label>Email address:</label>
                    <input type="email" class="form-control" name="email" id="email">
                </div>
				 <div class="form-group col-md-offset-6">
                    <label>Telephone number:</label>
                    <input type="text" class="form-control" name="phone" id="phone" maxlength="10">
                </div>
                <div class="form-group col-md-6">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password" id="password">
                </div>
                <div class="form-group col-md-offset-6">
                    <label>Confirm Password</label>
                    <input type="password" class="form-control" name="confirm_password" id="confirm_password">
                </div>

                <button class="btn col-md-offset-6" type="submit"> Register</button>
            </form>
      </div>
	 <!--<div id="showdiv2" style="display:none;padding-left:40px"> -->

            <div class="col-md-6" id="credit_card" style="display:none">


                <form class="creditly-card-form">

                    <div class="top-level-wrapper blue-theme-wrapper" id="payment">
                        <section class="creditly-wrapper blue-theme">
                            <div class="credit-card-wrapper" style="background-color:pink">
                                <h4 style="color:black"><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Payment Method</b></h4> <hr/>
                                <div class="first-row form-group">
                                    <div class="col-sm-8 controls">
                                        <label class="control-label" style="color:black">Card Number</label>
                                        <input class="number credit-card-number form-control"
                                               type="text" name="number"
                                               pattern="\d*"
                                               inputmode="numeric" autocomplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number"
                                               placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;">
                                    </div>
                                    <div class="col-sm-4 controls">
                                        <label class="control-label" style="color:black">CVV</label>
                                        <input class="security-code form-control" ·
                                               inputmode="numeric"
                                               pattern="\d*"
                                               type="text" name="security-code"
                                               placeholder="&#149;&#149;&#149;">
                                    </div>
                                </div>
                                <div class="second-row form-group">
                                    <div class="col-sm-8 controls">
                                        <label class="control-label" style="color:black">Name on Card</label>
                                        <input class="billing-address-name form-control"
                                               type="text" name="name"
                                               placeholder="John Smith">
                                    </div>
                                    <div class="col-sm-4 controls">
                                        <label class="control-label" style="color:black">Expiration</label>
                                        <input class="expiration-month-and-year form-control"
                                               type="text" name="expiration-month-and-year"
                                               placeholder="MM / YY">
                                    </div>
                                </div>
                                <div class="card-type"></div>
                            </div>
                        </section>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="creditly-blue-theme-submit">Proceed to Pay</button>
                    </div>
                </form>
            </div>

       <!-- </div>-->
    </div>
 </div>


<div id="result"></div>

    <div class="container-fluid col-md-12" id="popupclose">
        <div class="row">
            <div id="myModal1" class="modal fade" >
                <div class="modal-dialog" style="width:52%">
                    <div class="modal-content" class="col-md-12">

                        <div class="modal-header" class="col-md-12">
						
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">

                                &times;
                            </button>

                            <div class="modal-title">
							<span class="col-md-12">
							<div class="col-md-6"><span>
                                <div style="font-size:26px; font-weight:500; padding-bottom:none;" name="display1" id="display1"></div>

                                <div style="font-size:26px; font-weight:500; padding:none; color:blue;" name="display2" id="display2"></div></span>
                           <br/><p &nbsp&nbsp;&nbsp; style="font-size:14px" name="display3" id="display3"></p>
                              
							</div>
							<div class="col-md-6">
							<h4 style="height:200px;width:300px" id="display4" name="display4"></h4>
							</div></span>
							</div>
                        </div>
<br/>
						<div class="modal-body col-md-12" style="color:steelblue; padding-top:inherit; padding-bottom:inherit">
                        <div class="modal-body col-md-12" id="section_chk">
                            <br/>
							
							</div>
                             
                        
				<textarea placeholder="Special instructions" class="form-control" rows="2" cols="15" id="textarea1"></textarea>
				</div>
                        <div class="modal-footer btn-group btn-group-justified" id="addcart">
                            <span class="pull-left">
							 <button  type="button" id="qtyminus" field="quantity" class="glyphicon glyphicon-minus-sign btn btn-group-justified
                                        btn-danger" ></button>
                               
                                <input type="text" name="quantity" value="1" id="qty" readonly="readonly"/>
                                <button type="button" id="qtyplus" field="quantity" class="glyphicon glyphicon-plus-sign btn btn-group-justified btn-success" ></button> 
								&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" id="qtycart" field="quantity"
                                                                class="btn btn-success btn-group-justified col-md-push-3" data-dismiss="modal">
								
                                   
                                </button>
                           </span>
                        </div>
						
						<div class="modal-footer btn-group btn-group-justified" id="updatecart" style="display:none">
                             <span class="pull-left">
                                <button type="button" id="qtyminus2" field="item_qty" class="glyphicon glyphicon-minus-sign btn btn-group-justified
                                        btn-danger"></button>
                                <input type="text" name="item_qty" id="qty2" value="1" readonly="readonly" />
                                <button type="button" id="qtyplus2" field="item_qty" class="glyphicon glyphicon-plus-sign btn btn-group-justified btn-success"></button>
                                &nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" name="update to cart" id="update_qtycart" field="item_qty"
                                                                class="btn btn-success btn-group-justified col-md-push-5" data-dismiss="modal">
                                  
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  
	<div id="div_footer" class="div_footer">
	<table>
	
	<tr class="spaceUnder">
	<td width=4%></td>
	<td width=10%><a href="#" style="text-decoration:none; color:white"><b>About</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>About Uber eats</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Become a delivery partner</b></a></td>
	<td width=4%></td>

	<td class="fa fa-facebook-official" style="font-size:26px;width:60px;padding-left:50px;"></td>
	<td class="fa fa-linkedin-square" style="font-size:26px;width:60px;padding-left:50px;"></td>
	<td class="fa fa-twitter-square" style="font-size:26px;width:60px;padding-left:50px;"></td>
	<td class="fa fa-instagram" style="font-size:26px;width:60px;padding-left:50px;"></td>
	</tr>
	
	<tr class="spaceUnder">
	<td width=4%></td>
	<td width=10%><a href="#" style="text-decoration:none; color:white"><b>FAQ</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Gift Cards</b></a></td>
	<td width=4%></td>
	<td width=15%><a href="#" style="text-decoration:none; color:white"><b>Become a restaurant partner</b></a></td>
	<td width=4%></td></tr>
	</table>
	 </div>
    

</body>
</html>