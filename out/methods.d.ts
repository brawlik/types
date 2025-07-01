import type * as Objects from './index'
import type * as Params from './params'
import type { CallAPI } from './utils'

export interface APIMethods {
    getBrawlers: CallAPI<
        Params.GetBrawlersParams,
        Objects.BrawlerList
    >

    getClubMembers: CallAPI<
        Params.GetClubMembersParams,
        Objects.ClubMemberList
    >

    getBattleLog: CallAPI<
        Params.GetBattleLogParams,
        Objects.BattleList
    >

    getPlayer: CallAPI<
        Params.GetPlayerParams,
        Objects.Player
    >

    getClub: CallAPI<
        Params.GetClubParams,
        Objects.Club
    >

    getClubRankings: CallAPI<
        Params.GetClubRankingsParams,
        Objects.ClubRankingList
    >

    getBrawlerRankings: CallAPI<
        Params.GetBrawlerRankingsParams,
        Objects.PlayerRankingList
    >

    getBrawler: CallAPI<
        Params.GetBrawlerParams,
        Objects.Brawler
    >

    getPlayerRankings: CallAPI<
        Params.GetPlayerRankingsParams,
        Objects.PlayerRankingList
    >
}