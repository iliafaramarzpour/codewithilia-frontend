import type { NextPage } from "next";
import React from "react";
import Advice from "@/components/pages/main/advice";
import GetInTouch from "@/components/pages/main/get-in-touch";
import Layout from "@/components/layout/Layout";
import Introduction from "@/components/pages/main/introduction";
import Projects from "@/components/pages/main/projects";
import Workflow from "@/components/pages/main/workflow";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Introduction />
        <Workflow />
        {/* <Projects /> */}
        <Advice />
        {/* <GetInTouch /> */}
      </Layout>
    </>
  );
};

export default Home;
