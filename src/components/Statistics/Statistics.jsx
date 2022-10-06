import PropTypes from 'prop-types';
import { Section, Title, List, ListItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}

            <List>
                {stats.map((statsItem) => (
                    <ListItem key={statsItem.id} style={{backgroundColor: getRandomHexColor()}}>
                        <Label>{statsItem.label}</Label>
                        <Percentage>{statsItem.percentage}%</Percentage>
                    </ListItem>
                ))}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}