import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem/FriendListItem"
import { List } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
            <FriendListItem friends={friends} />
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}