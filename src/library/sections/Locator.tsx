import { LocatorComponent as SectionComponent } from "../shared/components/sections/locator/Locator";
import type { SectionConfig } from "@yext/visual-editor";

export const Locator = SectionComponent;

export const config: SectionConfig = {
  id: "Locator",
  displayName: "Locator",
  description: "Displays the locator page experience.",
  pageSetTypes: ["LOCATOR"],
  category: "Standard Sections",
};
