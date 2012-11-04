# Rakefile with several convenience functions for developing and deploying
# this blog.

CWD = File.dirname(__FILE__)

task :default => [:devserver]

desc "Run Jekyll development server"
task :devserver do
    Dir.chdir("#{CWD}/site") do
        sh "jekyll --server --auto --limit_posts 10 --future"
    end
end

desc "Generate the entire blog output directory"
task :generate do
    Dir.chdir("#{CWD}/site") do
        sh "jekyll"
    end
end

desc "Just deploy _site to server"
task :deploy_only do
    Dir.chdir("#{CWD}/site") do
        # Add something like this to your ~/.ssh/config file:
        # Host blogserver
        #   Hostname my.server.com
        #   User my_username
        sh "rsync -av --chmod=ug=rwX,o=rX --delete _site/ " \
           "blogserver:/srv/www/fredericiana.com/"
    end
end

desc "Generate and deploy blog to server"
task :deploy => [:generate, :deploy_only]

desc "Create a new article with today's date"
task :new, :title do |t, args|
    require 'date'

    unless args.title.nil?
        slug = slugify(args.title)
    else
        slug = 'new-article'
    end

    d = Date.today

    newfile = "#{d}-#{slug}.md"
    Dir.chdir("#{CWD}/site/_posts") do
        if File.exists?(newfile)
            raise "Oh noes, #{newfile} already exists. Start that article first?"
        end

        File.open(newfile, 'w') do |f|
            f.write(File.open('_template.md').read.sub(/%title/, args.title))
        end

        $stderr.puts "Created #{newfile}. Rename and start blogging!"
    end
end

# Create a URL slug from the title
def slugify(title)
    str = title.dup
    str.gsub!(/[^a-zA-Z0-9 ]/,"")
    str.gsub!(/[ ]+/," ")
    str.gsub!(/ /,"-")
    str.downcase!
    str
end