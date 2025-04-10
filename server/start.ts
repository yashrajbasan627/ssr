require('ts-node/register');
require('tsconfig-paths/register');

require('@babel/register')({
  extensions: ['.js', '.ts', '.tsx'],
  ignore: [/node_modules/],
});


require('./index'); 
