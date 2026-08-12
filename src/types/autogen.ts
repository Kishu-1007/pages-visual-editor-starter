export interface C_fitnessServicesInformation {
	serviceImage?: ComplexImage,
	serviceIcon?: ComplexImage,
	serviceCat?: string,
	serviceNameTitle?: string,
	serviceDescription?: string,
	serviceCTA?: ServiceCTA,
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export default interface FitnessLandingPage {
	id?: string,
	name?: string,
	headline?: string,
	title?: string,
	c_tagLine?: string,
	c_primaryCTA?: C_primaryCTA,
	slug?: string,
	c_heroBackgroundImage?: ComplexImage[],
	c_serviceTitle?: string,
	c_serviceHeadline?: string,
	c_fitnessServicesInformation?: C_fitnessServicesInformation[],
	frequentlyAskedQuestions?: FrequentlyAskedQuestions[],
}

export interface FrequentlyAskedQuestions {
	question: string,
	answer?: string,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface ServiceCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}
