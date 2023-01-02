# KevinMalone

A self reporting bot for the movement model

## Functionality

- `/report` - creates a private message to the user with a link the reporting form
- `/join` - Join a guild where this command is run
- `/update` - Update a profile for a given community
- `/add_onboarding_contributions` - Ask user whether they have completed the initial contributions

## Setup

1. Clone this repository
1. Create a virtual environment (`python3.9 -m venv ./.venv`)
1. Activate the virtual environment (`source ./.venv/bin/activate`)
1. Install dependencies via pip (`pip install -r requirements-dev.txt`)
1. Setup environment variables as required in ./.env (see env.sample) for the values which need populating
1. In a separate directory, clone the [Govrn monorepo](https://github.com/Govrn-HQ/govrn-monorepo), and follow the the setup instructions there. 


## Development in VS Code

Requires the following VS Code extensions to be installed:

- Docker
- Remote – Containers

## Develop with Intellisense, Run, and Debug in Dev Container

### Open Dev Container

- click `Open a Remote Window` button in lower left corner
- click `Reopen in Container`
- click `From Dockerfile`

### Debug in Dev Container

- Open `Run and Debug`
- Select `Python:Bot` and click Run Button
- Stop when done testing bot

### Run Tests

- Open `Testing`
- Click the Run or Debug Button

### Close Dev Container

- In the lower left, select `Reopen Folder Locally`

### Source Control

- Open Folder w/o Dev Container and check in code

### Setup local redis instance

- Install redis server + redis-cli
- Run `sudo service redis-server start`
- Run `redis-cli`
- In the cli, run `monitor`
- In your .env file, set the redis url to your local instance `REDIS_URL=redis://localhost` 

## Setup Docker and Dev Container

- Create a new folder
- add a `bot` folder with these files:
  - **init**.py
  - **main**.py
  - commands.py
- `Docker: Add Docker files to Workspace`
  - Application Platform: `Python: General`
  - App's Entry Point: `bot/__main__.py`
  - Include optional Docker Compose files: `no`
- `Remote-Containers: Open Folder in Container`
  - select parent folder and click Open
  - `From Dockerfile`
- Add extensions to Dev Container for development
  - `Python`
- Open Terminal and run the following in the Dev Container
  - `python bot/__main__.py`
- `ctrl`-`c` to stop bot

### Setup Debug in Dev Container

- `Run and Debug`
- `Add Configuration...`
- `Python`
- `Python File`
- Set `name` to `Python: Bot`
- Set `program` to `bot/`

## Credits

- <https://github.com/python-discord/bot>

## License

MIT © Govrn
