import React from "react"

// get state from localstorage if state is undefined &
// update localstorage when state change
function useStateFromLS(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
        console.log("custom hook (useState) fired");
        const stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
        console.log("custom hook (useEffect) fired");
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    console.log("custom hook fired");
    return [value, setValue];
}

export default useStateFromLS;