import { component, mixin, watch, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';

import { ScenicSpotModel } from '../../model';

@observer
@component({
    tagName: 'scenic-spot',
    renderTarget: 'children'
})
export class ScenicSpot extends mixin() {
    @watch
    id = '';

    connectedCallback() {
        this.id && ScenicSpotModel.getPoints(this.id);
    }

    render() {
        const { list } = ScenicSpotModel;

        return (
            <CarouselView
                className="d-block"
                controls
                indicators
                style={{ height: '92vh' }}
            >
                {list.map(({ film, title, detail }) => (
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
