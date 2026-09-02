import * as React from "react";
import "../index.css";

import type {
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";

import { GetPath } from "@yext/pages";
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
} from "@yext/visual-editor";
import themeConfig from "../theme/theme.config";
import PageLayout from "../components/layout/PageLayout";
import { useDocument } from "@yext/visual-editor";
import FitnessLandingPage from "../types/autogen";
import { Render, resolveAllData } from "@puckeditor/core";
import {landingPageConfig} from "../config/LandingPage.config";
import HeroSection from "../components/componentsEditor/LandingPageSections/HeroSectionEditor";
import { componentRegistry } from "../ve.config";
import { usePlatformBridgeDocument, usePlatformBridgeEntityFields } from "@yext/visual-editor";
import { projectTailwindExtensions } from "../theme/projectTailwindExtensions";
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
    name: "FitnessProgramResultsDetailPage",
  stream: {
    $id: "FitnessLandingPage",
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
  return {
    title: "Fitness Program",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};


export const transformProps: TransformProps<TemplateProps> = async (props) => {
  const { document } = props;

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

  return { ...props, document, translations };
};



const FitnessProgramResultsDetailPage: Template<TemplateRenderProps<FitnessLandingPage>> = (props) => {
  const { __meta, document } = props;
  // Visual Editor injects layout metadata at runtime
  const veDocument = document as any;


  const layoutData = veDocument.__?.layout
    ? JSON.parse(veDocument.__.layout)
    : { content: [
    ] };


  return (
    <VisualEditorProvider
      templateProps={props}
      // entityFields={entityFields}
      // tailwindConfig={projectTailwindExtensions}
    >
      

        <Render
  config={landingPageConfig}
  data={layoutData}
  metadata={{streamDocument:document}}
/>

{/* <Editor
  document={document}
  componentRegistry={componentRegistry}
  localDev={true}
/> */}

        <div>Test</div>

    </VisualEditorProvider>
  );
};

export default FitnessProgramResultsDetailPage;