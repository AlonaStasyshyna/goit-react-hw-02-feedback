import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import { History, Head, HeadTitle } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <History>
            <Head>
                <tr>
                    <HeadTitle>Type</HeadTitle>
                    <HeadTitle>Amount</HeadTitle>
                    <HeadTitle>Currency</HeadTitle>
                </tr>
            </Head>

            <tbody><TransactionHistoryItem items={items} /></tbody>
        </History>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}