require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end

get '/titulo1' do
    send_file 'public/mockup.html'
end

get '/sobre' do
    send_file 'public/plano-diretor.html'
end

get '/avaliacao'
    send_file 'public/avaliacao.html'
end

get '/acompanhamento'
    send_file 'public/acompanhamento.html'
end

get '/stylesheets/:name.css' do
 content_type 'text/css', :charset => 'utf-8'
 scss(:"stylesheets/#{params[:name]}")
end