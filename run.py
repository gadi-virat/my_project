from flask_script import Manager, Command

from werkzeug.serving import run_simple

from my_project.libs.core import create_app

app = create_app('my_project')

manager = Manager(app)


class DevServer(Command):

    help = description = 'Runs the Flask development server'

    def make_app(self, domain):
        my_app = create_app('my_project')
        return my_app

    def __call__(self, app, **kwargs):
        self.app = app
        run_simple('0.0.0.0',
                   5000,
                   app,
                   use_debugger=True,
                   use_reloader=True)


manager.add_command('runserver', DevServer)

if __name__ == '__main__':
    manager.run()
