import React from "react";

function ContactPage() {
  return (
    <div id="contact" className="h-screen flex items-center ">
      <div className="w-1/2 flex flex-col items-center">
        <div className="w">
          <h1 className="text-[100px]">Let’s work together</h1>
          <div>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
          </div>
          <div>
          <h2>Address</h2>
          <span>Hello street New York</span>
          </div>
         <div>
         <h2>Phone</h2>
          <span>+1 234 5678</span>
         </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <form className="flex flex-col">
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
