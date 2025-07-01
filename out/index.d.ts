export type List = unknown[]

export type JsonLocalizedName = string

export interface BattleResult {
   mode: string
   type: string
   result: string
   duration: number
   trophyChange: number
   starPlayer: StarPlayer
   teams: TeamList
}

export interface StarPlayer {
   tag: string
   name: string
   brawler: PlayerBrawler
}

export interface PlayerBrawler {
   id: number
   name: string
   power: number
   trophies: number
}

export type TeamList = Team[]

export type Team = TeamPlayer[]

export interface TeamPlayer {
   tag: string
   name: string
   brawler: PlayerBrawler
}export type PlayerRankingList = PlayerRanking[]

export interface PlayerRanking {
   club: PlayerRankingClub
   trophies: number
   icon: PlayerIcon
   tag: string
   name: string
   rank: number
   nameColor: string
}

export interface PlayerIcon {
   id: number
}

export interface PlayerRankingClub {
   name: string
}

export interface ServiceVersion {
   major: number
   minor: number
   content: number
}

export interface Brawler {
   gadgets: AccessoryList
   name: JsonLocalizedName
   id: number
   starPowers: StarPowerList
}

export type StarPowerList = StarPower[]

export interface StarPower {
   name: JsonLocalizedName
   id: number
}

export type AccessoryList = Accessory[]

export interface Accessory {
   name: JsonLocalizedName
   id: number
}

export type BattleRegionList = BattleRegion[]

export interface BattleRegion {
   id: number
   name: string
}

export type ClubRankingList = ClubRanking[]

export interface ClubRanking {
   tag: string
   name: string
   trophies: number
   rank: number
   memberCount: number
   badgeId: number
}

export interface RegisterMatchRequest {
   mode: string
   players: RegisterMatchRequestPlayers
   locationId: number
   winsRequired: number
   gadgetsAllowed: boolean
   bannedBrawlers: BannedBrawlerList
   timerPreset: string
}

export type BannedBrawlerList = BannedBrawlerEntry[]

export interface BannedBrawlerEntry {
   id: number
   side: number
}

export type RegisterMatchRequestPlayers = PlayerEntry[]

export interface PlayerEntry {
   tag: string
   side: number
}

export interface RegisterMatchResponse {
   id: string
}

export type MatchLocationList = MatchLocation[]

export interface MatchLocation {
   id: number
   name: string
   gameMode: string
}

export interface SetEsportsNotificationRequest {
   type: string
   players: List
   ttl: number
}

export interface SetEsportsNotificationResponse {
   notification: SetEsportsNotificationRequest
   status: string
}

export interface Club {
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

export interface ClubMember {
   icon: PlayerIcon
   tag: string
   name: string
   trophies: number
   role: string
   nameColor: string
}

export type ScheduledEvents = ScheduledEvent[]

export interface ScheduledEvent {
   event: ScheduledEventLocation
   slotId: number
   startTime: string
   endTime: string
}

export interface ScheduledEventLocation {
   mode: string
   modifiers: EventModifierList
   id: number
   map: JsonLocalizedName
}

export type EventModifierList = 'unknown' | 'none' | 'energyDrink' | 'angryRobo' | 'meteorShower' | 'graveyardShift' | 'healingMushrooms' | 'bossFightRockets' | 'takedownLasers' | 'takedownChainLightning' | 'takedownRockets' | 'waves' | 'hauntedBall' | 'superCharge' | 'fastBrawlers' | 'showdown+' | 'peekABoo' | 'burningBall'

export interface Player {
   club: PlayerClub
   '3vs3Victories': number
   isQualifiedFromChampionshipChallenge: boolean
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

export interface BrawlerStat {
   gadgets: AccessoryList
   starPowers: StarPowerList
   id: number
   rank: number
   trophies: number
   highestTrophies: number
   power: number
   gears: GearStatList
   name: JsonLocalizedName
}

export type GearStatList = GearStat[]

export interface GearStat {
   name: JsonLocalizedName
   id: number
   level: number
}

export interface PlayerClub {
   tag: string
   name: string
}

export interface Match {
   phase: string
   initiativeSide: number
   round: number
   teams: MatchTeamList
   terminationReason: string
   games: CompletedGameList
   players: PlayerMatchStatusList
   state: string
   id: string
}

export type PlayerMatchStatusList = PlayerMatchStatus[]

export interface PlayerMatchStatus {
   brawler: BrawlerInfo
   isReady: boolean
   isInBattle: boolean
   isOnline: boolean
   hasJoined: boolean
   tag: string
}

export interface BrawlerInfo {
   gadget: Accessory
   starPower: StarPower
   trophyChange: number
   gears: GearInfoList
   power: number
   trophies: number
   name: JsonLocalizedName
   id: number
}

export type GearInfoList = GearInfo[]

export interface GearInfo {
   name: JsonLocalizedName
   id: number
   level: number
}

export type CompletedGameList = CompletedGame[]

export interface CompletedGame {
   teams: CompletedGameTeamList
   duration: number
   location: MatchLocation
   replayId: string
}

export type CompletedGameTeamList = CompletedGameTeam[]

export interface CompletedGameTeam {
   score: number
   isWinner: boolean
   siege: SiegeStats
   players: PlayerEntryCompletedGameList
}

export type PlayerEntryCompletedGameList = PlayerEntryCompletedGame[]

export interface PlayerEntryCompletedGame {
   brawler: BrawlerInfo
   statistics: Stats
   tag: string
   accountId: string
}

export interface Stats {
   healingDone: number
   deaths: number
   damageDealt: number
   kills: number
   averageLatency: number
   damageReceived: number
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
   objectivesStolen: number
   brawlBallShotsOnGoal: number
   brawlBallShotsSaved: number
}

export interface SiegeStats {
   botDamageToBase: number
   botLevelByRound: List
}

export type MatchTeamList = MatchTeam[]

export interface MatchTeam {
   players: MatchTeamPlayerList
   bans: BrawlerInfoList
   side: number
}

export type BrawlerInfoList = BrawlerInfo[]

export type MatchTeamPlayerList = MatchTeamPlayer[]

export interface MatchTeamPlayer {
   causedTermination: boolean
   tag: string
   isLeader: boolean
   brawler: BrawlerInfo
}

export interface CancelMatchResponse {
   success: boolean
}

export type BattleList = Battle[]

export interface Battle {
   battle: BattleResult
   battleTime: string
   event: Event
}

export interface Event {
   mode: string
   id: number
   map: JsonLocalizedName
}

export type BrawlerList = Brawler[]

export interface ClientError {
   reason: string
   message: string
   type: string
}