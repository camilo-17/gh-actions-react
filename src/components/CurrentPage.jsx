import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'shards-react';

export default function CurrentPage() {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
    );
}
