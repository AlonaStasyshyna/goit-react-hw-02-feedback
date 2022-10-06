export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
  }

  countTotalFeedback = ({good, neutral, bad}) => (good + neutral + bad)

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (!good) {
      return 0;
    }
    
    return Math.round(good / (good + neutral + bad) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback({ good, neutral, bad })
            ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback({ good, neutral, bad })} positivePercentage={this.countPositiveFeedbackPercentage({ good, neutral, bad })} />
            : <Notification message="There is no feedback" />}
        </Section>
      </>
    )}
};