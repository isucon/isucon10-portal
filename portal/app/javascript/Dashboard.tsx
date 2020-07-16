import React from "react"

import { ScoreGraph } from "./ScoreGraph"
import { TopTeamList } from "./TopTeamList"
import { JobEnqueueForm } from "./JobEnqueueForm"
import { JobList } from "./JobList"

export const Dashboard = () => {
    return (
        <div className="columns">
            <div className="column is-7">
                <div className="notification">
                    <p className="title"> Graph </p>
                    <ScoreGraph />
                </div>
                <div className="notification">
                    <p className="title"> Top Teams </p>
                    <TopTeamList />
                </div>
            </div>
            <div className="column">
                <div className="notification">
                    <p className="title"> Job Enqueue Form </p>
                    <JobEnqueueForm />
                </div>
                <div className="notification">
                    <p className="title"> Job List </p>
                    <JobList />
                </div>
            </div>
        </div>
    )
}
