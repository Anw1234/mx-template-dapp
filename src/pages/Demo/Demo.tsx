import Hero from "../../components/Layout/Hero/Hero";
import Mission from "../../components/Layout/Mission/Mission";
import Problems from "../../components/Layout/Problems/Problems";
import ImpactTracker from "../../components/Layout/ImpactTracker/ImpactTracker";
import Team from "../../components/Layout/Team/Team";

export function Demo() {
  return (
    <>
    <div className="flex flex-col w-full min-w-full">
    <Hero />
    <Mission />
    <Problems />
    <ImpactTracker />
    <Team />
    </div>
    </>
  );
}
