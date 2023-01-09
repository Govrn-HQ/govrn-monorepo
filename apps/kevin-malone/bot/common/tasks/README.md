# Weekly report generation

Kevin Malone can generate weekly reports summarizing the contributions made to various DAOs. These are currently sent to the Govrn discord server. These reports can also be generated on an ad-hoc basis. After following the steps in ./README.md at the root of this project, follow these steps to generate the reports locally:

1. Ensure you have activated your virtual environment (outlined in the setup section of the project README)
1. Ensure that you have setup the (protocol-api from the Govrn monorepo)[https://github.com/Govrn-HQ/govrn-monorepo/tree/staging/apps/protocol-api] according to the steps outlined on that project
1. Enusre the .env/environment variables in the protocol-api project match the desired database/postgres instance for generating the reports
1. In a seperate terminal instance, serve the (protocol-api from the Govrn monorepo)[https://github.com/Govrn-HQ/govrn-monorepo/tree/staging/apps/protocol-api] using the steps outlined in the linked README
1. From the root of the Kevin Malone project, run `python bot/common/tasks/weekly_contributions.py`
1. Collect the reports from the ./reports directory