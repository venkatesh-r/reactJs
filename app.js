
const app = React.createElement('div', {id:'root'},
  [
    React.createElement('div', {id: 'child1'}, 
    React.createElement('h1', {id: 'heading'}, 'Main heading'), 
    React.createElement('p', {class: 'para1'}, 'Paragraph tag')),
  ],
  [
    React.createElement('div', {id: 'child2'}, React.createElement('h2', {id: 'heading'}, 'second heading')),
  ]
)

const heading = React.createElement('h1', {id: 'heading'}, 'Hello React JS');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
console.log(app)