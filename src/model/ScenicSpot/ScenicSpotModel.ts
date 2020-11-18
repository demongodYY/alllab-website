import { observable } from 'mobx';
import { service } from '../service';

export interface Content {
    title: string;
    film: {
        url: string;
    };
    detail: string;
}

export class _ScenicSpotModel {
    owner: string;
    repo: string;

    constructor({ owner, repo }: { owner: string; repo: string }) {
        (this.owner = owner), (this.repo = repo);
    }

    @observable
    list: Content[] = [];

    // 请求接口 获取数据
    async getPoints(id) {
        const { body } = await service.get<Content[]>(`/viewpoints/${id}`);
        return (this.list = body.gallery);
    }
}
