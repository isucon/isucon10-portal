import React, {useRef, useCallback} from "react"
import { ApiClient } from "./ApiClient"

interface Props {
    client: ApiClient
}

export const JobEnqueueForm: React.FC<Props> = ({ client }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleClick = useCallback(() => {
        client.enqueueBenchmarkJob()
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
