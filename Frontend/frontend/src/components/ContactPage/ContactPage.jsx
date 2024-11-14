import React from 'react';
import './ContactPage.css'
import * as PropTypes from "prop-types";

function ContactForm(props) {
    return null;
}

ContactForm.propTypes = {handleSubmit: PropTypes.func};

function Contact(){
    return( <body>
        <div className="container2">
            <h1>Contact us:</h1>
            <p>Contact us with the following methods</p>
            <p>Email: info@porschedrive.us.</p>
            <p>Phone: (888) 369-9904</p>
            <p>Or send us a message</p>
             {/*<ContactForm handleSubmit={handleSubmit} />*/}
        </div>
        </body>
    );
}

// function MessageSection({handleSubmit}){
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <Name />
//                 <Email />
//                 <Message />
//                 <button type="submit">Submit</button>
//             </form>
//
//         </div>
//
//     );
// }
//
// function Name(){
//     return(
//         <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name" />
//         </div>
//     );
//
// }
//
//  function Email() {
//      return (
//          <div>
//              <label htmlFor="email">Email:</label>
//              <input type="email" id="email" name="email" />
//          </div>
//      );
//  }
//
// function Message(){
//     return(
//         <div>
//             <label htmlFor="message">Message:</label>
//             <textarea id="name" name="name" rows="5" ></textarea>
//         </div>
//     );
//
// }
//
// function handleSubmit(event){
//     event.preventDefault();
//
//     const Data = new FormData(event.target)
//     const name = Data.get('name')
//     const email = Data.get('email')
//     const message = Data.get('message')
//
//     if(!message || !name || !email){
//         alert("Make sure to fill all the parts!!")
//         return
//     }
//
//     const fullData= {name,email,message}
//     alert("Message sent successfully")
//     console.log("you got a new message", fullData)
// }

export default Contact;
