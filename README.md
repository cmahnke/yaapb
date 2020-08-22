# Add a new post

The following will create a new draft

```
hugo new post/post-title/index.md
```

# Tumblr import to Jekyll

```
/usr/local/opt/ruby/bin/ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Tumblr.run({
      "url"            => "https://yaapb.tumblr.com/",
      "format"         => "md", # or "md"
      "grab_images"    => true,  # whether to download images as well.
      "add_highlights" => false,  # whether to wrap code blocks (indented 4 spaces) in a Liquid "highlight" tag
      "rewrite_urls"   => false   # whether to write pages that redirect from the old Tumblr paths to the new Jekyll paths
    })'
```

# Initializing generated files for offline usage

```
yarn
yarn logo
./scripts/setup.sh
```


# Starting hugo

```
/usr/local/bin/hugo server -D -F --debug --disableFastRender --renderToDisk --ignoreCache  --gc
```
