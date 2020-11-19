import { component, mixin, watch, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';

import style from './ScenicSpot.module.less';
import { scenicSpot } from '../model';

@observer
@component({
    tagName: 'scenic-spot',
    renderTarget: 'children'
})
export class ScenicSpotPage extends mixin() {
    @watch
    id = '';

    connectedCallback() {
        this.id && scenicSpot.getOne(this.id);

        super.connectedCallback();
    }

    render() {
        const { gallery } = scenicSpot.current;

        return (
            <CarouselView className={style.gallery} controls indicators>
                {gallery?.map(({ film, title, detail }) => (
                    <CarouselItem className="h-100">
                        <img src={film?.url} alt={title} />
                        {title && (
                            <div
                                className={`carousel-caption ${style['image-text']}`}
                            >
                                <h5>{title}</h5>
                                {detail && <p>{detail}</p>}
                            </div>
                        )}
                    </CarouselItem>
                ))}
            </CarouselView>
        );
    }
}
