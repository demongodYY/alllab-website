import { BaseData, BaseUser, MediaData, NestedData } from 'mobx-strapi';

import { Organization } from './Organization';
import { Viewpoint } from './ScenicSpot';

export interface AvailableTime {
    id: string;
    start_date?: string;
    end_date?: string;
    start_time?: string;
    end_time?: string;
    week?: 'weekdays' | 'weekends';
}

export interface Equipment {
    id: string;
    name: string;
    type: 'textile' | 'mechanical' | 'electric' | 'digital';
    specification: string;
    amount: number;
    code?: string;
    films?: MediaData[];
    remark?: string;
}

export interface Place extends BaseData {
    name: string;
    location: string;
    capacity: number;
    indoor: boolean;
    available_times: AvailableTime[];
    contacts: NestedData<BaseUser>;
    owner: NestedData<Organization>;
    equipments: Equipment[];
    films: MediaData[];
    viewpoints: NestedData<Viewpoint>[];
}
