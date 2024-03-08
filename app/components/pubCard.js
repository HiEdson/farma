"use client"
import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import flayer1 from '../../public/flayer1.jpg';
import flayer2 from '../../public/flyer2.jpg';
import flayer3 from '../../public/flyer3.jpg';

import logo from "../../public/PROJECTO FARMACIA.svg";




const items = [

    {
        src: flayer1.src,
        altText: 'Compre online e Nós levamos até si',
        caption: 'Compre online e Nós levamos até si',
        key: 2,
    },
    {
        src: flayer2.src,
        altText: 'Fale connosco gratuitamente e saiba o que tem de tomar',
        caption: 'Fale connosco gratuitamente e saiba o que tem de tomar',
        key: 1,
    },

    {
        src: flayer3.src,
        altText: 'Aqui você encontra tudo  que procura, faça já sua encomenda',
        caption: 'Aqui você encontra tudo  que procura, faça já sua encomenda',
        key: 3,
    },
];




const PubCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                
            >
                <img src={item.src} alt={item.altText} class="img-fluid w-100" style={{ height: "70vh", maxHeight: "80vh", objectFit:"fill" }} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={2000}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}


export default PubCard;