export interface GetBrawlersParams {
    before?: string
    after?: string
    limit?: number
}

export interface GetClubMembersParams {
    clubTag: string
    before?: string
    after?: string
    limit?: number
}

export interface GetBattleLogParams {
    playerTag: string
}

export interface GetPlayerParams {
    playerTag: string
}

export interface GetClubParams {
    clubTag: string
}

export interface GetClubRankingsParams {
    countryCode: string
    before?: string
    after?: string
    limit?: number
}

export interface GetBrawlerRankingsParams {
    countryCode: string
    brawlerId: string
    before?: string
    after?: string
    limit?: number
}

export interface GetBrawlerParams {
    brawlerId: string
}

export interface GetPlayerRankingsParams {
    countryCode: string
    before?: string
    after?: string
    limit?: number
}