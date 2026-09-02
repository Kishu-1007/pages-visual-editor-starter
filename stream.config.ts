import type { LocalEditorConfig } from "@yext/visual-editor/plugin";

const baseLocationStream = {
  filter: { entityTypes: ["location"] },
  fields: [
    "id",
    "uid",
    "meta",
    "slug",
    "name",
    "hours",
    "dineInHours",
    "driveThroughHours",
    "address",
    "yextDisplayCoordinate",
    // "c_productSection.sectionTitle",
    // "c_hero",
    // "dm_directoryParents_defaultdirectory.slug",
    // "dm_directoryParents_defaultdirectory.name",
    "additionalHoursText",
    "mainPhone",
    "emails",
    "services",
    // "c_deliveryPromo",
    "ref_listings",
    // "ref_reviewsAgg.topReviews",
    // "ref_reviewsAgg.publisher",
    // "ref_reviewsAgg.reviewsCount",
    // "ref_reviewsAgg.averageRating",
  ],
  localization: {
    locales: ["en"],
  },
};

const FitnessProofTemplate = {
  filter: { entityTypes: ["ce_fitnessPage"] },
  fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "locale",
      "title",
      "headline",
      "c_tagLine",
      "c_primaryCTA",
      "c_heroBackgroundImage",
      "c_serviceTitle",
      "c_serviceHeadline",
      "c_fitnessServicesInformation",
      "frequentlyAskedQuestions",
      // "siteDomain",
      // "siteId",
      // "siteInternalHostName",
      // "businessId",
  ],
    localization: {
      locales: ["en-GB"],
  },
};


const config = {
  defaults: {
    templateId: "directory",
    locale: ["en", "en-GB"],
  },
  templates: {
    "directory": {
      // stream: {
      //   filter: { entityTypes: ["ce_city", "ce_region", "ce_state", "ce_root"] },
      //   $id: "local-editor-directory-stream",
      //   fields: [
      //     "dm_directoryParents.name",
      //     "dm_directoryParents.slug",
      //     "dm_directoryChildren.name",
      //     "dm_directoryChildren.address",
      //     "dm_directoryChildren.slug",
      //   ],
      // },
    },
    "locator": {
      // stream: {
      //   filter: { entityTypes: ["locator"] },
      //   $id: "local-editor-locator-stream",
      //   fields: [],
      // },
    },
    "main": {
      stream: {
        ...baseLocationStream,
        $id: "local-editor-main-stream",
      },
    },
    "FitnessProofTemplate": {
    stream: {
      ...FitnessProofTemplate,
      $id: "local-editor-fitness-proof-template-stream", 
    },
  },
  },
} satisfies LocalEditorConfig;

export default config;
