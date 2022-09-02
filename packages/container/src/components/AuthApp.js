import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

const AuthApp = ({ onSignIn }) => {
    const self = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(self.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathname) history.push(nextPathname)
            },
            onSignIn,
        })

        history.listen(onParentNavigate)
    }, []);

    return <div ref={self} />
}

export default AuthApp