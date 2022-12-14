import React from 'react';
import './App.css';
import Final from "./Final";

/*
Instruction: Write a simply chat using React and css. Iframe is added as a final result Points to do:
0. Data is included data.json file
1. Modify the data in component and display the messages. Show the author and content of message. Messages should be sorted by date
2. Add the functionality of adding messages to the chat
3. Use style.css to style chat. Additional. You can use random colors
4. Possible to scroll only content in chat
5. Send message using `Enter` key
6. Clear message after send
7. After send message scroll chat to the last message
8. If 2 or more messages are consecutive, hide the author
9. Your own messages should appear on the right. Rest on the left
*/

function App() {
  return (
      <>
        <div>
          <h1>Chat</h1>
          <div>Message 1</div>
          <div>Message 2</div>
          <input type="text" />
        </div>
        <Final />
      </>
  );
}

export default App;
