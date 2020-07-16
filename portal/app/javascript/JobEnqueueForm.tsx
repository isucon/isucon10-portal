import React, {useRef, useCallback} from "react"

export const JobEnqueueForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = useCallback(() => {
        console.log(inputRef?.current?.value)
    }, [!inputRef])

    return (
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="IP Address" ref={inputRef} />
            </div>
            <div className="control">
                <button className="button is-info" onClick={handleClick}>
                Enqueue
                </button>
            </div>
        </div>
    )
}
