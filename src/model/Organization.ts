import { BaseData } from 'mobx-strapi';

export interface Organization extends BaseData {
    name: string;
    slogan?: string;
    logo: string;
    link?: string;
    summary: string;
    video?: string;
    message_link?: string;
}
