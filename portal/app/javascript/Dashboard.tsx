import React from "react"

import { ScoreGraph } from "./ScoreGraph"
import { TopTeamList } from "./TopTeamList"
import { JobEnqueueForm } from "./JobEnqueueForm"
import { JobList } from "./JobList"

export const Dashboard = () => {
    return (
        <div className="container">
        <section className="is-fullwidth px-5 py-5">
            <ScoreGraph />
        </section>
        <div className="columns">
            <div className="column is-7 px-5">
                <section className="py-5">
                    <p className="title"> Top Teams </p>
                    <TopTeamList />
                </section>
            </div>
            <div className="column is-5 px-5">
                <section className="py-5">
                    <p className="title"> Job Enqueue Form </p>
                    <JobEnqueueForm />
                </section>
                <section className="py-5">
                    <p className="title"> Job List </p>
                    <JobList />
                </section>
            </div>
        </div>
        </div>
    )
}
