function rosieTheFortuneTeller (){
  var tellMeYourName = prompt('Hi, dear! My name is Rosie and I am an expert fortune teller. What is your name?');
  var giftOfChoice= prompt('Yes, I have seen that you would come to me,'+ tellMeYourName+'. Now please, choose one from the following and type it in the box: turtle, rose, teacup, moon.');
  alert('Hmm...'+ giftOfChoice+'. Excellent choice. Let us see what your future holds. Hit OK.');
    if (giftOfChoice =='turtle'){
      alert('Here is your fortune: Don\'t panic.');
      return;
    }else if (giftOfChoice =='rose'){
      alert('You will find a thing. It may be important.');
      return;
    } else if (giftOfChoice =='teacup'){
      alert('Here is your fortune: The end is near, might as well have dessert.');
      return;
    }else if (giftOfChoice =='moon'){
      alert('Look before you leap. Or wear a parachute.');
      return;
    }else{
     alert('I am sorry,'+tellMeYourName +'. I do not think I understand you correctly. Are you sure you typed in one of the offered possibilities?');
    }
  return;
};

rosieTheFortuneTeller ();
