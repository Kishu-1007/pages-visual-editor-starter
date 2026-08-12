// src/config/searchHeadlessConfig.ts

import { createSearchHeadlessConfig } from "@yext/visual-editor";

export const getSearchHeadlessConfig = (document: any) =>
  createSearchHeadlessConfig(document, "fitness-nutrition-expert");