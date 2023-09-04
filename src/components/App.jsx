import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '400px' }}>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleAddFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() < 1 ? (
            <NotificationMessage message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
