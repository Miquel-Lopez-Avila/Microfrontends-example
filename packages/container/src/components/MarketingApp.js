import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const self = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(self.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) history.push(nextPathname)
            }
        })

        history.listen(onParentNavigate)
    }, []);

    return <div ref={self} />
}

export default MarketingApp