
export function RandomProfile() {

    return (
        <div className="flex pt-14 mx-auto max-w-screen-lg gap-5">
        
        <section style={{width: 636 + "px"}}> 
            {/* Biographical*/}
            <section id="bio" className="relative border-1 rounded-lg">
                {/* Background */}
                <div className="" style={{height: 159 + "px"}}>
                    <img src={`${process.env.PUBLIC_URL}/nature.jpg`} alt="Background Picture" width="639px" className="h-full rounded-t-lg z-1 " />
                </div>

                {/* PFP */}
                <div className="absolute top-[30px] left-[30px] ">
                    <img src="https://thispersondoesnotexist.com/" alt="Profile Picture" width="160px" height="160px" className=" border-white border-2 rounded-full " />
                </div>
                <div className="bg-white pb-4 px-4 pt-9 grid grid-cols-5 grid-flow-row z-1 rounded-b-lg" style={{minHeight : 159 + "px"}}>

                    {/* Text bio */}
                    <div className="col-span-3">
                        <h1 className="text-2xl font-semibold">First, Last</h1>
                        <h4>Position @ Company</h4>
                        <span className="text-gray-400 text-sm">City, State, United States </span> <span>&#x2022;</span> <span className="text-sm font-semibold text-blue-700">Contact Info</span> 
                        <br />
                        <span className="text-gray-400 text-sm font-semibold"> 79 connections</span>
                        <br />
                        <button className="rounded-full bg-blue-500 text-white px-4 py-1 font-semibold text-sm mx-1">Connect</button> <button className="rounded-full bg-white px-4 py-1 font-semibold text-sm text-blue-500 border-2 border-blue-500 mr-1">Message</button> <button className="rounded-full bg-white px-4 py-1 font-semibold text-sm text-gray-400 border-2 border-gray-400">More</button>
                    </div>
                    {/* University */}
                    <div className="col-span-2">
                            {/* Company */}
                            <div className="flex mb-2">
                                <img src="https://media.licdn.com/dms/image/D4E0BAQGnx8Wcpyrh1w/company-logo_100_100/0/1685625301575?e=1694649600&v=beta&t=qnTtKGyplt_Fh2Gq-fzVZbWKZ-HRB4bE_u3sdOCC3BY" alt="" width="32px" height="32px" className="inline self-center mr-2" /><span className="font-semibold text-sm my-auto">Memorial Sloan Kettering Cancer Center </span>
                            </div>
                            {/* University */}
                            <div className="flex">
                                <img src="https://media.licdn.com/dms/image/C560BAQG4ZBcPGQK47Q/company-logo_100_100/0/1519856404339?e=1694649600&v=beta&t=azt2juivIlDQb2kmrbacTs999CSP4lBNkh2TLBwZ2mg" alt="" width="32px" height="32px" className="inline self-center mr-2" /><span className="font-semibold text-sm my-auto">Hunter College</span>
                            </div>
                    </div>
                </div>                        

            </section>
            {/* Activities */}
            <section id="Activity" className="mt-2 border-1">
                <div className="px-4 pt-4 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Activity</h1>
                    <span className="text-gray-400 text-sm font-semibold"> 79 connections</span>

                    {/*Comments tbd */}
                    <div className="">
                        <div className="py-2">
                            <span className="text-gray-400 text-sm font-semibold"> Name commented on a post &#x2022; 5d</span> 
                            <br />
                            <span className="t-black text-sm"> Oh boy I sure do love being a linkdiner! </span>
                        </div>
                        <hr />
                    </div>
                    <div className="">
                        <div className="py-2">
                            <span className="text-gray-400 text-sm font-semibold">Name commented on a post &#x2022; 12d</span> 
                            <br />
                            <span className="t-black text-sm"> Oh boy I sure do love being a linkdinerrr! </span>
                        </div>
                        <hr />
                    </div>

                    {/* Show all comments */}
                    <div className="py-2 hover:bg-gray-100">
                        <h3 className=" text-center text-gray-400 text-md font-semibold">Show all comments</h3>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" className="mt-2 border-1">
                {/*Individual Cards */}
                <div className="p-4 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Experience</h1> 

                    {/* Each item in the list */}
                    <div className="flex my-3 gap-2">
                        <div>
                            <img src="https://media.licdn.com/dms/image/D4E0BAQGnx8Wcpyrh1w/company-logo_100_100/0/1685625301575?e=1694649600&v=beta&t=qnTtKGyplt_Fh2Gq-fzVZbWKZ-HRB4bE_u3sdOCC3BY" alt="Profile Picture" width="48px" height="48px" className=" border-white border-2 self-center" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold t-black">Software Engineering Intern</h2>
                            <span className="text-sm t-black">Company &#x2022; Full-Time</span>
                            <br />
                            <span className="text-sm text-gray-400">Jan 2021 - Jan 2023 &#x2022; 2 yrs</span>
                            <br />
                            <span className="text-sm text-gray-400">Rio De Janerio, Brazil &#x2022; Remote</span>
                            <br />
                            <span className="text-sm t-black">
                                ● Participated in a 4-week intensive computer science summer program for high-achieving students
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex my-3 gap-2">
                        <div>
                            <img src="https://media.licdn.com/dms/image/D4E0BAQGnx8Wcpyrh1w/company-logo_100_100/0/1685625301575?e=1694649600&v=beta&t=qnTtKGyplt_Fh2Gq-fzVZbWKZ-HRB4bE_u3sdOCC3BY" alt="Profile Picture" width="48px" height="48px" className=" border-white border-2 self-center" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold t-black">Software Engineering Intern</h2>
                            <span className="text-sm t-black">Company &#x2022; Full-Time</span>
                            <br />
                            <span className="text-sm text-gray-400">Jan 2021 - Jan 2023 &#x2022; 2 yrs</span>
                            <br />
                            <span className="text-sm text-gray-400">Rio De Janerio, Brazil &#x2022; Remote</span>
                            <br />
                            <span className="text-sm t-black">
                                ● Participated in a 4-week intensive computer science summer program for high-achieving students
                            </span>
                        </div>
                    </div>

                </div>

            </section>

            {/* Education Div */}
            <section id="Education" className="mt-2 border-1">
                
                <div className="p-4 bg-white rounded-md">
                    <h1 className="text-xl font-semibold">Education</h1> 

                    <div className="flex my-3 gap-2">
                        <div>
                            <img src="https://media.licdn.com/dms/image/C4D0BAQEA8ZDkSlc1Gw/company-logo_100_100/0/1647282489256?e=1695859200&v=beta&t=rx9ecJ2KKlhfcYqkxnJs4TrP6fNMJ465DkadeFYG-9c" alt="Profile Picture" width="48px" height="48px" className=" border-white border-2 self-center" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold t-black">City College</h2>
                            <span className="text-sm t-black">Bachelors, Computer Science</span>
                            <br />
                            <span className="text-sm text-gray-400">Jan 2021 - Jan 2023</span>
                            <br />
                            <span className="text-sm text-gray-400">Rio De Janerio, Brazil</span>
                            <br />
                            <span className="text-sm t-black">
                                ● Studied Computer Science blah
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex my-3 gap-2">
                        <div>
                            <img src="https://media.licdn.com/dms/image/C4D0BAQEA8ZDkSlc1Gw/company-logo_100_100/0/1647282489256?e=1695859200&v=beta&t=rx9ecJ2KKlhfcYqkxnJs4TrP6fNMJ465DkadeFYG-9c" alt="Profile Picture" width="48px" height="48px" className=" border-white border-2 self-center" />
                        </div>
                        <div>
                            <h2 className="text-md font-semibold t-black">City College</h2>
                            <span className="text-sm t-black">Bachelors, Computer Science</span>
                            <br/>
                            <span className="text-sm text-gray-400">Jan 2021 - Jan 2023</span>
                            <br/>
                            <span className="text-sm text-gray-400">Rio De Janerio, Brazil</span>
                            <br/>
                            <span className="text-sm t-black">
                                ● Studied Computer Science blah
                            </span>
                        </div>
                    </div>

                </div>

            </section>



        </section>

        
        {/* Friends List */}
        <div> 
            <section id="friendsList" className=" bg-white rounded-lg border-1 p-3 " style={{width: 300 + "px"}}>
                <h3 className=" font-semibold text-md ">People you may know</h3>
                {/* User card */}
                <div className="flex gap-2 my-3">
                    <div>
                        <img src="https://thispersondoesnotexist.com/" alt="Profile Picture" width="52px" height="52px" className=" border-white border-2 rounded-full self-center" />
                    </div>
                    <div className="">
                        <span className="text-sm font-semibold">Patrick Ging</span>  <span>&#x2022;</span> <span className="text-sm text-gray-400">1st</span>
                        <br />
                        <span className="text-sm">Software Engineering Intern at Google</span> 
                        <br />                            
                        <button className="mt-1 rounded-full bg-white px-4 py-1 font-semibold text-sm text-gray-400 border-2 border-gray-400">Connect</button>
                    </div>
                </div>

                <hr />                    

                <div className="flex gap-2 my-3">
                    <div>
                        <img src="https://thispersondoesnotexist.com/" alt="Profile Picture" width="52px" height="52px" className=" border-white border-2 rounded-full self-center" />
                    </div>
                    <div className="">
                        <span className="text-sm font-semibold">Patrick Ging</span>  <span>&#x2022;</span> <span className="text-sm text-gray-400">1st</span>
                        <br />
                        <span className="text-sm">Software Engineering Intern at Google</span> 
                        <br />                            
                        <button className="mt-1 rounded-full bg-white px-4 py-1 font-semibold text-sm text-gray-400 border-2 border-gray-400">Connect</button>
                    </div>
                </div>

                <hr />      

                <div className="flex gap-2 my-3">
                    <div>
                        <img src="https://thispersondoesnotexist.com/" alt="Profile Picture" width="52px" height="52px" className=" border-white border-2 rounded-full self-center" />
                    </div>
                    <div className="">
                        <span className="text-sm font-semibold">Patrick Ging</span>  <span>&#x2022;</span> <span className="text-sm text-gray-400">1st</span>
                        <br />
                        <span className="text-sm">Software Engineering Intern at Google</span> 
                        <br />                            
                        <button className="mt-1 rounded-full bg-white px-4 py-1 font-semibold text-sm text-gray-400 border-2 border-gray-400">Connect</button>
                    </div>
                </div>

                <hr />      

            </section>

        </div>  

    </div>

    );
}