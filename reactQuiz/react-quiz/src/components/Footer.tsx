import React, { ReactNode } from 'react';

type FooterProps = {
    children: ReactNode;
};

const Footer = (props: FooterProps) => {
    const { children } = props;
    return <footer>{children}</footer>;
};

export default Footer;