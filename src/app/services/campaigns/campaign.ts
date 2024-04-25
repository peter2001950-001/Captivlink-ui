import { Website } from "../websites/website"

export interface Campaign{
  id: string,
  internalName: string,
  externalName: string,
  images: string[],
  categories: Category[],
  eventName: string,
  awards: Award[],
  link: string,
  budgetPerCreator: number,
  endDateTime: Date,
  website: Website,
  status: CampaignStatus
}

export interface Category{
  name: string,
  id: string
}

export interface Award{
  id: string,
  type: AwardType,
  amount? : number
}

export enum AwardType{
  PerClick = "PerClick",
  PerConversion = "PerConversion",
  Percentage = "Percentage"
}

export enum CampaignStatus{
  Draft = "Draft",
  Live = "Live",
  Archived = "Archived"
}
