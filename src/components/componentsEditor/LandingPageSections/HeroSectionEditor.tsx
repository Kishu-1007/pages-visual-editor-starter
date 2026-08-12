
import * as React from "react";
import { useDocument, YextFields, toPuckFields, } from "@yext/visual-editor";
import { useTemplateProps } from "@yext/visual-editor";
import { useState } from "react";
import { ComplexImage } from "../../../types/autogen";
import { Image } from "@yext/pages-components";
import { PuckComponent, type DefaultComponentProps, Slot } from "@puckeditor/core";
import HeroSection from "../../layout/sections/Hero/HeroSection";
import { YextComponentConfig } from "@yext/visual-editor";
import { msg } from "@yext/visual-editor";
import { backgroundColors, ThemeColor } from "@yext/visual-editor";


export interface HeroSectionStyles {
  backgroundColor: ThemeColor;
}


export interface HeroSectionEditorProps extends DefaultComponentProps {
  styles: HeroSectionStyles;

  slots: {
    ContentSlot: Slot;
  };
};


const heroFields: YextFields<HeroSectionEditorProps> = {

  styles:{
    type: "object",
    label: msg("fields.styles", "Styles"),

    objectFields:{
      backgroundColor: {
        type: "basicSelector",
        label: msg("fields.backgroundColor", "Background Color"),
        options: "BACKGROUND_COLOR",
      },
    },
  },

  slots:{
    type: "object",
    visible: false,
    objectFields: {
      ContentSlot: {
        type: "slot",
        allow: [],
      },
    },
  },

  // title: {
  //   type: "text",
  //   label: "Title",
  // },
  // headline: {
  //   type: "text",
  //   label: "Headline",
  // },
  // c_tagLine: {
  //   type: "text",
  //   label: "Tag Line",
  // },
};



export const HeroSectionComponent: PuckComponent<HeroSectionEditorProps> = ({
  styles,
  analytics,
}) => {
  const { document: streamDocument } = useTemplateProps();
  return <HeroSection />;
};



export const HeroSectionEditor: YextComponentConfig<HeroSectionEditorProps> = {
 label: msg("components.heroSection", "Hero Section"),

  fields: heroFields,

  defaultProps: {
    styles: {
      backgroundColor: backgroundColors.background1.value,
    },

    slots: {
      ContentSlot: [],
    },

    analytics: {
      scope: "hero",
    },
  },

  render: (props) => <HeroSectionComponent {...props} />,
};


export default HeroSectionEditor;
  // export const heroFields = { title: YextFields.text({ label: "Title", }), headline: YextFields.text({ label: "Headline", }), c_tagLine: YextFields.text({ label: "Tag Line", }), c_primaryCTA: YextFields.link({ label: "Primary CTA", }), c_heroBackgroundImage: YextFields.imageList({ label: "Hero Background Images", }), };


// const HeroSectionEditor = (_props:HeroSectionEditorProps) => {
//     const profile = useTemplateProps();
//     const [currentIndex, setCurrentIndex] = useState(0);
//   const hasImages = profile.document.photoGallery && profile.document.photoGallery.length > 0 ? profile.document.photoGallery : [];

//    const prev = () => {
//   };

//   const next = () => {
//   };


//     return (
//         <section className="relative h-[500px] sm:h-[650px] md:h-[850px] overflow-hidden bg-black">
//       {profile.document.c_heroBackgroundImage?.length ? (
//         profile.document.c_heroBackgroundImage.map((photo: ComplexImage, index: number) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-center bg-cover animate-fade-in-right ${index === currentIndex ? "opacity-100 z-0" : "opacity-0"
//               }`}
//           //   style={{
//           //     backgroundImage: `url(${photo.image?.url})`,
//           //     backgroundSize: "cover",
//           //     backgroundPosition: "center",
//           //   }}
//           >
//             <div className="absolute inset-0 z-0">
//               <Image image={photo.image}
//                 className="w-full h-full"
//                 style={{ objectFit: "cover", objectPosition: "bottom" }}
//                 loading="eager"
//               />
//             </div>
//             {/* Dark overlay for readability */}
//             <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-8 z-20">
//               {/* Left side empty for balance */}
//               <div className="hidden lg:block lg:w-1/3"></div>

//               {/* Right side content */}
//               <div className="w-full lg:w-2/3 text-white pl-32">
//                 {profile.document.headline && (
//                   <p className="text-sm font-light tracking-wide uppercase mb-4">
//                     {profile.document.headline}
//                   </p>
//                 )}
//                 {profile.document.title && (
//                   <h1 className="text-4xl md:text-8xl animate-fade-in-right font-extrabold leading-tight mb-6 max-w-xl">
//                     {profile.document.title}
//                   </h1>
//                 )}
//                 {profile.document.c_tagLine && (
//                   <p className="text-xl md:text-2xl font-light max-w-lg mb-8">
//                     {profile.document.c_tagLine}
//                   </p>
//                 )}
//                 {profile.document.c_primaryCTA && (
//                   <span className="btn-three-outer">
//                     <a
//                       href={profile.document.c_primaryCTA.link
//                         ? profile.document.c_primaryCTA.link
//                         : profile.document.slug
//                           ? `/${profile.document.slug}` : "#"}
//                       className="btn-style-three inline-block bg-white/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
//                     >
//                       <span className="txt">{profile.document.c_primaryCTA.label}</span>
//                     </a>
//                   </span>
//                 )}
//               </div>


//             </div>
//           </div>
//         ))
//       ) : (
//         // Fallback if no images
//         <div className="absolute inset-0 bg-primary" />
//       )


//       }

//       {/* Controls */}
//       {/* {photoGallery.length > 1 && (
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
//           <button
//             onClick={prev}
//             className="bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded shadow"
//           >
//             PREV
//           </button>
//           <button
//             onClick={next}
//             className="bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded shadow"
//           >
//             NEXT
//           </button>
//         </div>
//       )} */}
//     </section>

        
//     )};

    // export default HeroSectionEditor;