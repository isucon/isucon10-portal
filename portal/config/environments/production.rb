Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Code is not reloaded between requests.
  config.cache_classes = true

  # Eager load code on boot. This eager loads most of Rails and
  # your application in memory, allowing both threaded web servers
  # and those relying on copy on write to perform better.
  # Rake tasks automatically ignore this option for performance.
  config.eager_load = true

  # Full error reports are disabled and caching is turned on.
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = true

  # Ensures that a master key has been made available in either ENV["RAILS_MASTER_KEY"]
  # or in config/master.key. This key is used to decrypt credentials (and other encrypted files).
  config.require_master_key = false

  # Disable serving static files from the `/public` folder by default since
  # Apache or NGINX already handles this.
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present?
  if ENV['RAILS_SERVE_STATIC_FILES_CC']
    config.public_file_server.headers = {
      'Cache-Control' => ENV['RAILS_SERVE_STATIC_FILES_CC'],
    }
  end

  # Enable serving of images, stylesheets, and JavaScripts from an asset server.
  # config.action_controller.asset_host = 'http://assets.example.com'

  # Specifies the header that your server uses for sending files.
  # config.action_dispatch.x_sendfile_header = 'X-Sendfile' # for Apache
  # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for NGINX

  # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
  # config.force_ssl = true

  # Use the lowest log level to ensure availability of diagnostic information
  # when problems arise.
  config.log_level = :debug

  # Prepend all log lines with the following tags.
  config.log_tags = [ :request_id ]

  # Use a different cache store in production.
  # config.cache_store = :mem_cache_store

  # Use a real queuing backend for Active Job (and separate queues per environment).
  config.active_job.queue_adapter = ENV.fetch('DISABLE_SIDEKIQ', '0') == '1' ? :inline : :sidekiq

  config.session_store :redis_store, {
    servers: [
      {
        url: ENV.fetch('REDIS_URL'),
        serializer: JSON,
      },
    ],
    expire_after: 14.days,
    key: ENV.fetch('ISUXPORTAL_SESSION_COOKIE', '__Host-isuxportal_sess'),
    same_site: ENV.fetch('ISUXPORTAL_SESSION_SAMESITE', :lax).to_sym,
    threadsafe: true,
    secure: ENV.fetch('ISUXPORTAL_SESSION_SECURE', '1') == '1',
  }


  # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
  # the I18n.default_locale when a translation cannot be found).
  config.i18n.fallbacks = true

  # Send deprecation notices to registered listeners.
  config.active_support.deprecation = :notify

  # Use default logging formatter so that PID and timestamp are not suppressed.
  config.log_formatter = ::Logger::Formatter.new

  # Use a different logger for distributed setups.
  # require 'syslog/logger'
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new 'app-name')

  if ENV["RAILS_LOG_TO_STDOUT"].present?
    logger           = ActiveSupport::Logger.new(STDOUT)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  # Do not dump schema after migrations.
  config.active_record.dump_schema_after_migration = false

  config.filter_parameters += [:email_address]

  # Inserts middleware to perform automatic connection switching.
  # The `database_selector` hash is used to pass options to the DatabaseSelector
  # middleware. The `delay` is used to determine how long to wait after a write
  # to send a subsequent read to the primary.
  #
  # The `database_resolver` class is used by the middleware to determine which
  # database is appropriate to use based on the time delay.
  #
  # The `database_resolver_context` class is used by the middleware to set
  # timestamps for the last write to the primary. The resolver uses the context
  # class timestamps to determine how long to wait before reading from the
  # replica.
  #
  # By default Rails will store a last write timestamp in the session. The
  # DatabaseSelector middleware is designed as such you can define your own
  # strategy for connection switching and pass that into the middleware through
  # these configuration options.
  # config.active_record.database_selector = { delay: 2.seconds }
  # config.active_record.database_resolver = ActiveRecord::Middleware::DatabaseSelector::Resolver
  # config.active_record.database_resolver_context = ActiveRecord::Middleware::DatabaseSelector::Resolver::Session
  config.x.slack.webhook_url = ENV.fetch('ISUXPORTAL_SLACK_WEBHOOK_URL')

  config.x.github.client_id = ENV.fetch('ISUXPORTAL_GITHUB_CLIENT_ID')
  config.x.github.client_secret = ENV.fetch('ISUXPORTAL_GITHUB_CLIENT_SECRET')

  config.x.discord.client_id = ENV.fetch('ISUXPORTAL_DISCORD_CLIENT_ID')
  config.x.discord.client_secret = ENV.fetch('ISUXPORTAL_DISCORD_CLIENT_SECRET')
  config.x.discord.server_id = ENV.fetch('ISUXPORTAL_DISCORD_SERVER_ID')
  config.x.discord.bot_token = ENV.fetch('ISUXPORTAL_DISCORD_BOT_TOKEN')
  config.x.discord.contestant_role_id = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_ROLE_ID')
  config.x.discord.contestant_final_role_id = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE_ID')
  config.x.discord.contestant_final_role = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_FINAL_ROLE') == '1'
  config.x.discord.contestant_qualify_role_id = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE_ID')
  config.x.discord.contestant_qualify_role = ENV.fetch('ISUXPORTAL_DISCORD_CONTESTANT_QUALIFY_ROLE') == '1'
  config.x.discord.support_comm_channel_roles = ENV.fetch('ISUXPORTAL_DISCORD_SUPPORT_COMM_CHANNEL_ROLES').split(?,).map{ |_| _.split(?=,2) }.to_h

  config.x.admin_auth.login = ENV.fetch('ISUXPORTAL_ADMIN_LOGIN')
  config.x.admin_auth.password = ENV.fetch('ISUXPORTAL_ADMIN_PASSWORD')

  config.x.contest.max_teams = 500
  config.x.contest.registration_open = ENV.fetch('ISUXPORTAL_TIMING_REGISTRATION_OPEN').yield_self { |_| Time.xmlschema(_) }
  config.x.contest.registration_close = ENV.fetch('ISUXPORTAL_TIMING_REGISTRATION_CLOSE').yield_self { |_| Time.xmlschema(_) }

  config.x.contest.contest_start = ENV.fetch('ISUXPORTAL_TIMING_CONTEST_START').yield_self { |_| Time.xmlschema(_) }
  config.x.contest.contest_freeze = ENV.fetch('ISUXPORTAL_TIMING_CONTEST_FREEZE').yield_self { |_| Time.xmlschema(_) }
  config.x.contest.contest_end = ENV.fetch('ISUXPORTAL_TIMING_CONTEST_END').yield_self { |_| Time.xmlschema(_) }

  config.x.sentry.dsn = ENV.fetch('SENTRY_DSN')
end
