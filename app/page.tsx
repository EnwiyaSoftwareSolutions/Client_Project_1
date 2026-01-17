import Image from "next/image";

export default function Home() {
  return (
    <div 
    className="flex min-h-screen items-center justify-center  font-sans bg-[#0000007a]"
    >
      <div className="flex-2 border-2 border-white/20 pr-10 h-[100vh] flex flex-col justify-center">
        this is container 1
      </div>
      <div className="flex-1 border-2 border-white/20 pr-10 h-[100vh] flex flex-col justify-center">
            <div>
        this is container 1
      </div>
        <div>
        this is container 1
      </div>
        
      </div>
     
    </div>
  );
}
