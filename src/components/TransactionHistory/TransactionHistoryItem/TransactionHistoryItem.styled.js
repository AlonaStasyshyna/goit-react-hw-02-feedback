import styled from 'styled-components';

export const HistoryItem = styled.tr`
    &:nth-child(2n) {
        background-color: #ECF1F3;
    }
`;

export const HistoryItemText = styled.td`
    padding: 8px;

    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: calc(14 / 12);

    letter-spacing: 0.03em;

    color: #7F8E9D;
`;