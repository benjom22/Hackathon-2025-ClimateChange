"use client"
import Button from "@/components/ui/Button"

export default function Page() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Earn Points</h1>
                <div className="flex flex-col">
                    <p className="text-base text-forestGreen-500 font-medium">Use any of these ways to earn points.</p>
                    <span className="text-sm italic text-forestGreen-400">Hint: You can use all of them to be the best!</span>
                </div>
            </div>
            <div className="grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="flex items-center p-4 bg-white rounded-[1.25rem] gap-5 flex-1 basis-[300px] cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-[0_5px_35px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center justify-center bg-earthGreen-500 w-20 h-20 rounded-2xl">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7976 6.44366V4.13296C14.7976 3.56726 14.5728 3.02474 14.1728 2.62473C13.7728 2.22472 13.2303 2 12.6646 2H10.5316C9.96594 2 9.42342 2.22472 9.02341 2.62473C8.6234 3.02474 8.39868 3.56726 8.39868 4.13296V6.44366" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.0217 12.6748C20.636 10.8614 19.6393 9.23542 18.1984 8.06883C16.7574 6.90225 14.9596 6.26582 13.1056 6.26599H10.0896C7.9441 6.26599 5.88648 7.11829 4.36939 8.63538C2.85229 10.1525 2 12.2101 2 14.3556C2.00012 14.6385 2.11205 14.9099 2.31141 15.1107L3.37789 16.1771C3.47695 16.2761 3.55554 16.3935 3.60916 16.5229C3.66278 16.6522 3.69038 16.7908 3.69038 16.9308C3.69038 17.0708 3.66278 17.2094 3.60916 17.3387C3.55554 17.468 3.47695 17.5855 3.37789 17.6844L2.31141 18.7509C2.11205 18.9516 2.00012 19.2231 2 19.506V22.8874C2.00012 23.1703 2.11205 23.4417 2.31141 23.6425L3.37789 24.709C3.47695 24.8079 3.55554 24.9254 3.60916 25.0547C3.66278 25.184 3.69038 25.3226 3.69038 25.4626C3.69038 25.6026 3.66278 25.7412 3.60916 25.8705C3.55554 25.9999 3.47695 26.1173 3.37789 26.2163L2.31141 27.2827C2.11205 27.4835 2.00012 27.7549 2 28.0378V31.8615C2 32.4272 2.22472 32.9697 2.62473 33.3697C3.02474 33.7697 3.56726 33.9944 4.13296 33.9944H13.7298" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.69067 16.9308H15.8642" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.69067 25.4626H12.6647" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.2631 27.5956H16.9307V32.928" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M33.1653 28.642C32.6005 30.2926 31.5068 31.7106 30.0538 32.6761C28.6008 33.6415 26.8698 34.1005 25.1293 33.9817C23.3888 33.8629 21.7362 33.173 20.4279 32.0191C19.1196 30.8652 18.2286 29.3117 17.8933 27.5997" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.6619 23.3296H33.9943V17.9972" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.7595 22.2872C18.3243 20.6367 19.4181 19.2187 20.8711 18.2532C22.324 17.2878 24.055 16.8288 25.7955 16.9476C27.536 17.0664 29.1886 17.7563 30.4969 18.9102C31.8053 20.0641 32.6962 21.6176 33.0315 23.3295" stroke="white" strokeWidth="2.13296" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-forestGreen-500">Bottle<br></br>Recycling</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-[1.25rem] gap-5 flex-1 basis-[300px] cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-[0_5px_35px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center justify-center bg-earthGreen-500 w-20 h-20 rounded-2xl">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.8352 34C33.0399 34 34.0166 33.0233 34.0166 31.8186C34.0166 30.6139 33.0399 29.6372 31.8352 29.6372C30.6305 29.6372 29.6538 30.6139 29.6538 31.8186C29.6538 33.0233 30.6305 34 31.8352 34Z" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.19773 34C5.40246 34 6.37911 33.0233 6.37911 31.8186C6.37911 30.6139 5.40246 29.6372 4.19773 29.6372C2.99299 29.6372 2.01636 30.6139 2.01636 31.8186C2.01636 33.0233 2.99299 34 4.19773 34Z" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.33325 26.7783C2.16404 26.2991 3.10035 26.0328 4.05894 26.0026C5.01752 25.9726 5.9687 26.1798 6.82789 26.6059C7.68707 27.0321 8.42766 27.664 8.98379 28.4453C9.53993 29.2267 9.8944 30.1333 10.0157 31.0847H26.0575C26.1787 30.1333 26.5332 29.2267 27.0894 28.4453C27.6455 27.664 28.3861 27.0321 29.2452 26.6059C30.1044 26.1798 31.0557 25.9726 32.0142 26.0026C32.9729 26.0328 33.9091 26.2991 34.74 26.7783" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.9263 26.7282L25.1501 7.08997" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.9253 7.08997H29.6523" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.20386 27.2909H28.0526" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.64196 2L1.44213 10.3825C1.38559 10.449 1.34926 10.5303 1.33745 10.6167C1.32565 10.7032 1.33884 10.7912 1.37549 10.8704C1.41214 10.9496 1.47069 11.0166 1.54424 11.0635C1.61778 11.1105 1.70323 11.1354 1.79049 11.1353H4.98784V18.4436L12.1877 10.061C12.2442 9.99454 12.2806 9.91328 12.2924 9.82683C12.3042 9.74037 12.291 9.65236 12.2543 9.57317C12.2177 9.49399 12.1591 9.42696 12.0856 9.38001C12.012 9.33305 11.9266 9.30815 11.8393 9.30824H8.64196V2Z" stroke="white" strokeWidth="2.3759" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <span className="text-xl font-bold text-forestGreen-500">E-Scooter<br></br>Usage</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-[1.25rem] gap-5 flex-1 basis-[300px] cursor-pointer hover:-translate-y-1 transition-all duration-200 ease-in-out hover:shadow-[0_5px_35px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center justify-center bg-earthGreen-500 w-20 h-20 rounded-2xl">
                        <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.64425 2H26.5554C26.5554 2 29.3998 2 29.3998 4.84444V24.7556C29.3998 24.7556 29.3998 27.6 26.5554 27.6H6.64425C6.64425 27.6 3.7998 27.6 3.7998 24.7556V4.84444C3.7998 4.84444 3.7998 2 6.64425 2Z" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.7998 19.0667H29.3998" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.0665 27.6L1.6665 34" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25.1328 27.6L31.5328 34" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-forestGreen-500">Riding the<br></br>Tram</span>
                </div>
            </div>
        </div>
    )
}