import styled from 'styled-components';

export const Card = styled.div`
    width: 260px;
    margin: 24px auto;
    padding: 24px 0 0 0;

    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;

    overflow: hidden;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
`;

export const Name = styled.p`
    margin: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: calc(21 / 18);

    text-align: center;
    letter-spacing: 0.01em;

    color: #1F3349;
`;

export const Text = styled.p`
    margin-top: 8px;
    margin-bottom: 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: calc(16 / 14);

    text-align: center;

    color: #7F8E9D;
`;

export const List = styled.ul`
    display: flex;

    list-style-type: none;
    padding: 0;
    margin-top: 24px;
    margin-bottom: 0;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 6px;

    width: calc(100% / 3);

    background: #ECF1F3;
    border-top: 1px solid #7F8E9D;
    border-right: 1px solid #7F8E9D;

    &:last-child {
        border-right: none;
    }
`;

export const SpanName = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14/12);


    color: #7F8E9D;
`;

export const SpanQuantity = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(16/14);

    color: #1F3349;
`;