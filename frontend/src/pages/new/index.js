import * as React from "react";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Questions from "../../components/gotQuestions";
import SundayCelebBarNew from "../../components/page-new/sundayCelebBarNew";
import Banner from "../../components/shared/banner";
const NewcomersPage = () => (
  <Layout>
    <Banner bgImage="bg-center bg-new">I&apos;m New</Banner>
    <div>Welcome section</div>
    <SundayCelebBarNew />
    <div>Life Stages</div>
    <div className="pl-[21px] pr-[11px] lg:px-4 w-full flex justify-center">
      <Questions />
    </div>
  </Layout>
);

export const Head = () => <Seo title="I'm New" />;

export default NewcomersPage;
