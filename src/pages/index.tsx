import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import News from "@/components/sections/News";
import Research from "@/components/sections/Research";
import ExtracurricularActivities from "@/components/sections/ExtracurricularActivities";
// import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import GitHubProfile from "@/components/sections/GitHubProfile";
import Contact from "@/components/sections/Contact";
import {
  personalInfo,
  education,
  // publications,
  projects,
  skills,
  news,
  research,
  experience,
  extracurricularActivities,
  cvUrl,
} from "@/data";

export default function Home() {
  return (
    <Layout info={personalInfo} cvUrl={cvUrl}>
      <Hero info={personalInfo} />
      <Projects projects={projects} />
      <News news={news} />
      <Research research={research} />
      <ExtracurricularActivities activities={extracurricularActivities} />
      {/* <Publications publications={publications} /> */}
      <Education education={education} experience={experience} />
      <Skills skills={skills} />
      <GitHubProfile />
      <Contact info={personalInfo} />
    </Layout>
  );
}
