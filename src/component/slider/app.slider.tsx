"use client"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style/global.css"
import Link from 'next/link';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const items = [
    { name: "Nike", content: "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.", image: 'https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/nike-chromebook-wallpaper.jpg' },
    { name: "Adidas", content: "We started in a wash room and conquered the world. And in between, we’ve scored big and sometimes struggled to reach our goals. We’ve done our best for the best. We’ve improved and grown. Looking ahead to the future, always remembering where we came from. This is our story.", image: 'https://pbs.twimg.com/profile_images/1696070215354716160/3GW_BOtL_400x400.jpg' },
    { name: "Stussy", content: " Now one of the most famous streetwear brands of all time, Stüssy is a Californian skate/surf brand with an origin story in keeping with the brand’s laidback, free-spirited identity.", image: "https://i.pinimg.com/736x/47/43/0c/47430ca0bfc77ee35162d69e4274092c.jpg" },
    { name: "Vans", content: "Vans (originally called the Van Doren Rubber Company) is an American apparel, accessories, and skateboarding shoes brand, established in Anaheim, California, and owned by VF Corporation.", image: "https://i.pinimg.com/1200x/a1/a5/31/a1a5313d3ea7462959e252ebdec1ca0e.jpg" }

]

const Slider = () => {
    return (
        <div
            style={{
                minHeight: 400, minWidth: "1200px",
                backgroundColor: "#1f1f1f",
                color: "white",
                borderBottom: "1px solid #393939",
                padding: "30px 50px",
            }}>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}

            >
                {items.map((items, index) => {
                    return (
                        <div key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={items.image}
                                    title="nike img"
                                />
                                <CardContent sx={{ height: 250 }}>
                                    <Typography gutterBottom variant="h5" component="div" >
                                        {items.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {items.content}
                                    </Typography>
                                </CardContent>
                                <div style={{ padding: "20px 10px" }}>
                                    <Link href={"#"} className='more-name' style={{
                                        color: "black",
                                        textDecoration: "none",
                                        opacity: "0.5"
                                    }}>
                                        More detail
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    )
                })}


            </Carousel>
        </div>

    )
}

export default Slider