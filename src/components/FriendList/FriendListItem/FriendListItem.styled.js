import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 8px;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
`;

export const SpanOnline = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background: #56AB56;
`;

export const SpanOffline = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;

    background: #E54C65;
`;

export const Avatar = styled.img`
    margin-left: 12px;
    margin-right: 8px;
`;

export const Name = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(21 / 18);
    letter-spacing: 0.01em;

    color: #1F3349;
`;