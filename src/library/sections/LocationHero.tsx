import * as React from "react";
import { useTemplateProps } from "@yext/visual-editor/section-library-support";
import { msg } from "@yext/visual-editor/section-library-support";
import { PageSection } from "@yext/visual-editor/section-library-support";
import {
  toPuckFields,
  YextComponentConfig,
  YextFields,
} from "@yext/visual-editor/section-library-support";
import { PuckComponent } from "@puckeditor/core";
import { SectionConfig } from "@yext/visual-editor";

// 1. Define data types mapping to the layout properties
export interface LocationHeroData {
  text: {
    field?: string;
    constantValueEnabled?: boolean;
    constantValue?: {
      defaultValue?: string;
    };
  };
}

export interface LocationHeroProps {
  /**
   * This object maps fields directly to properties editable in the sidebar panel.
   * @propCategory Data Props
   */
  data: LocationHeroData;
}

// 2. Structural fields mapped according to the section library schema guidelines
const locationHeroFields: YextFields<LocationHeroProps> = {
  data: {
    type: "object",
    label: msg("fields.data", "Data Binding Options"),
    objectFields: {
      text: {
        type: "entityField", // This string flag explicitly activates the live KG property mapping picker dropdown
        label: msg("fields.heroText", "Hero Title Text"),
        filter: {
          types: ["type.string"],
        },
      },
    },
  },
};

// 3. Render loop fetching parameters directly from the local stream context
const LocationHeroComponent: PuckComponent<LocationHeroProps> = ({ data }) => {
  // useTemplateProps pulls document context exactly from window.pageSets
  const { document: streamDocument } = useTemplateProps();

  // Resolution priority: 1. Constant Override Value -> 2. Live Knowledge Graph field value -> 3. Hardcoded Fallback
  let displayTitle = "Welcome to our Location!";

  if (data?.text?.constantValueEnabled) {
    displayTitle = data.text.constantValue?.defaultValue || displayTitle;
  } else if (data?.text?.field && streamDocument) {
    displayTitle = (streamDocument[data.text.field] as string) || displayTitle;
  }

  return (
    <PageSection className="flex flex-col items-center justify-center p-8 bg-gray-50 border-b border-gray-200 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        {displayTitle}
      </h1>
    </PageSection>
  );
};

// 4. Primary export layout declaration matching defaultLayout.json type definitions
export const LocationHero: YextComponentConfig<LocationHeroProps> = {
  label: msg("components.locationHero", "Location Hero"),
  fields: locationHeroFields,
  defaultProps: {
    data: {
      text: {
        field: "name", // Automatically selects the entity 'name' property from the locations model on boot
        constantValueEnabled: false,
        constantValue: {
          defaultValue: "Welcome to our Location!",
        },
      },
    },
  },
  render: (props) => <LocationHeroComponent {...props} />,
};

// 5. Build configuration identifiers read by assets/section-library-manifest.json
export const config: SectionConfig = {
  id: "LocationHero",
  displayName: "Location Hero",
  description: "A header block driving configurations directly from live entity streams.",
  pageSetTypes: ["ENTITY"],
  category: "Content",
};
