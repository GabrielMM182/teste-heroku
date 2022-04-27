---------------------
subir no reroku uma aplicação

heroku --version
heroku login -i
heroku create
git init
heroku git:remote -a nome-teste
git add .
git commit -m "nome do app"
git push heroku master

- configurar a aplicação  !!!!! obrigatorio
* definir em package.json (    "start": "node index.js") para ficar o npm start e o comando 
* definir no index const (port = process.env.PORT)

- para usar o bd da heroku basta colocar data e ir colocando os dados no .sql e dps colocar nossas tabeleas

CLI plugins allow you to extend your CLI installation. Install a CLI plugin with heroku plugins:install someplugin. See Using CLI Plugins for more information on plugin management.

Here are some useful plugins:

heroku-builds — View builds, purge the build cache, and create builds from tarballs.
heroku-repo — Commands to manipulate an app’s Heroku git repository.
api — Make ad-hoc API requests (such as heroku api GET /account).
heroku-pg-extras — Provides extra heroku pg:* commands.
heroku-slugs — Downloads app slugs.
heroku-kafka — Manage Heroku Kafka.
heroku-guardian - View various configurations within Heroku that help secure your apps, spaces, and users.
heroku-papertrail — Display, tail, and search for logs with Papertrail.
advanced-scheduler — Create and manage your Advanced Scheduler triggers.
heroku-cron — Create, manage and monitor your Cron To Go jobs using interactive command line or using manifest files in post-deploy scripts.