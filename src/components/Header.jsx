/*
    Header.jsx

    Holds the header component (static component)
*/
export function Header() {
    return (
        <section id="navbar" className="bg-white px-2 py-1 border-b-2">
            {/*  Grid inside the nav */ }
            <div className="mx-auto max-w-screen-lg grid grid-flow-col">
                <div className="flex md:gap-2">
                    {/* LinkedIn Logo */}
                    <div className="my-auto">
                        <img src={`${process.env.PUBLIC_URL}/LinkedIn.png`} className="rounded-lg" alt="LinkedIn" height="36px" width="36px" />
                    </div>

                    {/*<!-- Search Bar & Search Icon -->*/}
                    <div className="">
                        <div className="hidden md:block  text-gray-600">

                            <form className="flex items-center ">   
                                <label for="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full ">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className=" bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                                </div>
                            </form>
                        </div>

                        {/*<!-- Search Icon Present--> */}
                        <div className="flex-col w-20 text-center my-2 md:hidden">
                            <div className=""> 
                                <svg xmlns="http://www.w3.org/2000/svg" className=" mx-auto icon icon-tabler icon-tabler-search" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
 

                {/* More icons */}
                <div className="flex">
                    <div className="flex border-r-2">
                        {/* Home */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 50 50">
                                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                            </svg>
                            <span className="hidden text-xs t-black m-auto md:block">Home</span>
                        </div>

                        {/* More */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-users" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                            </svg>
                            <span className="hidden text-xs t-black m-auto md:block">My Network</span>
                        </div>

                        {/* Jobs */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-briefcase" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                                <path d="M12 12l0 .01" />
                                <path d="M3 13a20 20 0 0 0 18 0" />
                            </svg>
                            <span className="hidden text-xs t-black m-auto md:block">Jobs</span>
                        </div>

                        {/* Jobs */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-message-2" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
                            </svg>
                            <span className="hidden text-xs t-black m-auto md:block">Messaging</span>
                        </div>

                        {/* Notificationsa */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto icon icon-tabler icon-tabler-bell" width="24px" height="24px" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                            </svg>
                            <span className="hidden text-xs t-black m-auto md:block">Notifications</span>
                        </div> 
                    </div>

                    <div className="flex"> {/* Misc */}
                        <div className="my-2 flex-col w-20 text-center gap-0 md:my-0">
                            <img className="mx-auto" src={`${process.env.PUBLIC_URL}/9squares.svg`} alt="More Options" width="24px" height="24px" />
                            <span className="hidden text-xs t-black m-auto md:block">More</span>
                        </div>

                        {/* Mercilous self shill */}
                        <div className="my-auto flex-col w-20 text-center gap-0 ">
                            <span className=" block text-xs text-yellow-500 underline mx-auto">Support the developer!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>            
    );
}