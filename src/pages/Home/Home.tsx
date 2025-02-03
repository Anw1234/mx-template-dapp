import { AuthRedirectWrapper, PageWrapper } from 'wrappers';
import Hero from "../../components/Layout/Hero/Hero";
import Mission from "../../components/Layout/Mission/Mission";
import Problems from "../../components/Layout/Problems/Problems";
import ImpactTracker from "../../components/Layout/ImpactTracker/ImpactTracker";
import Team from "../../components/Layout/Team/Team";

export const Home = () => {
  return (
    <AuthRedirectWrapper requireAuth={false}>
      <PageWrapper>
        <div className="flex flex-col w-full min-w-full">
          <Hero />
          <Mission />
          <Problems />
          <ImpactTracker />
          <Team />
        </div>
      </PageWrapper>
    </AuthRedirectWrapper>
  );
};