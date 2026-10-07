import React from "react";
import type { SectionConfig, YextComponentConfig } from "@yext/visual-editor";

// 1. Define the props matching your configuration fields
type LocationHeroProps = {
  title: string;
};

// 2. The core object configuration matching Yext's exact layout schema
export const LocationHero: YextComponentConfig<LocationHeroProps> = {
  label: "Location Hero Banner",
  fields: {
    title: {
      type: "text",
      label: "Banner Title",
    },
  },
  defaultProps: {
    title: "Welcome to our Location!",
  },
  render: ({ title }) => (
    <div className="p-12 bg-blue-700 text-white rounded-lg my-4">
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <p className="mt-2 text-blue-100">Custom dynamic entity container section.</p>
    </div>
  ),
};

// 3. The export metadata block the internal Yext system uses for registry mapping
export const config: SectionConfig = {
  id: "location-hero",
  displayName: "Location Hero Banner",
  description: "Displays a prominent banner section on your entity details layouts.",
  pageSetTypes: ["ENTITY"],
  category: "Content",
};
