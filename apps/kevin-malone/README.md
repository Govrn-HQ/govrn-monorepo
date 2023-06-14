# KevinMalone

A self reporting bot for the movement model

## Functionality

- `/report` - creates a private message to the user with a link the reporting form
- `/join` - Join a guild where this command is run
- `/update` - Update a profile for a given community
- `/add_onboarding_contributions` - Ask user whether they have completed the initial contributions

## Dev Setup

1. Clone this repository.
2. Setup environment variables: `cp env.example .env`

### Requirements

#### Local redis instance

- Install [Redis CLI tools](https://redis.io/docs/getting-started/).
- [start](https://tableplus.com/blog/2018/10/how-to-start-stop-restart-redis.html) the redis server, if not running.
- To open the Redis REPL, run: `redis-cli`
- In Redis REPL, to stream back every command processed by the Redis server, run `monitor` or `redis-cli monitor`
  directly in cmd.
- In your .env file, set the **redis url** to your local instance `REDIS_URL=redis://localhost`

There are available GUI alternative e.g. [DBngin](https://dbngin.com/); It’s a hassle-free way to manage the local Redis database servers.

#### Protocol API

- Run protocol API server. To learn about how to setup local protocol API, check Protocol
  API's [README](../protocol-api/README.md)
- update `PROTOCOL_URL` env variable with Protocol API URL.

## Develop with Intellisense and Dev Container

### Run & Test Locally

1. Create a [virtual environment](https://python-poetry.org/docs/managing-environments)
   with python `3.8`.
2. Install dependencies via pip: `poetry run pip install -r requirements-dev.txt`.
3. You can run & test using nx, check [project.json](project.json).
4. Or you can directly run using command line:
    - run: `poetry run make`
    - test: `poetry run make test`

### Open Dev Container

To develop in vscode's dev container, you can follow
this [documentation](https://code.visualstudio.com/docs/devcontainers/containers), using
From [Dockerfile](./Dockerfile).

### Debug in Dev Container

- Open `Run and Debug`
- Select `Python:Bot` and click Run Button
- Stop when done testing bot

### Run Tests

- Open `Testing`
- Click the Run or Debug Button

### Setup Debug in Dev Container

- `Run and Debug`
- `Add Configuration...`
- `Python`
- `Python File`
- Set `name` to `Python: Bot`
- Set `program` to `bot/`

## Docker

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

## Credits

- <https://github.com/python-discord/bot>

## License

MIT © Govrn
