import * as React from "react";
import { type ComponentConfig, type Config } from "@puckeditor/core";
import HeroSection from "../components/componentsEditor/LandingPageSections/HeroSectionEditor";
import { mainConfig, MainConfigProps } from "@yext/visual-editor";
// import { HeroConfigProps } from "../components/componentRegistry/HeroConfig";
import HeroConfig, { HeroConfigProps } from "../components/componentConfig/HeroConfig";
import { HeroComponents } from "../components/componentGroups";


export interface LandingPageConfigProps extends MainConfigProps {
 HeroConfig: HeroConfigProps
}

export const landingPageConfig: Config<LandingPageConfigProps> = {
  components: {
    ...mainConfig.components,
    ...HeroComponents,

    // HeroSection: {
    //   fields: {},
    //   render: (_props) => React.createElement(HeroSection),
    // },
  },

  categories: {
    ...mainConfig.categories,

    sections: {
      components: ["HeroConfig"],
    },
  },

  root: mainConfig.root,
};

// export const componentRegistry: Record<string, Config<any>> = {
//    FitnessProgramResultsDetailPage: landingPageConfig,
// };

// export default landingPageConfig;