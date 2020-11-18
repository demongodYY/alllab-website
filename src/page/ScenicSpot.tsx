import { component, mixin, watch, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';

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
            <CarouselView
                className="d-block"
                controls
                indicators
                style={{ height: '92vh' }}
            >
                {gallery?.map(({ film, title, detail }) => (
                    <CarouselItem className="h-100">
                        <img
                            className="w-100 h-100"
                            style={{ objectFit: 'cover' }}
                            src={film?.url}
                            alt={title}
                        />
                        {title && (
                            <div
                                className="carousel-caption d-md-block"
                                style={{
                                    textShadow: '1px 2px 3px black'
                                }}
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
