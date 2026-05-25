source "https://rubygems.org"

# Use the github-pages metagem so local builds match what GitHub Pages
# actually serves. This pins Jekyll and every plugin to the versions
# GH Pages currently runs. Do not bump Jekyll directly.
gem "github-pages", group: :jekyll_plugins

# Plugins GH Pages whitelists (also declared in _config.yml).
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
end

# Windows / JRuby compatibility shims (harmless on macOS/Linux).
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Ruby 3.0+ no longer ships webrick as default.
gem "webrick", "~> 1.8"
