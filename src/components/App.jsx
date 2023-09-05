import { useState } from "react";

import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleAddFeedback = (e) => {
    //console.log(e); // good
    switch (e) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", width: "400px" }}>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleAddFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() < 1 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
