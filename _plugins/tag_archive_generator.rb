module Jekyll
  class TagArchivePage < BaseArchivePage
    attr_accessor :posts

    def layout_err_msg
      "
Hold your horses!  tag_archive_generator plugin, here.

You've enabled me but haven't added a tag_archive layout.
At least put an empty file there or I'm not going to run.

Missing file:
  %s/%s.html
" % ["_layouts", @layout]
    end

    def initialize(site, tag, posts)
      @tag = tag
      @url = "/tag/#{@tag}/"
      super site, posts
    end

    def data
      super.deep_merge({
        "tag" => @tag,
        "title" => "Posts tagged \"%s\"" % @tag,
      })
    end
  end

  class TagGenerator < Generator
    include ArchiveGenerator

    def add_to_bucket(post)
      post.tags.each do |tag|
        @bucket[tag] ||= default_bucket
        @bucket[tag][:posts] << post
      end
    end

    def process
      @bucket.each_pair do |tag, data|
        posts = data[:posts]
        posts.sort! { |a,b| b.date <=> a.date }
        @site.pages << TagArchivePage.new(@site, tag, posts)
      end
    end
  end
end