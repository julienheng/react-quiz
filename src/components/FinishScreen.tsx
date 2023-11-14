/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
};

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
}: Props) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "😟";
  if (percentage === 0) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of You
        scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)})
      </p>
      <p className="highscore">(High Score: {highscore} points)</p>
    </>
  );
}
