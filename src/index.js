window.onload = function () {
  "use strict";
  let user1_msg = document.querySelector('div.messages.user1');//tree of user1 messages
  let user2_msg = document.querySelector('div.messages.user2');//tree of user2 messages


  //send handler
  let sending = (e) =>{
    //figure out which user wrote
    let user = e.target.className.split(' ')[1];

    //find current textarea
    let textarea = document.querySelector(`textarea#${user}-newMessage`);

    if(textarea.value){
      let newMessageForActive = document.createElement('div');
      newMessageForActive.innerHTML = textarea.value;
      newMessageForActive.className = 'message user2'; //for correct color

      let newMessageForPassive = document.createElement('div');
      newMessageForPassive.innerHTML = textarea.value;
      newMessageForPassive.className = 'message user1';
      if(textarea.id === 'user1-newMessage'){
        user1_msg.appendChild(newMessageForActive);
        user2_msg.appendChild(newMessageForPassive);
      }
      else{
        user2_msg.appendChild(newMessageForActive);
        user1_msg.appendChild(newMessageForPassive);
      }

      //reset user input
      textarea.value = null;
    }
  };

  //create listeners for send-buttons
  let btnSend = document.querySelectorAll('.btn');
  for(let btn of btnSend){
    btn.addEventListener('click', sending);
  };

  //create listeners for Enter key
  let textareas = document.querySelectorAll('textarea');
  for(let area of textareas){
    console.log(area);
    area.addEventListener('keyup',(e)=>{
      if (e.key === 'Enter') {
        console.log(e);
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        let user = e.path[0].id.slice(0,5);
        document.querySelector(`.btn.${user}`).click();
      }
    })
  };
};

