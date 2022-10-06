import PropTypes from 'prop-types';
import { Card, Avatar, Name, Text, List, ListItem, SpanName, SpanQuantity } from './Profile.styled';

export const Profile = ({user: {username, tag, location, avatar, stats}}) => {
    return (
        <Card>
            <div>
                <Avatar
                src={avatar}
                alt={username}
                />
                <Name>{username}</Name>
                <Text>@{tag}</Text>
                <Text>{location}</Text>
            </div>

            <List>
                <ListItem>
                <SpanName>Followers</SpanName>
                <SpanQuantity>{stats.followers}</SpanQuantity>
                </ListItem>
                <ListItem>
                <SpanName>Views</SpanName>
                <SpanQuantity>{stats.views}</SpanQuantity>
                </ListItem>
                <ListItem>
                <SpanName>Likes</SpanName>
                <SpanQuantity>{stats.likes}</SpanQuantity>
                </ListItem>
            </List>
        </Card>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired
}