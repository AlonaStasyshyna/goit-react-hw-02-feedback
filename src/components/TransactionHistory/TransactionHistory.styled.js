import styled from 'styled-components';

export const History = styled.table`
    width: 555px;
    margin: 0 auto 24px;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
    border-spacing: 0;

    overflow: hidden;
`;

export const Head = styled.thead`
    margin: 0;
    background: #4CC6F5;
`;

export const HeadTitle = styled.th`
    padding: 8px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: calc(14 / 12);
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #FFFFFF;
`;