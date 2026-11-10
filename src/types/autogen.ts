export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface Interval {
	start: any,
	end: any,
}

export interface LocalEditorEntityStream {
	id?: string,
	name?: string,
	slug?: string,
	address?: Address,
	description?: string,
	emails?: string[],
	hours?: Hours,
	mainPhone?: any,
	services?: string[],
	yextDisplayCoordinate?: Coordinate,
}

export interface SiteStream {
	c_templateVisualConfiguration?: string,
}
