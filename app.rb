require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end

get '/titulo1' do
    send_file 'public/mockup.html'
end

get '/stylesheets/:name.css' do
 content_type 'text/css', :charset => 'utf-8'
 scss(:"stylesheets/#{params[:name]}")
end