// import Header from "./Header";
// import Footer from "./Footer";
import { AnalyticsProvider, AnalyticsScopeProvider } from "@yext/pages-components";
import { TemplateProps } from "@yext/pages";

export interface PageLayoutProps {
  children?: React.ReactNode;
  _site?: any;
  templateData: TemplateProps

}

const PageLayout = ({ children, _site, templateData }: PageLayoutProps) => {
  return (
    // <AnalyticsProvider apiKey={["string"]} templateData={templateData} enableDebugging={true} requireOptIn={false} productionDomains={["https://fitness-nutrition-expert.sbx.pgsdemo.com/"]}>
      <div className="min-h-screen">
        {/* <AnalyticsScopeProvider name="header"> */}
          {/* <Header _site={_site} /> */}
        {/* </AnalyticsScopeProvider> */}

        {/* <AnalyticsScopeProvider name="Children"> */}

        {children}

        {/* </AnalyticsScopeProvider> */}

        {/* <AnalyticsScopeProvider name="footer"> */}
          {/* <Footer _site={_site} /> */}
        {/* </AnalyticsScopeProvider> */}
      </div>);
    {/* </AnalyticsProvider> */}
  
};

export default PageLayout;