import React, { useState } from "react"

import type { isuxportal } from "./pb"

type Team = Pick<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem, 'name' | 'isStudent'>

interface TeamItemProps {
    rank: number
    team: Team
}

const TeamItem: React.FC<TeamItemProps> = ({ rank, team }) => (
    <tr>
        <th>{rank}</th>
        <td>
            {team.name}
        </td>
        <td>
            {team.isStudent && <span className="tag is-primary is-pulled-right">Student</span>}
        </td>
    </tr>
)

const teams: Team[] = [
    { name: '超すごいチーム', isStudent: false },
    { name: '結構すごいチーム', isStudent: true },
    { name: 'だいぶすごいチーム', isStudent: false },
    { name: 'すごいチーム', isStudent: false },
    { name: 'ちょっとすごいチーム', isStudent: true },
    { name: '少しすごいチーム', isStudent: false },
    { name: 'まあ普通なチーム', isStudent: false },
    { name: 'そこそこ普通なチーム', isStudent: true },
    { name: '普通なチーム', isStudent: true },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: true },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: false },
    { name: '普通なチーム', isStudent: true },
    { name: '普通なチーム', isStudent: false },
]

type Mode = 'all' | 'general' | 'students'

export const TopTeamList = () => {
    const [mode, setMode] = useState<Mode>('all')

    return (
        <>
            <div className="tabs is-boxed mb-0">
                <ul>
                    <li className={mode === "all" ? "is-active" : ""}>
                        <a onClick={() => setMode('all')}>
                            <span>All</span>
                        </a>
                    </li>
                    <li className={mode === "general" ? "is-active" : ""}>
                        <a onClick={() => setMode('general')}>
                            <span>General</span>
                        </a>
                    </li>
                    <li className={mode === "students" ? "is-active" : ""}>
                        <a onClick={() => setMode('students')}>
                            <span>Students</span>
                        </a>
                    </li>
                </ul>
            </div>
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-light">
                        <th>Rank</th>
                        <th>Team</th>
                        <th>{/* isStudent? */}</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.filter(
                        ({ isStudent }) => {
                            switch (mode) {
                                case 'all':
                                    return true
                                case 'general':
                                    return !isStudent
                                case 'students':
                                    return isStudent
                                default:
                                    true
                            }
                        }
                    ).map((team, rank) => (
                        <TeamItem team={team} rank={rank} key={rank} />
                    ))}
                </tbody>
            </table>
        </>
    )
}
