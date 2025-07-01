import type * as Objects from './index'
import type * as Params from './params'
import type { CallAPI } from './utils'

export interface APIMethods {
    getBrawlers: CallAPI<
        Params.asdParams,
        Objects.BrawlerList
    >

    getClubMembers: CallAPI<
        Params.asdParams,
        Objects.ClubMemberList
    >

    getBattleLog: CallAPI<
        Params.asdParams,
        Objects.BattleList
    >

    getPlayer: CallAPI<
        Params.asdParams,
        Objects.Player
    >

    getScheduledEvents: CallAPI<
        Params.asdParams,
        Objects.ScheduledEvents
    >

    getClub: CallAPI<
        Params.asdParams,
        Objects.Club
    >

    getClubRankings: CallAPI<
        Params.asdParams,
        Objects.ClubRankingList
    >

    getBrawlerRankings: CallAPI<
        Params.asdParams,
        Objects.PlayerRankingList
    >

    getBrawler: CallAPI<
        Params.asdParams,
        Objects.Brawler
    >

    getPlayerRankings: CallAPI<
        Params.asdParams,
        Objects.PlayerRankingList
    >
}