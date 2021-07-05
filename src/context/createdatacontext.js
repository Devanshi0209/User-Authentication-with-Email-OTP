/*import React,{useReducer} from 'react';

//so basically reducer is for state management and we call useReducer function with state and dispatch and in the argument we have the reducer function(which consists of all the switch statements) and default value of state
//dispatch is a function that is called with actions object and then react takes the actions object to the reducer function
//actions are functions we use to change our state
export default (reducer,actions,defaultValue)=>{
	const Context=React.createContext();
	const Provider=({children})=>{
const [state,dispatch]=useReducer(reducer,defaultValue);
const boundactions={};
for( let key in actions)
{
boundactions[key]=actions[key](dispatch);
//so we called dispatch on all the actions and boundactions is now functions to change the state
}
return (
	<Context.Provider value={{state, ...boundactions}}> //this is the component being used by all the child screens to get access to the centralized data
	{children}
	</Context.Provider>
	);
	};

return {Context,Provider};

};
*/
import React,{useReducer} from 'react';

export default (reducer,actions,defaultValue)=>{

const Context=React.createContext();

const Provider=({children})=>{
	const [state,dispatch]=useReducer(reducer,defaultValue);

const boundactions={};
for (let key in actions){
	boundactions[key]=actions[key](dispatch);

}

return (
	<Context.Provider value={{state,...boundactions}}>
	{children}
	</Context.Provider>
	);
};

return{Context,Provider};
};