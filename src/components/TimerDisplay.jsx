
function TimerDisplay({ time }) {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return (
        <p>{minutes}:{seconds}</p>
    )
}

export default TimerDisplay