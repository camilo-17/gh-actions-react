import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import Skeleton from 'react-loading-skeleton';
import './styles/Card.css';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProyectCard({ data }) {
    const { title, img, desc, longDesc, link } = data;
    const classImg = data?.classImg;

    const [showMore, setShowmore] = useState(false);
    const [showImg, setShowImg] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        console.log('dsd', showImg);
    }, [showImg]);

    return (
        <>
            {!showImg && <Skeleton className="mt-2 m-with-300" width={300} height={500} />}
            <Card style={showImg ? {} : { display: 'none' }} className="mt-2 m-with-300">
                <CardHeader></CardHeader>
                <img className={classImg} src={img} onLoad={() => setShowImg(true)} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <p>{desc}</p>
                    {showMore && (
                        <div className="more-info">
                            <p>{longDesc}</p>
                        </div>
                    )}
                    <Button onClick={() => setShowmore(!showMore)}>
                        {!showMore ? <>Read more</> : <>Read less</>}
                    </Button>
                </CardBody>
                <CardFooter>
                    {link != '' ? <a href={link}>See it!</a> : <div>Not link available :c</div>}
                </CardFooter>
            </Card>
        </>
    );
}
