const komalSelector = document.querySelector('#user1Chat');
const robinSelector = document.querySelector('#user2Chat');
const chat_header = document.querySelector('#chat_header');
const user_Messages = document.querySelector('#user_Messages');
const input_message = document.querySelector('#input_message');
const input_text= document.querySelector('#text_msg');
const clear_chatBtn = document.querySelector('#clear_chat');

         let messageSender = 'Komal';
         const updateSender = (name) =>{
            messageSender = name ;
            chat_header.innerHTML = `${messageSender} messaging......`;
            input_text.placeholder = `Type here, ${messageSender}.....`;
               
             if (name == 'Komal') {
                komalSelector.classList.add('active-person');
                robinSelector.classList.remove('active-person');
             }
             if (name == 'Robin') {
                robinSelector.classList.add('active-person');
                komalSelector.classList.remove('active-person');
             }
             input_text.focus();
         }
         komalSelector.onclick = () =>updateSender('Komal');
         robinSelector.onclick = () =>updateSender('Robin');
         const user_MessagesElement = (message) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.classList.add(messageSender == 'Komal' ? 'komal-message' : 'robin-message');
            messageElement.innerHTML = `
            <div class= "message-sender">${messageSender}</div>
            <div class= "message-text">${message.text}</div>
            <div class= "message-timeStamp">${message.timeStamp}</div>
            `;
            return messageElement;
         }
         const sendMessage =(e) => {
            e.preventDefault();

                 const timeStamp = new Date().toLocaleString('en-IN' , {hour: 'numeric',minute:'numeric', hour12:true});
                 const message = {
                    sender: messageSender,
                    text: input_text.value,
                    timeStamp,
                 };
                  let messages = JSON.parse(localStorage.getItem('messages')) || [];
                  messages.push(message);
                  localStorage.setItem('messages', JSON.stringify(messages));

                  const messageElement = user_MessagesElement(message);
                   user_Messages.appendChild(messageElement);
                   input_text.value = '' ;
                   user_Messages.scrollTop = user_Messages.scrollHeight;
         };

                 input_message.addEventListener('submit' , sendMessage)
                 // Add this code to your existing JavaScript (chat.js) file or inline script

const clearChat = () => {
    const userMessages = document.querySelector('#user_Messages');
    userMessages.innerHTML = ''; // Clear all messages from the chat container
    localStorage.removeItem('messages'); // Clear messages from local storage
  };
  
  const clearChatBtn = document.querySelector('#clear_chat');
  clearChatBtn.addEventListener('click', clearChat);
  