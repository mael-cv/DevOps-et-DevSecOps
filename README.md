
  ````yml
install-dependencies:
    executor: node/default
    steps:
      - checkout
      - run:
          name: Build dependencies
          command: echo "Building things..."
      - run:
          name: Install dependencies
          command: npm install
````


````yml
- prepare-deployment-env:
  requires:
    - package-project
  filters:
    branches:
      only:
        - main
        - hotfix
````


![Picture of jobs execution](images/BuildProcess1.png)
![Picture of jobs execution](images/BuildProcess2.png)
![Picture of jobs execution](images/BuildProcess3.png)


example:

```bash
npx create-next-app --example with-jest with-jest-app
```

```bash
yarn create next-app --example with-jest with-jest-app
```

```bash
pnpm create next-app --example with-jest with-jest-app
```

## Running Tests

```bash
npm test
```

```bash
yarn test
```

```bash
pnpm test
```

### Mael Chebbi Vigneau



