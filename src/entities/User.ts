export default class User {
  /**
   * @description   Id of the user
   */

  id: string // Snowflake

  username: string
  discriminator: string
  globalName: string
  avatar: string
  bot: boolean
  system: boolean
  mfaEnabled: boolean
  banner: string
  accentColor: number
  locale: string
  verified: boolean
  email: string
  flags: number
  publicFlags: number
  premiumType: number
  avatarDecoration: string

  constructor(data: any) {
    this.id = data.id
    this.username = data.username
    this.discriminator = data.discriminator
    this.globalName = data.global_name
    this.avatar = data.avatar
    this.bot = data.bot
    this.system = data.system
    this.mfaEnabled = data.mfa_enabled
    this.banner = data.banner
    this.accentColor = data.accent_color
    this.locale = data.locale
    this.verified = data.verified
    this.email = data.email
    this.flags = data.flags
    this.publicFlags = data.public_flags
    this.premiumType = data.premium_type
    this.avatarDecoration = data.avatar_decoration
  }
}
