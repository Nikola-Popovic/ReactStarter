import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Sizing } from '../styling/StylingConstants';
import { ColorConstants } from '../styling/ColorConstants';
import { styled } from '@mui/material';


type SkolaUnderlineLinkProps = LinkProps & {
    color?: string;
};

const StyledLink = styled(Link)<{color?: string}>`
    display: block;
    position: relative;
    text-decoration: none;
    opacity: 0.6;
    padding: ${Sizing.fixedS};
    margin: ${Sizing.fixedS};
    color: ${props => props.color ?? ColorConstants.Primary};
    font-size: 1.2em;
    overflow: hidden;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.1em;
        bottom: 0;
        left: 0;
        background-color: ${props => props.color ?? ColorConstants.Primary};
        opacity: 1;
        transition: opacity 300ms, transform 300ms;
        transform: translate3d(-100%, 0, 0);
    }
    &:hover::after,
    &:focus::after {
        transform: translate3d(0, 0, 0);
    }
`;

export const SkolaUnderlineLink = (props: SkolaUnderlineLinkProps) => {
  return <StyledLink {...props} color={props.color} />;
};