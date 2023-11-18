import Link from 'next/link';
import Navbar from "@/components/navibar"
import Header from "@/components/header"
import LeftSidebar from "@/components/left-sideber"
import RightSidebar from "@/components/right-sidebar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center p-2 m-2">
        <Header />
      </div>
      <div className="flex flex-col sm:flex-row p-2 m-2">
        <div className="w-full sm:w-1/2 p-2 m-2">
          <LeftSidebar />
        </div>        
        <div className="w-full sm:w-1/2 p-2 m-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
