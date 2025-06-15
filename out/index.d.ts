export type List = unknown[]

export type JsonLocalizedName = string

export type PlayerRankingList = PlayerRanking[]

export type PlayerRanking = {
   club: PlayerRankingClub
   trophies: number
   icon: PlayerIcon
   tag: string
   name: string
   rank: number
   nameColor: string
}

export type PlayerIcon = {
   id: number
}

export type PlayerRankingClub = {
   name: string
}

export type ServiceVersion = {
   major: number
   minor: number
   content: number
}

export type Brawler = {
   gadgets: AccessoryList
   name: JsonLocalizedName
   id: number
   starPowers: StarPowerList
}

export type StarPowerList = StarPower[]

export type StarPower = {
   name: JsonLocalizedName
   id: number
}

export type JsonLocalizedName = {
}

export type AccessoryList = Accessory[]

export type Accessory = {
   name: JsonLocalizedName
   id: number
}

export type BattleRegionList = BattleRegion[]

export type BattleRegion = {
   id: number
   name: string
}

export type ClubRankingList = ClubRanking[]

export type ClubRanking = {
   tag: string
   name: string
   trophies: number
   rank: number
   memberCount: number
   badgeId: number
}

export type RegisterMatchRequest = {
   mode: string
   players: RegisterMatchRequestPlayers
   locationId: number
   winsRequired: number
   gadgetsAllowed: boolean
   bannedBrawlers: BannedBrawlerList
   timerPreset: string
}

export type BannedBrawlerList = BannedBrawlerEntry[]

export type BannedBrawlerEntry = {
   id: number
   side: number
}

export type RegisterMatchRequestPlayers = PlayerEntry[]

export type PlayerEntry = {
   tag: string
   side: number
}

export type RegisterMatchResponse = {
   id: string
}

export type MatchLocationList = MatchLocation[]

export type MatchLocation = {
   id: number
   name: string
   gameMode: string
}

export type SetEsportsNotificationRequest = {
   type: string
   players: List
   ttl: number
}

export type SetEsportsNotificationResponse = {
   notification: SetEsportsNotificationRequest
   status: string
}

export type Club = {
   tag: string
   name: string
   description: string
   trophies: number
   requiredTrophies: number
   members: ClubMemberList
   type: string
   badgeId: number
}

export type ClubMemberList = ClubMember[]

export type ClubMember = {
   icon: PlayerIcon
   tag: string
   name: string
   trophies: number
   role: string
   nameColor: string
}

export type ScheduledEvents = ScheduledEvent[]

export type ScheduledEvent = {
   event: ScheduledEventLocation
   slotId: number
   startTime: string
   endTime: string
}

export type ScheduledEventLocation = {
   mode: string
   modifiers: EventModifierList
   id: number
   map: JsonLocalizedName
}

export type EventModifierList = 'unknown' | 'none' | 'energyDrink' | 'angryRobo' | 'meteorShower' | 'graveyardShift' | 'healingMushrooms' | 'bossFightRockets' | 'takedownLasers' | 'takedownChainLightning' | 'takedownRockets' | 'waves' | 'hauntedBall' | 'superCharge' | 'fastBrawlers' | 'showdown+' | 'peekABoo' | 'burningBall'

export type EventModifier = {
}

export type Player = {
   club: PlayerClub
   isQualifiedFromChampionshipChallenge: boolean
   '3vs3Victories': number
   icon: PlayerIcon
   tag: string
   name: string
   trophies: number
   expLevel: number
   expPoints: number
   highestTrophies: number
   soloVictories: number
   duoVictories: number
   bestRoboRumbleTime: number
   bestTimeAsBigBrawler: number
   brawlers: BrawlerStatList
   nameColor: string
}

export type BrawlerStatList = BrawlerStat[]

export type BrawlerStat = {
   starPowers: StarPowerList
   gadgets: AccessoryList
   id: number
   rank: number
   trophies: number
   highestTrophies: number
   power: number
   gears: GearStatList
   name: JsonLocalizedName
}

export type GearStatList = GearStat[]

export type GearStat = {
   name: JsonLocalizedName
   id: number
   level: number
}

export type PlayerClub = {
   tag: string
   name: string
}

export type Match = {
   initiativeSide: number
   round: number
   teams: MatchTeamList
   terminationReason: string
   games: CompletedGameList
   phase: string
   players: PlayerMatchStatusList
   state: string
   id: string
}

export type PlayerMatchStatusList = PlayerMatchStatus[]

export type PlayerMatchStatus = {
   brawler: BrawlerInfo
   isReady: boolean
   isInBattle: boolean
   isOnline: boolean
   hasJoined: boolean
   tag: string
}

export type BrawlerInfo = {
   gears: GearInfoList
   trophies: number
   power: number
   trophyChange: number
   starPower: StarPower
   gadget: Accessory
   name: JsonLocalizedName
   id: number
}

export type GearInfoList = GearInfo[]

export type GearInfo = {
   name: JsonLocalizedName
   id: number
   level: number
}

export type CompletedGameList = CompletedGame[]

export type CompletedGame = {
   teams: CompletedGameTeamList
   duration: number
   location: MatchLocation
   replayId: string
}

export type CompletedGameTeamList = CompletedGameTeam[]

export type CompletedGameTeam = {
   score: number
   isWinner: boolean
   siege: SiegeStats
   players: PlayerEntryCompletedGameList
}

export type PlayerEntryCompletedGameList = PlayerEntryCompletedGame[]

export type PlayerEntryCompletedGame = {
   brawler: BrawlerInfo
   statistics: Stats
   tag: string
   accountId: string
}

export type Stats = {
   objectivesStolen: number
   brawlBallShotsOnGoal: number
   brawlBallShotsSaved: number
   healingDone: number
   damageDealt: number
   averageLatency: number
   damageReceived: number
   kills: number
   deaths: number
   totalDamageToSafe: number
   totalDamageToPets: number
   siegeDamageToRobot: number
   siegeBoltsCollected: number
   brawlBallGoalsScored: number
   gemGrabGemsCollected: number
   gemGrabGemsLost: number
   bountyStarsGained: number
   bountyStarsLost: number
   superUsedCount: number
   gadgetUsedCount: number
   bountyPickedMiddleStar: boolean
   matchEndKillStreak: number
   maxKillStreak: number
   hotZoneInsideZonePercentage: number
   healingDoneToSelf: number
   healingDoneToTeamMates: number
   objectivesRecovered: number
}

export type SiegeStats = {
   botDamageToBase: number
   botLevelByRound: List
}

export type MatchTeamList = MatchTeam[]

export type MatchTeam = {
   players: MatchTeamPlayerList
   bans: BrawlerInfoList
   side: number
}

export type BrawlerInfoList = BrawlerInfo[]

export type MatchTeamPlayerList = MatchTeamPlayer[]

export type MatchTeamPlayer = {
   causedTermination: boolean
   tag: string
   isLeader: boolean
   brawler: BrawlerInfo
}

export type CancelMatchResponse = {
   success: boolean
}

export type BattleList = Battle[]

export type Battle = {
   battle: BattleResult
   battleTime: string
   event: Event
}

export type Event = {
   mode: string
   id: number
   map: JsonLocalizedName
}

export type BattleResult = {
}

export type BrawlerList = Brawler[]

export type ClientError = {
   reason: string
   message: string
   type: string
}

export type BattleResult = {
   mode: string
   type: string
   result: string
   duration: number
   trophyChange: number
   starPlayer: StarPlayer
   teams: TeamList
}

export type StarPlayer = {
   tag: string
   name: string
   brawler: PlayerBrawler
}

export type PlayerBrawler = {
   id: number
   name: string
   power: number
   trophies: number
}

export type TeamList = Team[]

export type Team = TeamPlayer[]

export type TeamPlayer = {
   tag: string
   name: string
   brawler: PlayerBrawler
}