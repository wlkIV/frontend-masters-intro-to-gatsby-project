import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
    

    return (
        <main>
            <h1>Hello Frontend Masters!</h1>
            <Link to="/about">About this site</Link>
        </main>
    );
}