from flask import Flask
from flask_restful import Api

from my_project.api import configure_api


def create_app(package_name):
    """Create app ,load configuration and initialise Api."""
    app = Flask(package_name)

    load_config(app)
    initialize_extensions(app)
    register_blueprints(app)
    return app


def load_config(app):
    """Load congigurations."""
    app.config.from_pyfile("config/development.cfg")


def initialize_extensions(app):
    """Initialise Api."""
    api_manager = Api(app)
    configure_api(api_manager)


def register_blueprints(app):
    """Function to register blueprints."""
    from my_project.views import main

    app.register_blueprint(main)
