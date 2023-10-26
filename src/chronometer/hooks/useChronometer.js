
import { useEffect, useState } from "react";

const useChronometer = () => {
    
    const [count, setCount] = useState(10);
    const [isTimerOn, setIsTimerOn] = useState(false);

    useEffect(() => {
		let interval = null;

		if (isTimerOn) {
			interval = setInterval(() => {
				setCount(prev => prev + 10)
			}, 10);
		}
		else clearInterval(interval);

		return () => clearInterval(interval);
    }, [isTimerOn]);

    const startChronometer = () => {
        setIsTimerOn(true);
    }
    
    const stopChronometer = () => {
        setIsTimerOn(false);
    }
    
    const resetChronometer = () => {
        setIsTimerOn(false);
        setCount(0);
    }

    return {
        count,
        isTimerOn,
        startChronometer,
        stopChronometer,
        resetChronometer
    }
}

export { useChronometer };