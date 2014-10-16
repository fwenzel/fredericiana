# Rakefile with several convenience functions for developing and deploying
# this blog.
require 'date'

CWD = File.dirname(__FILE__)

task :default => [:help]


desc "Check for conditions that would silently corrupt output"
task :check_dependencies do
    sh "python -c 'import pygments'" do |ok, res|
        if ! ok
            puts red("Pygments not found, please `pip install pygments`!")
            exit a
        end
    end
end


desc "Run Jekyll development server"
task :devserver => [:check_dependencies] do
    Dir.chdir("#{CWD}/site") do
        sh "jekyll serve --config _config.yml,_config_dev.yml --watch --limit_posts 10 --future --trace"
    end
end


desc "Generate the entire blog output directory"
task :generate => [:check_dependencies] do
    Dir.chdir("#{CWD}/site") do
        sh "jekyll build"
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


desc "Create a new article with a dummy future date"
task :new, :title do |t, args|
    unless args.title.nil?
        slug = slugify(args.title)
    else
        slug = 'new-article'
    end

    d = Date.today
    newfile = "#{d.year+1}-01-01-#{slug}.md"

    Dir.chdir("#{CWD}/site/_posts") do
        if File.exists?(newfile)
            $stderr.puts red("Oh noes, #{newfile} already exists. Start that article first?")
            exit 1
        end

        File.open(newfile, 'w') do |f|
            f.write(File.open('_template.md').read.sub(/%title/, args.title || ''))
        end

        puts green("Created #{newfile}. Start blogging!")
    end
end


desc "Redate all future posts (i.e., drafts) to today for release"
task :today do
    d = Date.today
    Dir.chdir("#{CWD}/site/_posts") do
        posts = Dir.glob('[1-9]*.md').select {|f| Date.parse(f[0, 10]) > d}
        if posts.empty?
            $stderr.puts red("No future posts found!")
            exit 0
        end

        $stdout.puts "About to move the following file(s) to today:"
        posts.each do |p|
            puts "- #{p}"
        end
        if !check?
            puts green("Fine. Nothing happened.")
            exit 0
        end

        posts.each do |p|
            mv p, "#{d}#{p[10..-1]}"
        end
        puts green("Done!")
    end
end


# "Show all valid tasks."
# (Without desc directive, won't show up in the list itself.)
task :help do
    verbose(false)
    sh "rake -T"
end

# *** Helper functions ***


# Colorize command line output.
def colorize(text, color_code)
    "\033[#{color_code}m#{text}\033[0m"
end
def red(text); colorize(text, 31); end
def green(text); colorize(text, 32); end

# Create a URL slug from the title
def slugify(title)
    str = title.dup
    str.gsub!(/[^a-zA-Z0-9 ]/,"")
    str.gsub!(/[ ]+/," ")
    str.gsub!(/ /,"-")
    str.downcase!
    str
end

def check?
    puts green("Do you want to continue?") + " (y/n)"
    input = $stdin.gets.chomp
    input == 'y'
end
