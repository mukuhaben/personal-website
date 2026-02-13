
import { RoleProvider } from "@/sections/RoleContext";
import Hero from "@/sections/Hero";
//import Overview from "@/sections/Overview";
import RelevantWorkSection from "@/sections/RelevantWorkSection";

export default function Home() {
  return (
    <RoleProvider>
     
      <Hero /> 
      <RelevantWorkSection />
      </RoleProvider>
  );
}



/*import FadeIn from "@/components/FadeIn";

import { RoleProvider } from "@/sections/RoleContext";
import Hero from "@/sections/Hero";
import Overview from "@/sections/Overview";
import RoleSwitcher from "@/sections/RoleSwitcher";
import RelevantWorkSection from "@/sections/RelevantWorkSection";


export default function Home() {
  return (
    <RoleProvider>
      <FadeIn>
        <Hero />
      </FadeIn>

      <Overview />

      <FadeIn delay={0.1}>
        <RoleSwitcher />
      </FadeIn>

      <RelevantWorkSection />
    
    </RoleProvider>
  );
}*/
