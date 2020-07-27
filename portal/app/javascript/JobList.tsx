import React, { useState } from "react"
import useInterval from "use-interval"
import { ApiClient } from "./ApiClient"
import { isuxportal } from "./pb"

interface JobListItemProps {
    job: isuxportal.proto.resources.BenchmarkJob
}

const STATUS_COLOR_MAP = new Map<number, string>([
    [isuxportal.proto.resources.BenchmarkJob.Status.PENDING, 'white'],
    [isuxportal.proto.resources.BenchmarkJob.Status.RUNNING, 'info-light'],
    [isuxportal.proto.resources.BenchmarkJob.Status.ERRORED, 'danger-light'],
    [isuxportal.proto.resources.BenchmarkJob.Status.CANCELLED, 'warning-light'],
    [isuxportal.proto.resources.BenchmarkJob.Status.FINISHED, 'success-light'],
])

const STATUS_TEXT_MAP = new Map<number, string>([
    [isuxportal.proto.resources.BenchmarkJob.Status.PENDING, 'Pending'],
    [isuxportal.proto.resources.BenchmarkJob.Status.RUNNING, 'Running'],
    [isuxportal.proto.resources.BenchmarkJob.Status.ERRORED, 'Failed'],
    [isuxportal.proto.resources.BenchmarkJob.Status.CANCELLED, 'Cancelled'],
    [isuxportal.proto.resources.BenchmarkJob.Status.FINISHED, 'Success'],
])

const JobListItem: React.FC<JobListItemProps> = ({ job }) => (
    <tr className={`has-background-${STATUS_COLOR_MAP.get(job.status)}`}>
        <td className="has-text-centered">{STATUS_TEXT_MAP.get(job.status)}</td>
    </tr>
)

interface Props {
    client: ApiClient
}

export const JobList: React.FC<Props> = ({ client }) => {
    const [jobs, setJobs] = useState<isuxportal.proto.resources.BenchmarkJob[] | null>(null)

    useInterval(async () => {
        setJobs(await client.listBenchmarkJobs())
    }, 1000, true)

    return (
        <table className="table is-fullwidth">
            <thead>
                <tr className="has-background-light">
                    <th className="has-text-centered">Status</th>
                </tr>
            </thead>
            <tbody>
                {jobs?.map((job, key) => (
                    <JobListItem job={job} key={key} />
                ))}
            </tbody>
        </table>
    )
}
