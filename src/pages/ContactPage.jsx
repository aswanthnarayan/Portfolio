import React from "react";

function ContactPage() {
  return (
    <div id="contact" className="h-auto flex flex-col p-5 w-full md:p-6 md:h-screen md:flex-row md:items-center ">
      <div className="my-5 md:w-1/2 md:my-0">
        <div className="flex flex-col gap-4 ">
          <h1 className="first-letter:text-[#FFA500] text-[70px] leading-[70px] lg:text-[100px] lg:leading-[88px]" >
            Let’s work together
          </h1>
          <div>
            <h2 className="text-[#FFA500]">Mail</h2>
            <span className="text-xl break-words">
              aswanthnarayanan@gmail.com
            </span>
          </div>
          <div>
            <h2 className="text-[#FFA500]">Address</h2>
            <p className="text-xl line-clamp-3 break-words">
              Kunnichal House, Muzhappala, Kannur, Kerala, pin:670611
            </p>
          </div>
          <div>
            <h2 className="text-[#FFA500]">Phone</h2>
            <span className=" text-xl break-words">+918592837949</span>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 px-0 md:px-5 lg:px-12">
        {/* flex flex-col w-full */}
        <form className="flex flex-col gap-3 md:gap-6">
          {/* flex flex-col gap-3  */}
          <input
            className="bg-transparent border p-2 "
            type="email"
            required
            placeholder="Email"
            name="email"
          />
          <input
            className="bg-transparent border p-2 "
            type="text"
            required
            placeholder="Name"
            name="name"
          />
          <textarea
            className="bg-transparent border p-2  "
            rows={8}
            placeholder="Message"
            name="message"
          />
          <button className="bg-[#FFA500] mb-3 py-2 rounded-md ">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
