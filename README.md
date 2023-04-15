# Model View Controller

### Step-step

1. Prepare the environment, clone this repo

```sh
git clone https://github.com/bali-dev-camp/03-mvc.git
```

2. Install project dependencies

```sh
npm install
```

3. Enjoy, and improve with ejs

##### Note

4. Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in the `node_modules/.prisma/client` directory and update the `migration`:

```sh
npx prisma generate
```

```sh
npx prisma migrate dev
```
