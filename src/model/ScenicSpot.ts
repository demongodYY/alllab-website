import { BaseData, MediaData, CollectionModel, NestedData } from 'mobx-strapi';

import { Place } from './Place';

export interface Coordinate {
    id: string;
    latitude: number;
    longitude: number;
}

export interface Image {
    id: string;
    title: string;
    detail: string;
    film: MediaData;
}

export interface Viewpoint extends BaseData {
    name: string;
    coordinate: Coordinate;
    gallery: Image[];
    place: NestedData<Place>;
}

export class ViewpointModel extends CollectionModel<Viewpoint> {
    name = 'viewpoint';
    basePath = 'viewpoints';
}
