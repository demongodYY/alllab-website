import { observable } from 'mobx';

import { service } from './service';

export interface Image {
    title: string;
    film: {
        url: string;
    };
    detail: string;
}

export interface ScenicSpot {
    gallery: Image[];
}

export class ScenicSpotModel {
    @observable
    current: ScenicSpot = {} as ScenicSpot;

    // 请求接口 获取数据
    async getOne(id: string) {
        const { body } = await service.get<ScenicSpot>(`/viewpoints/${id}`);

        return (this.current = body);
    }
}
