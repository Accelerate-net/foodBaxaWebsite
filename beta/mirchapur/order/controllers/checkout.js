angular.module('CheckOut', ['ngRoute', 'ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



.controller('CheckoutController', ['$scope','$http', '$cookies', function($scope, $http, $cookies) {

    // Check if already logged in
    // var cname = "token", cvalue = "tokenavlaflafe3r5RTWF", exdays = "5";
    // var d = new Date();
    // d.setTime(d.getTime() + (exdays*24*60*60*1000));
    // var expires = "expires="+ d.toUTCString();
    // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //
    // var decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie)



    //Check if the user is Logged In
    if($cookies.get("user")){
      $scope.isLoggedIn = true;


   //Clear Pick Up location cache.
   if(localStorage.getItem("pickupOutlet")){
     localStorage.removeItem("pickupOutlet");
   }


      //Check if cart is empty?
      $scope.isCartEmpty = false;
      if(JSON.parse(localStorage.getItem("itemsInfo")) == ""){
        $scope.isCartEmpty = true;
        window.location = "index.html";
      }

    if(localStorage.getItem("isTakeAway")=='true'){
      $scope.isTakeAway = true;
    }
    else{
      $scope.isTakeAway = false;
    }        

      //Checkout address details
      if(JSON.parse($cookies.get("user")).savedAddresses[0]){
        $scope.checkoutAddress = {};
        $scope.checkoutAddress.name = JSON.parse($cookies.get("user")).savedAddresses[0].name;
        $scope.checkoutAddress.flatNo = JSON.parse($cookies.get("user")).savedAddresses[0].flatNo;
        $scope.checkoutAddress.flatName = JSON.parse($cookies.get("user")).savedAddresses[0].flatName;
        $scope.checkoutAddress.landmark = JSON.parse($cookies.get("user")).savedAddresses[0].landmark;
        $scope.checkoutAddress.area = JSON.parse($cookies.get("user")).savedAddresses[0].area;
        $scope.checkoutAddress.contact = JSON.parse($cookies.get("user")).savedAddresses[0].contact;
      }
      else{
        $scope.checkoutAddress = {};
        $scope.checkoutAddress.name = "";
        $scope.checkoutAddress.flatNo = "";
        $scope.checkoutAddress.flatName = "";
        $scope.checkoutAddress.landmark = "";
        $scope.checkoutAddress.area = "";
        $scope.checkoutAddress.contact = "";
      }
    }
    else{
      $scope.isLoggedIn = false;

      window.location = "index.html";

      //Checkout address details
      $scope.checkoutAddress = {};
      $scope.checkoutAddress.name = "";
      $scope.checkoutAddress.flatNo = "";
      $scope.checkoutAddress.flatName = "";
      $scope.checkoutAddress.landmark = "";
      $scope.checkoutAddress.area = "";
      $scope.checkoutAddress.contact = "";
    }


    //Default payment options
    $scope.isCOD = false;
    $scope.setMode = function(mode){
      if(mode == 'COD')
        $scope.isCOD = true;
      else
        $scope.isCOD = false;
    }



    //comments
    $scope.orderStuff = {};
    $scope.orderStuff.comments = "";



    //Coupon Stuff
    $scope.isCouponApplied = false;
    $scope.isCouponFailed = false;
    $scope.couponDiscount = 0;

    $scope.invalidateCoupon = function(){
      document.getElementById("couponCode").disabled = false;

      if($scope.isCouponApplied && !$scope.isCouponFailed){
        $scope.isCouponApplied = false;
        $scope.isCouponFailed = false;
        document.getElementById("discountTab").innerHTML = ' 0';
        document.getElementById("discountBar").style.color = "";
        document.getElementById("grandTotal").innerHTML = Number(document.getElementById("grandTotal").innerHTML) + $scope.couponDiscount;
      }

      if($scope.isCouponApplied && $scope.isCouponFailed){
        $scope.isCouponApplied = false;
        $scope.isCouponFailed = false;
      }
    }


    //List of outlets in the city
    var temp_location = JSON.parse(localStorage.getItem("location"));

    if(localStorage.getItem("outletInfo") != ""){
      $scope.outletMeta = JSON.parse(localStorage.getItem("outletInfo"));
      $scope.selectedPickup = JSON.parse(localStorage.getItem("outletInfo")).outlet;
    }

    $scope.onOutletChange = function(outlet){
      $scope.selectedPickup = outlet;
      $http.get('https://accelerateengine.app/foodengine/services/fetchoutletsweb.php?outletcode='+outlet)
      .then(function(response){
        $scope.outletMeta = response.data.response;
        localStorage.setItem("pickupOutlet", $scope.outletMeta.outlet);

        //Payment options change
        $scope.isPrepaidAllowed = $scope.outletMeta.isAcceptingOnlinePayment;
        $scope.isPaymentPending = false;
        $scope.paymentKey = $scope.outletMeta.razorpayID;
        if($scope.isPrepaidAllowed){
          $scope.isCOD = false;
        }
        else{
          $scope.isCOD = true;
        }

      });
    }

    //To re-enable Order Place button
    $scope.restartOrder = function(){
      $scope.isPaymentPending = false;
    }

    $scope.fetchOutlets = function() {
      $http.get('https://accelerateengine.app/foodengine/services/fetchoutletssimple.php?city='+temp_location.city)
      .then(function(response){
        $scope.outletsList = response.data.response;
      });
    }

    $scope.setPickup = function(outlet) {

    }



    //Is Online Payment Available?
    $scope.isPrepaidAllowed = true;
    if($scope.outletMeta){
      $scope.isPrepaidAllowed = $scope.outletMeta['isAcceptingOnlinePayment'];

      if(!$scope.isPrepaidAllowed){
        $scope.isCOD = true;
      }
    }

    //Payment key
    $scope.paymentKey = "";
    if($scope.outletMeta){
      $scope.paymentKey = $scope.outletMeta.razorpayID;
    }








    $scope.applyCoupon = function(coupon){
    if(!$scope.isCouponApplied){
      var data = {};
      data.token = JSON.parse($cookies.get("user")).token;
      data.coupon = coupon;

      //Making the cart object
      var info = JSON.parse(localStorage.getItem("itemsInfo"));
      var i = 0;
      var sub_total=0;
      while(i<info.length)   {
          sub_total += (info[i].qty*info[i].itemPrice);
          i++;
      }

      var cart = {
          "cartTotal": sub_total,
          "cartCoupon": $scope.coupon,
          "items": info
      };

      data.cart = cart;

      //Calling Validate Coupon
      $('#loading').show();
      $http({
        method  : 'POST',
        url     : 'https://accelerateengine.app/foodengine/services/validatecoupon.php',
        data    : data, //forms user object
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
       })
        .then(function(response) {
          $('#loading').hide();
          
          if(response.data.status){
            $scope.isCouponApplied = true;
            $scope.isCouponFailed = false;
            $scope.couponDiscount = response.data.discount;

            document.getElementById("couponCode").disabled = true;
            document.getElementById("discountTab").innerHTML = ' '+$scope.couponDiscount;
            document.getElementById("discountBar").style.color = "#1abc9c";
            document.getElementById("grandTotal").innerHTML = Number(document.getElementById("grandTotal").innerHTML) - $scope.couponDiscount;
          }
          else{
            $scope.isCouponApplied = true;
            $scope.isCouponFailed = true;
            $scope.couponError = response.data.error;
          }
        });

      }
    }




    $scope.myAddressList = "";
    $scope.initAddress = function(){    		
    		var data = {};
    		data.token = JSON.parse($cookies.get("user")).token;

    	       $('#loading').show();
	       $http({
	        method  : 'POST',
	        url     : 'https://accelerateengine.app/foodengine/services/addresssuggestions.php',
	        data    : data, //forms user object
	        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
	       })
	        .then(function(response) {
	          $('#loading').hide();	         
	          if(response.data.status){	          	          
	          	  $scope.myAddressList = response.data.response;          		          
		          $('#addressSuggestions').modal('show');	                   	          	            
	          }
	          else{
	          	
	            	$scope.myAddressList = "";
	          }
	        });     
    }

    //Open Saved Address
    $scope.openSavedAddress = function(){
    	$scope.initAddress();
    	$('#addressSuggestions').modal('show');
   
    }


    //Copy from the saved address
    $scope.copyThisAddress = function(address){    
	$('#addressSuggestions').modal('hide');	
	$scope.checkoutAddress = address;
    }   
    
    $scope.addNewAddressFlag = false;
    $scope.addNewAddress = function(){
    	$scope.addNewAddressFlag = true;
    	
    	$scope.newAddressContent = {};
    	$scope.newAddressContent.name = "";
    	$scope.newAddressContent.flatNo = "";
    	$scope.newAddressContent.flatName = "";
    	$scope.newAddressContent.locality = "";
    	$scope.newAddressContent.area = "";
    	$scope.newAddressContent.contact = "";
    } 
    
    $scope.saveNewAddressToList = function(){
    	$scope.newError = "";
        if($scope.newAddressContent.name == ""){
          $scope.newError = "Recepient Name can not be empty";
        }
        else if($scope.newAddressContent.flatNo == ""){
          $scope.newError = "Flat No. can not be empty";
        }
        else if($scope.newAddressContent.flatName == ""){
          $scope.newError = "Flat Name can not be empty";
        }
        else if($scope.newAddressContent.area == ""){
          $scope.newError = "Locality Name can not be empty";
        }
        else if($scope.newAddressContent.contact == ""){
          $scope.newError = "Contact Number can not be empty";
        }
        else{
        	$scope.newError = "";
    		var data = {};
    		data.token = JSON.parse($cookies.get("user")).token;
    		data.address = $scope.newAddressContent;
    	
    	       $('#loading').show();
	       $http({
	        method  : 'POST',
	        url     : 'https://accelerateengine.app/foodengine/services/newaddress.php',
	        data    : data, //forms user object
	        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
	       })
	        .then(function(response) {
	          $('#loading').hide();	       
	          if(response.data.status){
			
	          	$scope.newError = "";
	          	$scope.initAddress();  
	          	  
	          	//Reset all the values
	          	$scope.addNewAddressFlag = false;  
		    	$scope.newAddressContent.name = "";
		    	$scope.newAddressContent.flatNo = "";
		    	$scope.newAddressContent.flatName = "";
		    	$scope.newAddressContent.locality = "";
		    	$scope.newAddressContent.area = "";
		    	$scope.newAddressContent.contact = "";	          	        		          	                   	          	            
	          }
	          else{
	            	$scope.newError = response.data.error;
	          }
	        });           
        }
            	
    }
    
    $scope.deleteThisAddress = function(uid){
    		var data = {};
    		data.token = JSON.parse($cookies.get("user")).token;
    		data.id = uid; 
    		
    		console.log('Delete ID: '+uid)   	
    	
    	       $('#loading').show();
	       $http({
	        method  : 'POST',
	        url     : 'https://accelerateengine.app/foodengine/services/deleteaddress.php',
	        data    : data, //forms user object
	        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
	       })
	        .then(function(response) {
	          $('#loading').hide();	       
	          $scope.initAddress();
	        });       
    }



      //Order-Payment status
      $scope.isPaymentPending = false;
      $scope.pendingOrder = "";

      $scope.checkout = function(checkoutAddress, comments, coupon){

        //Validate address
        $scope.isAddessPassed = false;
        if(checkoutAddress.name == "" && !$scope.isTakeAway){
          document.getElementById("orderAlert").innerHTML = "Recepient Name can not be empty";
        }
        else if(checkoutAddress.flatNo == "" && !$scope.isTakeAway){
          document.getElementById("orderAlert").innerHTML = "Flat No. can not be empty";
        }
        else if(checkoutAddress.flatName == "" && !$scope.isTakeAway){
          document.getElementById("orderAlert").innerHTML = "Flat Name can not be empty";
        }
        else if(checkoutAddress.area == "" && !$scope.isTakeAway){
          document.getElementById("orderAlert").innerHTML = "Locality Name can not be empty";
        }
        else if(checkoutAddress.contact == "" && !$scope.isTakeAway){
          document.getElementById("orderAlert").innerHTML = "Contact Number can not be empty";
        }
        else{

            var coupon_applied = 0;

            if($scope.isCouponApplied && !$scope.isCouponFailed){
              var coupon_applied = coupon;
            }

            var info = JSON.parse(localStorage.getItem("itemsInfo"));
            var i = 0;
            var sub_total=0;
            while(i<info.length)   {
                sub_total += (info[i].qty*info[i].itemPrice);
                i++;
            }
            
            //TESTING
            var extra_total = 0;
            var tax_central = 0;
            var tax_state = 0;
            var extra_container = 0;
            
            if($scope.outletMeta.isCentralTaxCollected){
              tax_central = (sub_total*($scope.outletMeta.centralTaxPercentage)).toFixed(2);
            }
            
            if($scope.outletMeta.isStateTaxCollected){
              tax_state = (sub_total*($scope.outletMeta.stateTaxPercentage)).toFixed(2);
            }
            
            if($scope.outletMeta.isParcelCollected){
              if($scope.isTakeAway){
                extra_container = (sub_total*($scope.outletMeta.parcelPercentagePickup)).toFixed(2);
              }
              else{
                extra_container = (sub_total*($scope.outletMeta.parcelPercentageDelivery)).toFixed(2);
              }
            }        
            
            extra_total = parseFloat(tax_central) + parseFloat(tax_state) + parseFloat(extra_container);
	    extra_total = Math.round(extra_total);
            

            var cart = {
                "cartTotal": sub_total,
                "cartExtra": extra_total,
                "cartCoupon": coupon_applied,
                "cartDiscount": $scope.couponDiscount,
                "items": info
            };
            

            if(localStorage.getItem("pickupOutlet")){
              $scope.selectedPickup = localStorage.getItem("pickupOutlet");
            }
            else{
              $scope.selectedPickup = JSON.parse(localStorage.getItem("outletInfo")).outlet;
            }

            var data = {};
            data.token = JSON.parse($cookies.get("user")).token;
            data.cart = cart;
            data.address = checkoutAddress;
            data.outlet = $scope.selectedPickup;
            data.comments = comments.comments;
            data.location = JSON.parse(localStorage.getItem("location")).locationCode;
            data.modeOfPayment = $scope.isCOD ? "COD":"PRE";
            data.isTakeAway = $scope.isTakeAway;
            data.platform = "WEB";


	    $('#loading').show();
	    
            $http({
              method  : 'POST',
              url     : 'https://accelerateengine.app/foodengine/services/createorderweb.php',
              data    : data,
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}
             })
              .then(function(response) {
              	$('#loading').hide();
                if(response.data.status){

                  $scope.isPaymentPending = true;
                  $scope.pendingOrder = response.data.orderid;

                  localStorage.removeItem("pickupOutlet");

                  if($scope.isCOD){
                    localStorage.removeItem("itemsInfo");
                    localStorage.setItem("displayOrder", response.data.orderid);
                    window.location="orderdetails.html";
                  }
                  else{
                    document.getElementById("orderAlert").innerHTML = "";
                    //Online Payment
                    var temp_user = JSON.parse($cookies.get("user"));
                    var options = {
                        "key": $scope.paymentKey,
                        "order_id": response.data.reference,
                        "amount": response.data.amount*100,
                        "name": "Mirchapur",
                        "description": "Payment for Online Order",
                        "image": "https://accelerateengine.app/foodengine/services/images/razor_icon.png",
                        "handler": function (payment_response){

                            var data = {};
                            data.token = JSON.parse($cookies.get("user")).token;
                            data.orderID = response.data.orderid;
                            data.transactionID = payment_response.razorpay_payment_id;
                            data.razorpay_order_id = payment_response.razorpay_order_id;
                            data.razorpay_signature = payment_response.razorpay_signature;
			    
			    var attemptsCount = 1;		    
			    processPayment();
			    
			    function processPayment(){
			    
				    $('#loadingPayment').modal('show');
				    var timeLeft = 20;
				    var mytimer = setInterval(function() {
				    	timeLeft--;
				    	document.getElementById("paymentTimer").innerHTML = timeLeft+" Seconds";
				    	if(timeLeft == 0)
				    	{
				    		clearInterval(mytimer);
				    		document.getElementById("paymentTimer").innerHTML = "Failed. Retrying...";
				    		setTimeout(function(){
				    			attemptsCount++;
				    			if(attemptsCount == 5){
				    				document.getElementById("paymentTimer").innerHTML = "Failed. Order was not Placed.";
				    				document.getElementById("paymentNote").innerHTML = "Create a REFUND REQUEST from Help menu Or contact hello@foodbaxa.com with Reference ID ("+data.transactionID+") for refunding the debited amount.";
				    				document.getElementById("paymentWarn").innerHTML = "";
				    				document.getElementById("loadingDot").style.visibility = 'hidden';
				    			}
				    			else{
				    				processPayment();
				    			}
				    		}, 2000);
				    	}
				    }, 1000);
			    
			    
	                            $http({
	                              method  : 'POST',
	                              url     : 'https://accelerateengine.app/foodengine/services/processpaymentweb.php',
	                              data    : data,
	                              headers : {'Content-Type': 'application/x-www-form-urlencoded'},
	                              timeout : 18000
	                             })
	                              .then(function(response) {
		                        clearInterval(mytimer);
		                        console.log(response.data);
	                              	$('#loadingPayment').modal('hide');
	                                if(response.data.status){
	                                  $scope.isPaymentPending = false;
	                                  localStorage.removeItem("itemsInfo");
	                                  localStorage.setItem("displayOrder", response.data.orderid);
	                                  window.location="orderdetails.html";
	                                }
	                                else{
	                                  $scope.isPaymentPending = true;
	                                  
	                                  alert('Error: '+response.data.error);
	                                }
	                              });
			  }
                        },
                        "prefill": {
                            "name": temp_user.name,
                            "contact": temp_user.mobile,
                            "email": temp_user.email
                        },
                        "notes": {
                            "Mirchapur Order ID": response.data.orderid
                        },
                        "theme": {
                            "color": "#e74c3c"
                        }
                    };
                    var rzp1 = new Razorpay(options);
                    rzp1.open();
                    e.preventDefault();
                  }
                }
                else{
                  document.getElementById("orderAlert").innerHTML = response.data.error;
                }
              });
            }
        }


    }]);
