import * as React from "react";
import "../index.css";
import "@yext/visual-editor/style.css";
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
import { componentRegistry, ModifiedMainConfig } from "../ve.config";
import { projectTailwindExtensions } from "../theme/projectTailwindExtensions";
import {AnalyticsProvider, SchemaWrapper } from "@yext/pages-components";
import { StreamDocument } from "@yext/visual-editor";

export const config: TemplateConfig = {
    name: "FitnessProgramResultsDetailPage",
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
  document, relativePrefixToRoot,
 }) => {
  return (document.slug);
}; 

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (data: TemplateRenderProps): HeadConfig => {
  const { document, relativePrefixToRoot } = data;
  const schema = getSchema(data);

  return {
    title: document.title ||"Fitness Program",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",

    other: [
    applyHeaderScript(document), // applies the Header script from Site Configuration
    applyTheme(document, relativePrefixToRoot, defaultThemeConfig), // applies the theme styles (include default component styling)
    SchemaWrapper(schema), // applies the JSON-LD schema to the page
    applyCertifiedFacts(document),
    // disableHmrForStackBlitz,

  ].join("\n"),
  };
};


export const transformProps: TransformProps<TemplateProps> = async (data) => {
  const { document } = data;

  if (document.__?.layout) {
    const migratedData = migrate(
      JSON.parse(document.__.layout),
      migrationRegistry,
      ModifiedMainConfig,
      document
    );

    const resolvedPuckData = await resolveAllData(migratedData, ModifiedMainConfig, {
      streamDocument: document,
    });

    document.__.layout = JSON.stringify(resolvedPuckData);

  }
  const translations = await injectTranslations(document);

  return { ...data, document, translations };
};



const FitnessProgramResultsDetailPage: Template<TemplateRenderProps<FitnessLandingPage>> = (props) => {
  const { __meta, document } = props;
  const veDocument = document as any;

  let data: any = {
    content: [],
    root: { props: {} },
  };

   if (veDocument.__?.layout) {
    try {
      data = JSON.parse(veDocument.__.layout);
    } catch (e) {
      console.error("Failed to parse layout JSON:", e);
    }
  }




  return (
    <VisualEditorProvider 
    templateProps={props}
    // tailwindConfig={defaultThemeConfig}
    >
    <div className="fitness-rendered-root" style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <Render
        config={ModifiedMainConfig}
        data={data}
        metadata={{ streamDocument: document }}
      />
    </div>
    </VisualEditorProvider>
  ); 



};

export default FitnessProgramResultsDetailPage;