
import { component, mixin, watch, createCell } from "web-cell";
import { CarouselView, CarouselItem } from 'boot-cell/source/Media/Carousel';
import style from './index.module.less';
import { ScenicSpotModel } from '../../model/ScenicSpot/index';
import { observer } from 'mobx-web-cell';

@observer
@component({
    tagName: "scenic-spot",
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
            <div className={style.carousel}>
                <CarouselView controls indicators>
                    {
                        list.map(item => {
                            return (
                                <CarouselItem
                                    image="https://tech-query.me/medias/featureimages/6.jpg"
                                    title="Mountain"
                                    detail="A description sample"
                                >

                                    <div className={style.imgBlock}>
                                        <img className="d-block" src={item.film.url} alt={item.title} />
                                        {item.title && (
                                            <div
                                                className="carousel-caption d-md-block"
                                                style={{
                                                    textShadow: '1px 2px 3px black'
                                                }}
                                            >
                                                <h5>{item.title}</h5>
                                                {item.detail && <p>{item.detail}</p>}
                                            </div>
                                        )}
                                    </div>

                                </CarouselItem>
                            )
                        })
                    }
                </CarouselView>
            </div >
        )
    }
}
