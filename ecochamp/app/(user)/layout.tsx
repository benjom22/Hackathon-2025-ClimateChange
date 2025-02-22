import Navbar from "@/components/layout/Navbar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div
        className='flex bg-earthGreen-100'
        >
            <Navbar/>
            <div className="px-5 pb-7 pt-[calc(64px+1.25rem)] md:p-10 w-full">
                {children}
            </div>
        </div>
    )
  }