import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/marketing-application'

const MarketingApp = () => {
    const self = useRef(null);

    useEffect(() => {
        mount(self.current)
    }, []);

    return <div ref={self} />
}

export default MarketingApp