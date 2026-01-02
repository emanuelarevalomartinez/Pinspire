import { HomeSectionFour } from "@/modules/home/HomeSectionFour";
import { HomeSectionOne } from "@/modules/home/HomeSectionOne";
import { HomeSectionThree } from "@/modules/home/HomeSectionThree";
import { HomeSectionTwo } from "@/modules/home/HomeSectionTwo";


export default function Home() {
  return (
     <>
       <div className="flex flex-col">
         <HomeSectionOne/>
         <HomeSectionTwo/>
         <HomeSectionThree/>
         <HomeSectionFour/>
       </div>
     </>
  );
}
