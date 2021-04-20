// JavaScript source code

const socket = io()

const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const Name = document.querySelector('.chat-name')


chat.addEventListener('submit', event => {
  event.preventDefault()
  console.log(Input.value + "/"+ Name.value)
  const full = Name.value + "/"+ Input.value
    console.log(full);

  socket.emit('chat', full)
    //socket.emit('chats',  Name.Value)

  Input.value = ''
  Name.value = ''
})


