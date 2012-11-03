# Rakefile with several convenience functions for developing and deploying
# this blog.

CWD = File.dirname(__FILE__)

task :default => [:devserver]

desc "Run Jekyll development server"
task :devserver do
    Dir.chdir("#{CWD}/site") do
        sh "jekyll --server --auto --limit_posts 10 --future _dev"
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