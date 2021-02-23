
# WISER LOGIN

![coverage](/coverage/badge-functions.svg)
![coverage](/coverage/badge-lines.svg)
![coverage](/coverage/badge-statements.svg)
![coverage](/coverage/badge-branches.svg)

This is a [Next.js](https://nextjs.org/) application to selective process for [Wiser Education](https://wisereducacao.com/).

## What is inside?

### [Live Site](https://netlify...)

![](wiser_login.gif)

This project uses lot of stuff as:

![react](https://aleen42.github.io/badges/src/react.svg)
![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)
![redux](https://aleen42.github.io/badges/src/redux.svg)
![eslint](https://aleen42.github.io/badges/src/eslint.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Second, run the fake authentication api:

```
yarn start-server-auth
```

The fake server will be live in (http://localhost:8000)

The list of authenticated users is in the `users.json` file

![Authenticated Users](https://i.ibb.co/Nn2VrY9/users-json.png)

You can change these informations if you want. The error message will appear when the user enters their wrong credentials

If the user enters correct credentials, will be redirected to authenticated home page. All the flux is availble to view in the gif video on top of this file !

## Test the components on Storybook

Run the command: `yarn storybook` to view all the components properties of this application 

![storybook components](https://i.ibb.co/WV9FJv8/storybook.png)

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `start-server-auth`: runs mocked authentication api
- `generate`: create the base components files

## 👨‍💻 Developer

<table id="contribuicoes" >
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/mvmmarcus/"><img style="border-radius: 50%;" src="https://gitlab.com/uploads/-/system/user/avatar/6195744/avatar.png?width=400" width="100px;" alt=""/><br /><sub><b>Marcus Vinícius</b></sub></a><br /><a href="https://gitlab.com/mvmmarcus" title="Marcus Vinicius">👨‍🚀</a></td>
  </tr>
</table>

Developed with ❤️ by <a href="https://www.linkedin.com/in/mvmmarcus/">Marcus Vinícius</a>

