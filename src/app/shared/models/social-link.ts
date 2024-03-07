export interface SocialLink {
  type: SocialLinkType;
  url: string;
}

export enum SocialLinkType {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn',
  YouTube = 'YouTube',
  Website = 'Website'
}
