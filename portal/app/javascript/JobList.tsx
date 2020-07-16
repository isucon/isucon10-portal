import React from "react"

import type { isuxportal } from "./pb"

type Job = Pick<isuxportal.proto.resources.BenchmarkJob, 'status'>

interface JobListItemProps {
    job: Job
}

const STATUS_COLOR_MAP = new Map<number, string>([
    [0, 'white'],
    [1, 'info-light'],
    [2, 'danger-light'],
    [3, 'warning-light'],
    [4, 'success-light'],
])

const STATUS_TEXT_MAP = new Map<number, string>([
    [0, 'Pending'],
    [1, 'Running'],
    [2, 'Failed'],
    [3, 'Cancelled'],
    [4, 'Success'],
])

const JobListItem: React.FC<JobListItemProps> = ({ job }) => (
    <tr className={`has-background-${STATUS_COLOR_MAP.get(job.status)}`}>
        <td className="has-text-centered">{STATUS_TEXT_MAP.get(job.status)}</td>
    </tr>
)

const jobs: Job[] = [
    { status: 0 },
    { status: 1 },
    { status: 4 },
    { status: 2 },
    { status: 4 },
    { status: 3 },
    { status: 4 },
    { status: 4 },
    { status: 2 },
    { status: 4 },
    { status: 2 },
]

export const JobList = () => (
    <table className="table is-bordered is-fullwidth">
    <thead>
        <tr className="has-background-light">
            <th className="has-text-centered">Status</th>
        </tr>
    </thead>
    <tbody>
        {jobs.map((job, key) => (
            <JobListItem job={job} key={key} />
        ))}
    </tbody>
</table>
)
