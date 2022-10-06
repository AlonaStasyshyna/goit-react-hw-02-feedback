import PropTypes from 'prop-types';
import { ListItem, SpanOnline, SpanOffline, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({friends}) => {
    return (
        <>
            {
            friends.map((friend) => (
                <ListItem key={friend.id}>
                    {friend.isOnline
                        ? <SpanOnline></SpanOnline>
                        : <SpanOffline></SpanOffline>
                    }
                    <Avatar src={friend.avatar} alt={friend.name} width="48" />
                    <Name>{friend.name}</Name>
                </ListItem>
            ))
            }
        </>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })).isRequired,
}