import { useChronometer } from "../hooks/useChronometer";

const Buttons = () => {
    const {
        resetChronometer,
        startChronometer,
        stopChronometer,
        isTimerOn
      } = useChronometer();

    return (
        <div className="container d-flex justify-content-center buttonClass">
            <button type="button" className="btn btn-secondary ms-1" onClick={startChronometer}>Start/Resume counter</button>
            <button type="button" className="btn btn-secondary ms-1" onClick={stopChronometer}>Stop counter</button>
            {!isTimerOn && (
                <button type="button" className="btn btn-secondary ms-1" onClick={resetChronometer}>Reset counter</button>
            )}
		</div>
    )
}

export default Buttons;