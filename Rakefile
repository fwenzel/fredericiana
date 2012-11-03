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
