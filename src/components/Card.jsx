import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';

import './styles/Card.css';

export default function ProyectCard({ data }) {
    const { title, img, desc, longDesc, link } = data;
    const [showMore, setShowmore] = useState(false);

    return (
        <Card style={{ maxWidth: '300px' }}>
            <CardHeader></CardHeader>
            <CardImg src={img} />
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
    );
}
