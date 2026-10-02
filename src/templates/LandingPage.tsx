import * as React from "react";
import "../index.css";
import{ ErrorInfo, useEffect, useState } from "react";

import type {
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
  GetHeadConfig,
  HeadConfig,
  GetPath,
} from "@yext/pages";

import {
  applyTheme,
  VisualEditorProvider,
  Editor,
  resolveUrlTemplate,
  getPageMetadata,
  applyAnalytics,
  applyHeaderScript,
  applyCertifiedFacts,
  migrate,
  migrationRegistry,
  defaultThemeConfig,
  injectTranslations,
  getSchema,
  OtherCategory,
  YextSchemaField,
  defaultThemeTailwindExtensions,
  useDocument,
  useTemplateProps,
  useEntityFields,

} from "@yext/visual-editor";
import themeConfig from "../theme/theme.config";
import PageLayout from "../components/layout/PageLayout";
import FitnessLandingPage from "../types/autogen";
import { Render, resolveAllData } from "@puckeditor/core";
import HeroSection from "../components/componentsEditor/LandingPageSections/HeroSectionEditor";
import { componentRegistry } from "../ve.config";
import { projectTailwindExtensions } from "../theme/projectTailwindExtensions";
import { disableHmrForStackBlitz } from "../utils";
import { SchemaWrapper } from "@yext/pages-components";
import { landingPageConfig } from "../ve.config";
import { StreamDocument } from "@yext/visual-editor";




// import PageLayout from "../components/PageLayout";
// import FitAboutSection from "../components/A-FitpageCom/FitAboutSection";
// import HeroSection from "../components/A-FitpageCom/HeroSection";
// import ProgramSection from "../components/A-FitpageCom/ServicesSection";
// import ServiceSection from "../components/A-FitpageCom/ServiceSection";
// import FAQSection from "../components/A-FitpageCom/Faq";
// import ContactMapSection from "../components/A-FitpageCom/ContactMapSection";
// import ContactFormSection from "../components/A-FitpageCom/ContactFormSection";
// import { FitnessLandingPage } from "../types/autogen";

export const config: TemplateConfig = {
    name: "FitnessLandingPage",
  stream: {
    $id: "FitnessLandingPageStream",
    filter: {
      entityTypes: ["ce_fitnessPage"],
    },
    fields: [
      "id",
      "name",
      "headline",
      "title",
      "c_tagLine",
      "c_primaryCTA",
      "slug",
      "c_heroBackgroundImage",
      "c_serviceTitle",
      "c_serviceHeadline",
      "c_fitnessServicesInformation",
      "frequentlyAskedQuestions",
    ],
    localization: {
      locales: ["en_GB"],
    },
    transform: {
      replaceOptionValuesWithDisplayNames: ["paymentOptions"],
    },
  },
  additionalProperties: {
    isVETemplate: true,
  },
};

export const getPath: GetPath<TemplateRenderProps> = ({
  document,
 }) => {
  return (document.slug);
}; 

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (data): HeadConfig => {
  const { document, relativePrefixToRoot } = data;
  const schema = getSchema(data);

  // console.log("schema", schema);

  // const { title } = getPageMetadata(document);
  return {
    title: document.title ||"Fitness Program",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",

    other: [
    applyHeaderScript(document), // applies the Header script from Site Configuration
    applyTheme(document, relativePrefixToRoot, defaultThemeConfig), // applies the theme styles (include default component styling)
    SchemaWrapper(document.schema), // applies the JSON-LD schema to the page
    disableHmrForStackBlitz,

  ].join("\n"),
  };
  
};


export const transformProps: TransformProps<TemplateProps> = async (data) => {
  const { document } = data;

  if (document.__?.layout) {
    const migratedData = migrate(
      JSON.parse(document.__.layout),
      migrationRegistry,
      landingPageConfig,
      document
    );

    const resolvedPuckData = await resolveAllData(migratedData, landingPageConfig, {
      streamDocument: document,
    });

    document.__.layout = JSON.stringify(resolvedPuckData);

  }
  const translations = await injectTranslations(document);

  return { ...data, document, translations };
};



const FitnessLandingPage: Template<TemplateRenderProps<FitnessLandingPage>> = (props) => {
  // const [themeMode, setThemeMode] = React.useState<boolean>(false);
  //  const platformProps = useTemplateProps();
  //  const platformDocument = useDocument<FitnessLandingPage>();
  
  // const isEditingMode = typeof window !== "undefined" && window.location.pathname.includes("/edit");
  // const isInsidePlatformIframe = typeof window !== "undefined" && window.parent !== window.self;

  
  const { __meta, document } = props;
// const entityDocument = usePlatformBridgeDocument();
  // const entityFields = useEntityFields();
    // Visual Editor injects layout metadata at runtime
  // console.log('entityFields', entityFields);
  
  // 2. PARSE THE SAVED PUCK CANVAS LAYOUTS
  const veDocument = document as any;
  const layoutData = veDocument.__?.layout
    ? JSON.parse(veDocument.__.layout)
    : { content: [
    ] };



 // BRANCH A: ACTIVE MANAGEMENT PLATFORM STATE
  //   if (isEditingMode || isInsidePlatformIframe) {
  // return (
  
  //   // {/* <div className={"flex-container"}>
  //   //     <button
  //   //       className={"toggle-button"}
  //   //       onClick={() => {
  //   //         setThemeMode(!themeMode);
  //   //       }}
  //   //     >
  //   //       {themeMode ? "Theme Mode" : "Layout Mode"}
  //   //     </button>
  //   // </div> */}

  //   <div className="editor-frame-wrapper">
  //     <VisualEditorProvider
  //       templateProps={{document: entityDocument}}
  //     entityFields={entityFields}
  //     tailwindConfig={defaultThemeTailwindExtensions}
  //   >
      

  //                 {/* <Render
  //           config={landingPageConfig}
  //           data={layoutData}
  //           metadata={{streamDocument:document}}
  //         /> */}

  //     <Editor
  //        document={entityDocument}
  //         componentRegistry={componentRegistry}
  //         // localDev={!isInsidePlatformIframe}
  //         themeConfig={defaultThemeConfig}
  //         // forceThemeMode={themeMode}
  //       />

  //       <div>Test</div>

  //   </VisualEditorProvider>
  //   </div>
    
  // );
  //     }


  // BRANCH B: LOCALHOST VIEWPORT & LIVE PRODUCTION STATE
  // Satisfies React by ensuring an independent DOM is rendered outside the Admin frame
  return (
    <VisualEditorProvider 
    templateProps={props}
    // tailwindConfig={defaultThemeConfig}
    >
    <div className="fitness-rendered-root" style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <Render
        config={landingPageConfig}
        data={layoutData}
        metadata={{ streamDocument: document }}
      />

      <Editor
      document={document}
      componentRegistry={componentRegistry}
      themeConfig={defaultThemeConfig}
      localDev={true}
      // forceThemeMode
      // metadata={}

      />
      
      {/* LOCAL WORKSPACE HARNESS PREVIEW BANNER */}
      {/* <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center", border: "1px dashed #cccccc", padding: "20px", borderRadius: "8px", background: "#ffffff" }}>
        <h3>🚀 Fitness Template Standalone View Active</h3>
        <p>Localhost pipeline rendering complete. Document ID: <strong>{document.slug}</strong></p>
      </div> */}
    </div>
    </VisualEditorProvider>
  ); 



};

export default FitnessLandingPage;