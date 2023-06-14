#### Install package

- `nx run foundry-example:install --args='-- package=dapphub/ds-test'`

#### Setting up foundry

```sh
curl -L https://foundry.paradigm.xyz | bash # install foundryup binary
foundryup # install Foundry
```

#### Setting up local environment

Create .env with env.sample and get the appropriate values. The private key can be taken from an existing Anvil account.

Run local node with Anvil with the below command

```
anvil
```

Deploy contracts locally to test

```
nx run govrn-contract:deployLocal
```
