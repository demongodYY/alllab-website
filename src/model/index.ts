import { History } from 'cell-router/source';
import { service } from 'mobx-strapi';

import { ViewpointModel } from './ScenicSpot';

if (self.location.hostname !== 'localhost')
    service.baseURI = 'https://data.jiepaifuture.com/';

export const history = new History();
export const scenicSpot = new ViewpointModel();
