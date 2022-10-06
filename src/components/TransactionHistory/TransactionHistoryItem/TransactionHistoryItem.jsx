import PropTypes from 'prop-types';
import { HistoryItem, HistoryItemText } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({items}) => {
    return (
        <>
            {items.map((item) => (
                <HistoryItem key={item.id}>
                    <HistoryItemText>{item.type}</HistoryItemText>
                    <HistoryItemText>{item.amount}</HistoryItemText>
                    <HistoryItemText>{item.currency}</HistoryItemText>
                </HistoryItem>
            ))}
        </>
    )
}

TransactionHistoryItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}