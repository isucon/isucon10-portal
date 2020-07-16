import React from "react"

import type { isuxportal } from "./pb"

type Team = Pick<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem, 'name'>

interface TeamItemProps {
    rank: number
    team: Team
}

const TeamItem: React.FC<TeamItemProps> = ({ rank, team }) => (
    <tr>
        <th>{rank}</th>
        <td>{team.name}</td>
    </tr>
)

const teams: Team[] = [
    { name: '超すごいチーム' },
    { name: '結構すごいチーム' },
    { name: 'だいぶすごいチーム' },
    { name: 'すごいチーム' },
    { name: 'ちょっとすごいチーム' },
    { name: '少しすごいチーム' },
    { name: 'まあ普通なチーム' },
    { name: 'そこそこ普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
    { name: '普通なチーム' },
]

export const TopTeamList = () => {
    return (
        <table className="table is-bordered is-hoverable is-fullwidth">
            <thead>
                <tr className="has-background-light">
                    <th>Rank</th>
                    <th>Team</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, rank) => (
                    <TeamItem team={team} rank={rank} key={rank} />
                ))}
            </tbody>
        </table>
    )
}
