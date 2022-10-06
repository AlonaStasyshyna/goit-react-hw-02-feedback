import styled from 'styled-components';

export const Section = styled.section`
    width: 260px;
    margin: 0 auto;
    padding: 24px 0 0 0;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;

    overflow: hidden;
`;

export const Title = styled.h2`
    margin: 0 0 24px 0;
    text-align: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(21 / 18);
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #7F8E9D;
`;

export const List = styled.ul`
    display: flex;

    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    gap: 8px;

    width: calc(100% / 5);
`;

export const Label = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14 / 12);

    color: #FFFFFF;
`;

export const Percentage = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(16 / 14);
    text-align: center;

    color: #FFFFFF;
`;