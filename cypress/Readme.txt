npm init -y
npm install --save--dev cypress
npx cybress open

Sample: In HTML
<span data-cy="box-input-name">

Sample: In Code
cy.get('[data-cy=box-input-name]')

