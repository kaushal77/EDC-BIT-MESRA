//jQuery time
(function($) {
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50) + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale(' + scale + ')'
        });
        next_fs.css({
          'left': left,
          'opacity': opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });

  $(".previous").click(function() {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = ((1 - now) * 50) + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'left': left
        });
        previous_fs.css({
          'transform': 'scale(' + scale + ')',
          'opacity': opacity
        });
      },
      duration: 800,
      complete: function() {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });

})(jQuery);




function collegeSelect(){
  if($("#collegeName").val()=="Others"){
    $("#otherCollege").show();
  }
  else{
    $("#otherCollege").hide();
  }
}

function validate(){
  var error = 0;
  var name = $('#name').val();
  var email = $('#email').val();
  var phoneNumber = $("#phoneNumber").val();
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if(name==""){
    error = 1;
    $("#name").css({"border":"2px solid red"});
    alert("Name must be filled out.");
    return false;
  }
  else{
    $("#name").css({"border":""});
  }

  if(email=="" || re.test(email)==false){
    error = 1;
    $("#email").css({"border":"2px solid red"});
    alert("Invalid E-Mail Id.");
    return false;
  }
  else{
    $("#email").css("border","");
  }

  if(phoneNumber=="" || isNaN(phoneNumber) || phoneNumber.length!=10){
    error = 1;
    $("#phoneNumber").css({"border":"2px solid red"});
    alert("Invalid Phone Number.");
    return false;
  }
  else{
    $("#phoneNumber").css("border","");
  }

  var gender = $('#gender').val();
  var year = $('#year').val();
  var rollNumber = $('#rollNumber').val();
  var city = $('#city').val();
  var state = $("#state").val();
  var collegeName = $("#collegeName").val();
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(gender!="Male" && gender!="Female" && gender!="Others"){
    error = 1;
    $("#gender").css({"border":"2px solid red"});
    alert("Gender is not selected.");
    return false;
  }
  else{
    $("#gender").css({"border":""});
  }


  if(year!="0" && year!="1" && year!="2" && year!="3" && year!="4" && year!="5"){
    error = 1;
    $("#year").css({"border":"2px solid red"});
    alert("Year of study is not selected.");
    return false;
  }
  else{
    $("#year").css({"border":""});
  }

  if(state==""){
    error = 1;
    $("#state").css({"border":"2px solid red"});
    alert("State is not selected.");
    return false;
  }
  else{
    $("#state").css({"border":""});
  }

  if(city==""){
    error = 1;
    $("#city").css({"border":"2px solid red"});
    alert("City must be filled out.");
    return false;
  }
  else{
    $("#city").css({"border":""});
  }

  if(rollNumber==""){
    error = 1;
    $("#rollNumber").css({"border":"2px solid red"});
    alert("Roll Number must be filled out.");
    return false;
  }
  else{
    $("#rollNumber").css({"border":""});
  }


  if(collegeName=="Others"){
    collegeName = $("#otherCollegeField").val();
    if(collegeName==""){
      error = 1;
      $("#otherCollegeField").css({"border":"2px solid red"});
      alert("College Name must be filled out.");
      return false;
    }
    else{
      $("#otherCollegeField").css({"border":""});
    }
  }
  else{
    if(collegeName==""){
      error = 1;
      $("#collegeName").css({"border":"2px solid red"});
      alert("College is not selected.");
      return false;
    }
    else{
      $("#collegeName").css({"border":""});
    }
  }

  var finalRegister = {
    'name': name,
    'email': email,
    'phoneNumber': phoneNumber,
    'gender': gender,
    'year': year,
    'rollNumber': rollNumber,
    'city': city,
    'state': state,
    'collegeName': collegeName
  }
}