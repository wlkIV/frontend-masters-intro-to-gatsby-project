import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../compnents/seo';

export default function IAboutPage() {
    return (
        <>
            <Seo 
                title="About this site"
                description="More information about this site."
            />
            <main>
                <h1>About this site.</h1>
                <Link to="/">Home</Link>
            </main>
        </>
    );
}