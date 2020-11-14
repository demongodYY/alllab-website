import { observable } from 'mobx';

import { service } from './service';

export interface Content {
    type: 'file' | 'dir';
    name: string;
    path: string;
    size: number;
    sha: string;
    html_url: string;
}

export class ContentModel {
    owner: string;
    repo: string;

    constructor({ owner, repo }: { owner: string; repo: string }) {
        (this.owner = owner), (this.repo = repo);
    }

    @observable
    list: Content[] = [];

    // 请求接口 获取数据
    async getPaths() {
        console.log(44123);
        const { body } = await service.get<Content[]>(
            `/statistics`
        );
        return (this.list = body);
    }
}
