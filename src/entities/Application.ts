export default class Application {
  /**
   * @description   The id off the app
   */
  id: string // Snowflake

  /**
   * @description   The name of the app
   */
  name: string

  /**
   * @description   The icon hash of the app
   */
  icon: string

  /**
   * @description   The description of the app
   */
  description: string

  /**
   * @description   An array of rpc origin urls, if rpc is enabled
   */
  rpcOrigins: string[]

  /**
   * @description   When false only app owner can join the app's bot to guilds
   */
  botPublic: boolean

  /**
   * @description   When true the app's bot will only join upon completion of the full oauth2 code grant flow
   */
  botRequireCodeGrant: boolean

  /**
   * @description   The url of the app's terms of service
   */
  termsOfServiceUrl: string

  /**
   * @description   The url of the app's privacy policy
   */
  privacyPolicyUrl: string

  /**
   * @description   Partial user object containing info on the owner of the application
   */
  owner: any

  /**
   * @deprecated    Deprecated and will be removed in v11
   */
  summary: string

  /** 
   * @description   If the application belongs to a team, this will be a list of the members of that team
   */
  team: any

  /**
   * @description   Guild associated with the app. For example, a developer support server.
   */
  guildId: string // Snowflake

  /**
   * @description   A partial object of the associated guild
   */
  guild: any

  /**
   * @description   If this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
   */
  primarySKUId: string // Snowflake

  /**
   * @description   If this application is a game sold on Discord, this field will be the URL slug that links to the store page
   */
  slug: string

  /**
   * @description   The application's default rich presence invite cover image hash
   */
  coverImage: string

  /**
   * @description   The application's public flags
   */
  flags: number

  /**
   * @description   An approximate count of the app's guild membership.
   */
  approximateGuildCount: number

  /**
   * @description   Up to 5 tags describing the content and functionality of the application
   */
  tags: string[]

  /**
   * @description   Settings for the application's default in-app authorization link, if enabled
   */
  installParams: any[]

  /**
   * @description   The application's default custom authorization link, if enabled
   */
  customInstallUrl: string

  /**
   * @description   The application's role connection verification entry point, which when configured will render the app as a verification method in the guild role verification configuration
   */
  roleConnectinonsVerifyUrl: string

  constructor(data: any) {
    this.id = data.id
    this.name = data.name
    this.icon = data.icon
    this.description = data.description
    this.rpcOrigins = data.rpc_origins
    this.botPublic = data.bot_public
    this.botRequireCodeGrant = data.bot_require_rode_grant
    this.termsOfServiceUrl = data.terms_of_service_url
    this.privacyPolicyUrl = data.privacy_policy_url
    this.owner = data.owner
    this.summary = data.summary
    this.team = data.team
    this.guildId = data.guild_id
    this.guild = data.guild
    this.primarySKUId = data.primary_sku_id
    this.slug = data.slug
    this.coverImage = data.cover_image
    this.flags = data.flags
    this.approximateGuildCount = data.approximate_guild_count
    this.tags = data.tags
    this.installParams = data.install_params
    this.customInstallUrl = data.custom_install_url
    this.roleConnectinonsVerifyUrl = data.role_connectinons_verify_url
  }
}